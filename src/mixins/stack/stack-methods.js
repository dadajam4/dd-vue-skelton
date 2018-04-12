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
    this.$appStackContainer.attach(this);
  },

  /**
   * スタックをリセット（app配下からエレメントを削除）する
   */
  resetStack() {
    this.$appStackContainer.detach(this);
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

    // ※vnode.elmはvue2.5あたりから使えなくなったっぽい
    //   そもそもelmを参照（信頼）するのは正しいやり方ではないっぽい
    $activator = $activator && ($activator.$el/* || $activator.elm*/ || $activator);
    return $activator;
  },

  addClassForActivator(className) {
    if (!this.$activator) return;
    this.$util.addClass(this.$activator, className);
  },

  removeClassFromActivator(className) {
    if (!this.$activator) return;
    this.$util.removeClass(this.$activator, className);
  },

  /**
   * propで指定されたアクティベータを自身のメンバ変数に保持して
   * クリックオプションを設定する
   */
  setupActivator() {
    this.$activator = this.getActivator();

    if (!this.$activator) return;

    this.addClassForActivator('vc@stack-activator');

    this.$activator.addEventListener('click', this.activatorClickHandler, false);

    if (this.openOnHover) {
      this.$activator.addEventListener('mouseenter', this.mouseEnterHandler, false);
      this.$activator.addEventListener('mouseleave', this.mouseLeaveHandler, false);
    }
    if (this.contextmenu) {
      this.$activator.addEventListener('contextmenu', this.contextmenuHandler, false);
    }
  },

  /**
   * propで指定されたアクティベータのクリックオプションを解除する
   */
  resetActivator() {
    if (!this.$activator) return;

    this.removeClassFromActivator([
      'vc@stack-activator',
      'vc@stack-activator--active',
      'vc@stack-activator--disabled',
    ]);

    this.$activator.removeEventListener('click', this.activatorClickHandler, false);

    if (this.openOnHover) {
      this.$activator.removeEventListener('mouseenter', this.mouseEnterHandler, false);
      this.$activator.removeEventListener('mouseleave', this.mouseLeaveHandler, false);
    }

    if (this.contextmenu) {
      this.$activator.removeEventListener('contextmenu', this.contextmenuHandler, false);
    }
  },

  activatorClickHandler(e) {
    if (this.disabled) return;
    if (this.openOnHover) return;

    if (this.contextmenu) {
      if (this.isActive) this.close();
      return;
    }

    this.absoluteX = e.clientX;
    this.absoluteY = e.clientY;

    if (this.openOnClick && this.activatorAction) {
      this[this.activatorAction](e);
    }
  },

  contextmenuHandler(e) {
    e.preventDefault();
    this.absoluteX = e.clientX;
    this.absoluteY = e.clientY;

    if (this.isActive) {
      this.updateDimensions();
    } else {
      this.show(e);
    }
  },

  clearDelay() {
    for (let timer of this.delayTimers) {
      clearTimeout(timer);
    }
    this.delayTimers = [];
  },

  runDelay(prop, cb) {
    this.clearDelay();
    const ammount = typeof prop === 'number' ? prop : this[prop];
    if (!ammount) return cb();
    this.delayTimers.push(setTimeout(cb, ammount));
  },

  mouseEnterHandler(e) {
    this.runDelay('openHoverDelay', this.show);
  },

  mouseLeaveHandler(e) {
    this.runDelay('closeHoverDelay', () => {
      if (
        this.$refs.content && (e.relatedTarget === this.$refs.content || this.$refs.content.contains(e.relatedTarget))
        || this.$activator && (e.relatedTarget === this.$activator || this.$activator.contains(e.relatedTarget))
      ) return;
      this.close();
    });
  },

  activate() {
    this.cancelVisibilityCallBacks('close');
    this.addClassForActivator('vc@stack-activator--active');
    this.updateDimensions(() => {
      this.contentIsActive = true;
    });
  },

  deactivate() {
    this.cancelVisibilityCallBacks('show');
    this.removeClassFromActivator('vc@stack-activator--active');
    this.contentIsActive = false;
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

  getRoundedBoundedClientRect(el) {
    const rect = el.getBoundingClientRect();
    return {
      top: Math.round(rect.top),
      left: Math.round(rect.left),
      bottom: Math.round(rect.bottom),
      right: Math.round(rect.right),
      width: Math.round(rect.width),
      height: Math.round(rect.height),
    }
  },

  absolutePosition() {
    return {
      top: this.computedY || this.absoluteY,
      bottom: this.computedY || this.absoluteY,
      left: this.computedX || this.absoluteX,
      right: this.computedX || this.absoluteX,
      height: 0,
      width: 0,
    }
  },

  measure(el, selector) {
    el = selector ? el.querySelector(selector) : el;

    if (!el || typeof window === 'undefined') return null;

    const rect = this.getRoundedBoundedClientRect(el);

    return rect;
  },

  isShownContent() {
    return this.$refs.content && this.$refs.content.style.display !== 'none';
  },

  contentSneakPeek(cb) {
    if (this.isShownContent()) return cb();
    requestAnimationFrame(() => {
      this.$refs.style.display = 'inline-block';
      cb();
      this.$refs.style.display = 'none';
    })
  },

  updateActivatorDimension() {
    const dimention = !this.$activator || this.absolute ? this.absolutePosition() : this.measure(this.$activator);
    this.dimensions.activator = Object.assign(this.dimensions.activator, dimention);
  },

  updateContentDimension(cb) {

    // closeWithRemoveな時はrefの描画が完了していない可能性があるのでnextTickで拾う
    this.$nextTick(() => {
      const $el = this.$refs.content;
      if (!$el) return cb();

      requestAnimationFrame(() => {
        const originDisplay = $el.style.display;
        $el.style.display = 'inline-block';
        this.dimensions.content = this.measure($el);
        $el.style.display = originDisplay;
        requestAnimationFrame(() => {
          cb && cb();
        });
      })
    });
  },

  updateDimensions(cb) {
    this.pageYOffset = this.$store.state.scroll.top;
    this.updateActivatorDimension();
    this.updateContentDimension(cb);
  },

  onResize(e) {
    if (this.isVisible) {
      this.updateDimensions();
    }
  },
}, generators);
