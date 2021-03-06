import EventManager       from 'dd-event-manager';
import windowLoader       from 'dd-window-loader';
import elementResizeEvent from 'element-resize-event';



const SCROLL_JUDGE_INTERVAL = 500;



export default class DDScrollDetector {



  get _top() { return this.el.scrollTop }
  get _left() { return this.el.scrollLeft }
  get _width() { return this.isBodyElement ? window.innerWidth : this.el.clientWidth }
  get _height() { return this.isBodyElement ? window.innerHeight : this.el.clientHeight }
  get _scrollWidth() { return this.el.scrollWidth }
  get _scrollHeight() { return this.el.scrollHeight }



  /**
   * constructor
   */
  constructor(el) {
    this.loaded         = false;
    this.el             = null;
    this.elIsDocument   = null;
    this.isHtmlElement  = null;
    this.isBodyElement  = null;
    this.eventTarget    = null;
    this.scroll         = {top: 0, left: 0};
    this.scrollStart    = {top: 0, left: 0};
    this.lastAmmount    = {top: 0, left: 0};
    this.nowScroll      = false;
    this.scrollTimerId  = null;
    this.listeners      = {};
    this.width          = 0;
    this.height         = 0;
    this.scrollWidth    = 0;
    this.scrollHeight   = 0;
    this.lastHorizontal = null;
    this.lastVertical   = null;

    new EventManager(this);

    if (!windowLoader.HAS_WINDOW) return;

    this.elIsDocument  = !el;
    this.el            = el || document.scrollingElement || document.documentElement;
    this.isHtmlElement = this.el.constructor === HTMLHtmlElement;
    this.isBodyElement = this.el.constructor === HTMLBodyElement;
    this.eventTarget   = this.isHtmlElement || this.isBodyElement ? window : this.el;

    this.setup();
  }



  /**
   * setup
   */
  setup() {
    if (!this.el) return;

    windowLoader().then(() => {
      this.update();
      this.loaded = true;
      this.emit('load');
      this.startListeners();
    });
  }



  update() {
    this.updateScrollPositions();
    this.updateSize();
    this.updateScrollSize();
  }



  updateScrollPositions() {
    const beforeHorizontal = this.lastHorizontal,
          beforeVertical   = this.lastVertical,
          beforeTop        = this.scroll.top,
          beforeLeft       = this.scroll.left;

    this.scroll.top  = this._top;
    this.scroll.left = this._left;

    if (beforeTop > this.scroll.top) {
      this.lastVertical = 'top';
    } else if (beforeTop < this.scroll.top) {
      this.lastVertical = 'bottom';
    }

    if (beforeLeft > this.scroll.left) {
      this.lastHorizontal = 'left';
    } else if (beforeLeft < this.scroll.left) {
      this.lastHorizontal = 'right';
    }

    if (beforeHorizontal !== this.lastHorizontal) this.emit('changeLastHorizontal', this.lastHorizontal);
    if (beforeVertical   !== this.lastVertical  ) this.emit('changeLastVertical'  , this.lastVertical);
  }



  updateSize() {
    this.width  = this._width;
    this.height = this._height;
  }



  updateScrollSize() {
    this.scrollWidth  = this._scrollWidth;
    this.scrollHeight = this._scrollHeight;
  }



  startListeners() {
    this.stopListeners();
    this.listeners.scroll = e => {
      return this.onScroll(e);
    }
    this.listeners.resize = e => {
      return this.onResize(e);
    }
    this.eventTarget.addEventListener('scroll', this.listeners.scroll, false);
    elementResizeEvent(this.el, this.listeners.resize);
  }



  stopListeners() {
    if (this.listeners.scroll) {
      this.eventTarget.removeEventListener('scroll', this.listeners.scroll, false);
      delete this.listeners.scroll;
    }
    if (this.listeners.resize) {
      elementResizeEvent.unbind(this.el, this.listeners.resize);
      delete this.listeners.resize;
    }
  }



  clearScrollTimer() {
    if (this.scrollTimerId !== null) {
      clearTimeout(this.scrollTimerId);
      this.scrollTimerId = null;
    }
  }



  onResize() {
    this.update();
    this.emit('resize', this);
  }



  onScroll() {
    const bt = this.scroll.top,
          bl = this.scroll.left;

    if (!this.nowScroll) {
      this.scrollStart.top  = bt;
      this.scrollStart.left = bl;
    }

    this.updateScrollPositions();

    const ammount = {
      top : this.scroll.top  - bt,
      left: this.scroll.left - bl,
    };
    this.lastAmmount.top  = this.scroll.top  - this.scrollStart.top;
    this.lastAmmount.left = this.scroll.left - this.scrollStart.left;

    const payload = {
      top : this.scroll.top,
      left: this.scroll.left,
      ammount,
      totalAmmount: this.lastAmmount,
    };

    if (!this.nowScroll) {
      this.nowScroll = true;
      this.lastAmmount.top  = 0;
      this.lastAmmount.left = 0;
      this.emit('scrollStart', payload);
    }

    this.emit('scroll', payload);

    this.clearScrollTimer();
    this.scrollTimerId = setTimeout(() => {
      this.nowScroll = false;
      this.emit('scrollEnd', payload);
    }, SCROLL_JUDGE_INTERVAL);
  }
}
