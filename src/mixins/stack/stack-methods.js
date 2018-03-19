import generators from './stack-generators';



export default Object.assign({

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

  startWatchDimensions() {},

  stopWatchDimensions() {},
}, generators);
