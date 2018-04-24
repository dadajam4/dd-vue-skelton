export default {
  isActive: {
    get() { return this.innerValue },
    set(val) {
      if (this.disabled) return;
      this.innerValue = val;
      this.$emit('input', val);
    },
  },

  isFixWindow() { return !!this.dialog },

  zIndexStyles() {
    if (this.zIndex !== null) return {'z-index': this.zIndex};
  },

  stackElementStyles() {
    const styles = Object.assign({
      position: this.fixed ? 'fixed' : 'absolute',
      transformOrigin: this.origin,
    }, this.zIndexStyles);

    // if (this.zIndex !== null) styles['z-index'] = this.zIndex;

    if (!this.isFixWindow && this.detached && this.isVisible) {
      if (this.calculatedMaxWidth !== null) styles['max-width'] = this.calculatedMaxWidth + 'px';
      if (this.calculatedMinWidth !== null) styles['min-width'] = this.calculatedMinWidth + 'px';
      if (this.computedTop !== null && this.computedTop !== undefined) styles.top = this.computedTop + 'px';
      if (this.computedLeft !== null && this.computedLeft !== undefined) styles.left = this.computedLeft + 'px';
    }

    return styles;
  },

  computedX() { return this.$util.pixcelatedValue(this.x, {prop: 'width', ...this.containerDimension}) },
  computedY() { return this.$util.pixcelatedValue(this.y, {prop: 'width', ...this.containerDimension}) },
  containerDimension() { return {...this.$appStackContainer.dimension} },
  computedMinWidth() { return this.$util.pixcelatedValue(this.minWidth, {prop: 'width', ...this.containerDimension}) },
  computedOverflowMargin() { return this.overflowMargin && parseFloat(this.overflowMargin) },
  computedMaxWidth() { return this.$util.pixcelatedValue(this.maxWidth, {prop: 'width', ...this.containerDimension}) },
  computedMaxHeight() { return this.$util.pixcelatedValue(this.maxHeight, {prop: 'height', ...this.containerDimension}) },
  computedNudgeWidth() { return this.$util.pixcelatedValue(this.nudgeWidth, {prop: 'width', ...this.containerDimension}) },
  computedNudgeTop() { return this.$util.pixcelatedValue(this.nudgeTop, {prop: 'height', ...this.containerDimension}) },
  computedNudgeBottom() { return this.$util.pixcelatedValue(this.nudgeBottom, {prop: 'height', ...this.containerDimension}) },
  computedNudgeLeft() { return this.$util.pixcelatedValue(this.nudgeLeft, {prop: 'width', ...this.containerDimension}) },
  computedNudgeRight() { return this.$util.pixcelatedValue(this.nudgeRight, {prop: 'width', ...this.containerDimension}) },

  calculatedMaxWidth() { return this.computedMinWidth },
  calculatedMinWidth() {
    if (this.computedMinWidth !== null) return this.computedMinWidth;

    const minWidth = this.adjustActivatorWidth ? (
      this.dimensions.activator.width
      + this.computedNudgeWidth
    ) : 0;

    const maxWidth = this.computedMaxWidth === null ? minWidth : this.computedMaxWidth;
    return Math.min(maxWidth, minWidth);
  },

  computedTop() {
    if (this.fixed) return this.computedY;
    const a = this.dimensions.activator;
    const c = this.dimensions.content;

    let top;

    if (this.adjustActivatorCenter && !this.top && !this.bottom) {
      top = a.top + a.height / 2 - c.height / 2;
    } else {
      top = this.top ? a.bottom - c.height : a.top;
    }

    if (this.offsetY) top += this.top ? -a.height : a.height;
    if (this.computedNudgeTop) top -= this.computedNudgeTop;
    if (this.computedNudgeBottom) top += this.computedNudgeBottom;

    top = top + this.pageYOffset;

    if (!this.allowOverflow) {
      const containerTop = this.computedOverflowMargin + this.pageYOffset;
      const containerBottom = this.containerDimension.height - this.computedOverflowMargin + this.pageYOffset;
      const bottom = top + c.height;
      if (bottom > containerBottom) {
        if (this.switchOffsetOverflow) {
          top = a.top - c.height + this.pageYOffset;
          if (!this.offsetY) top += a.height;
        } else {
          top -= (bottom - containerBottom);
        }
      }
      if (top < containerTop) top += (containerTop - top);
    }

    return top;
  },

  computedLeft() {
    if (this.fixed) return this.computedX;
    const a = this.dimensions.activator;
    const c = this.dimensions.content;

    let left = 0;
    if (this.adjustActivatorCenter && !this.left && !this.right) {
      left = a.left + a.width / 2 - c.width / 2;
    } else {
      left = this.left ? a.left : a.right - c.width;
      // const minWidth = a.width < c.width ? c.width : a.width;
      // left += this.left ? a.left - (minWidth - a.width) : a.left;
    }

    // if (this.offsetX) left += this.left ? -a.width : a.width;
    // if (this.offsetX) left += this.left ? -c.width : a.width;
    if (this.offsetX) {
      if (this.adjustActivatorCenter) {
        left += this.left ? -c.width : a.width;
      } else {
        left += this.left ? a.width : -a.width;
      }
    }
    if (this.computedNudgeLeft) left -= parseInt(this.computedNudgeLeft);
    if (this.computedNudgeRight) left += parseInt(this.computedNudgeRight);

    if (!this.allowOverflow) {
      const containerLeft = this.computedOverflowMargin;
      const containerRight = this.containerDimension.width - this.computedOverflowMargin;
      const right = left + c.width;
      if (right > containerRight) left -= (right - containerRight);
      if (left < containerLeft) left += (containerLeft - left);
    }

    return left;
  },
}
