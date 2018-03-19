import { mergeComponentOptions } from '~/util';



export default {
  name: 'vt@stackable',

  provide() {
    const data = {
      $parentStack: this,
    };

    return data;
  },

  inject: {
    $appStackContainer: {from: '$appStackContainer'},
    $parentStack: {from: '$parentStack', default: null},
  },

  props: {
    value: Boolean,
    activator: {
      type: [String, Object, Function],
    },
    activatorAction: {
      type: String,
      default: 'toggle',
    },
    transition: {
      type: String,
      default: 'vc@menu-transition',
    },
    closeOnEsc: Boolean,
    closeWithRemove: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      innerValue: this.value,
      isExistNode: !this.closeWithRemove || this.value,
      $activator: null,
      zIndex: 0,
      isVisible: false,
      detached: false,
    }
  },

  computed: {
    isActive: {
      get() { return this.innerValue },
      set(val) {
        this.innerValue = val;
        this.$emit('input', val);
      },
    },

    stackStyles() {
      const styles = {};
      if (this.zIndex !== null) styles['z-index'] = this.zIndex;
      return styles;
    },
  },

  watch: {
    value(val) {
      this.innerValue = val;
    },

    innerValue(val) {
      if (val) this.isExistNode = true;
    },

    isActive(val) {
      this.cancelVisibilityCallBacks(val ? 'close' : 'show');
    },

    isVisible(val) {
      this.$emit('changeVisible', val);
      if (val) {
        this.triggerShowCallBacks();
      } else {
        this.triggerCloseCallBacks();
      }
    },
  },

  created() {
    this._showCallBacks = [];
    this._closeCallBacks = [];

    if (this.$parentStack) {
      this._parentStackUnWatcher = this.$parentStack.$watch('isActive', parentIsActive => {
        if (!parentIsActive) this.isActive = false;
      });
    }
  },

  mounted() {
    this.setupActivator();
    this.initStack();
    this.$emit('mounted', this);
  },


  updated() {
    if (!this.detached && this.isActive) {
      this.initStack();
    }
  },

  deactivated() {
    this.isActive = false;
  },

  beforeDestroy() {
    if (this._parentStackUnWatcher) this._parentStackUnWatcher();
    this._parentStackUnWatcher = null;
    delete this._parentStackUnWatcher;
    this.resetActivator();
    this.resetStack();
    this.$emit('beforeDestroy', this);
  },

  methods: {

    addShowCallBack(cb, cancellable = true) {
      return this.addVisibilityCallBack('show', cb, cancellable);
    },

    addCloseCallBack(cb, cancellable = true) {
      return this.addVisibilityCallBack('close', cb, cancellable);
    },

    addVisibilityCallBack(type, cb, cancellable = true) {
      this[`_${type}CallBacks`].push({cb, cancellable});
    },

    cancelVisibilityCallBacks(type) {
      const key = `_${type}CallBacks`;
      const callbacks = this[key];
      const cancellListeners = [];
      for (let cb of callbacks) {
        if (typeof cb.cancellable === 'function') cb.cancellable(this);
      }
      this[key] = this[key].filter(cb => !cb.cancellable);
    },

    removeVisibilityCallBacks() {
      this._showCallBacks = [];
      this._closeCallBacks = [];
    },

    triggerVisibilityCallBacks(type) {
      const callbacks = this[`_${type}CallBacks`];
      for (let cb of callbacks) {
        cb.cb(this);
      }
      this.removeVisibilityCallBacks();
    },

    triggerShowCallBacks() {
      return this.triggerVisibilityCallBacks('show');
    },

    triggerCloseCallBacks() {
      return this.triggerVisibilityCallBacks('close');
    },

    /**
     * スタックを初期化（app配下にエレメントを挿入）する
     */
    initStack() {
      if (
        this._isDestroyed
        || !this.$refs.content
      ) return;

      const $target = this.$app.$el;

      if (!$target) {
        console.warn(`Unable to locate target vt@app`, this);
        return;
      }

      $target.insertBefore(
        this.$refs.content,
        $target.firstChild
      );

      this.$appStackContainer.attach(this);
      this.detached = true;
    },

    /**
     * スタックをリセット（app配下からエレメントを削除）する
     */
    resetStack() {
      if (!this.$refs.content) return;

      // IE11 Fix
      try {
        this.$refs.content.parentNode.removeChild(this.$refs.content);
      } catch (e) {}

      this.$appStackContainer.detach(this);
      this.detached = false;
    },

    /**
     * propで渡されたアクティベータを探して返却する
     */
    getActivator() {
      let $activator;
      if (this.activator) {
        if (typeof this.activator === 'string') {
          $activator = this.$parent.$el.querySelector(this.activator);
        } else {
          if (typeof this.activator === 'object') {
            $activator = this.activator;
          } else if (typeof this.activator === 'function') {
            $activator = this.activator();
          }
        }
      }
      $activator = $activator && ($activator.$el || $activator.elm || $activator);
      return $activator;
    },

    /**
     * propで指定されたアクティベータを自身のメンバ変数に保持して
     * クリックオプションを設定する
     */
    setupActivator() {
      this.$activator = this.getActivator();

      if (!this.$activator || this.$activator.__ddActivatorClickCallBack) return;

      const callback = e => this[this.activatorAction](e);
      this.$activator.__ddActivatorClickCallBack = callback;
      this.$activator.addEventListener('click', callback, false);
    },

    /**
     * propで指定されたアクティベータのクリックオプションを解除する
     */
    resetActivator() {
      if (this.$activator && this.$activator.__ddActivatorClickCallBack) {
        this.$activator.removeEventListener('click', this.$activator.__ddActivatorClickCallBack, false);
        this.$activator.__ddActivatorClickCallBack = null;
        delete this.$activator.__ddActivatorClickCallBack;
      }
    },

    show() {
      this.isActive = true;
    },

    close() {
      const cb = e => {
        if (this.closeWithRemove) this.isExistNode = false;
      }
      this.addCloseCallBack(cb);
      this.isActive = false;
    },

    toggle() {
      return this.isActive ? this.close() : this.show();
    },

    /**
     * ボディのトランジションを制御するvnodeを返却する
     */
    genTransition(children) {
      const h = this.$createElement;
      return h('transition', {
        props: {
          name: this.transition,
        },
        on: {
          'before-enter': e => { this.isVisible = true },
          'after-leave': e => { this.isVisible = false },
        },
      }, children);
    },

    /**
     * app直下に挿入するスタックvnodeを返却する
     */
    genStack(tag, data, children) {
      const h = this.$createElement;
      const $stack = this.isExistNode && h(tag, mergeComponentOptions({
        staticClass: 'vc@app-stack',
        style: this.stackStyles,
        directives: [
          {name: 'show', value: this.isActive},
        ],
        ref: 'content',
      }, data), children);

      return this.genTransition([$stack]);
    },
  },
}