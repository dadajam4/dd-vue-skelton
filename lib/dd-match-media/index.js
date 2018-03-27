import EventManager from 'dd-event-manager';



export default class DDMatchMedia {



  /**
   * constructor
   */
  constructor(settings) {
    new EventManager(this);

    this.settings   = settings;
    this.conditions = [];
    this.states     = {};
    this.matchKeys  = [];
    this.setup();
  }



  /**
   * setup
   */
  setup() {
    for (let key in this.settings.groups) {
      this.matchKeys.push(key);
    }

    for (let breakPoint of this.settings.breakPoints) {
      this.matchKeys.push(breakPoint.key);
    }

    this.settings.breakPoints.forEach(breakPoint => {
      this.states[breakPoint.key] = false;

      const conditions = [`${this.settings.target}`];
      ['min', 'max'].forEach(key => {
        if (breakPoint[key]) conditions.push(`(${key}-width: ${breakPoint[key]}px)`);
      });

      this.conditions.push({type: 'key', key: breakPoint.key, condition: conditions.join(' and ')});
    });

    for (let key in this.settings.groups) {
      const conditions = [`${this.settings.target}`],
            group      = this.settings.groups[key],
            target     = group.min ? 'min' : 'max',
            keyValue   = group[target],
            value      = this.settings.breakPoints.find(breakPoint => breakPoint.key === keyValue)[target],
            condition  = `(${target}-width: ${value}px)`;

      this.states[key] = false;
      conditions.push(condition);
      if (group.orientation) conditions.push(`(orientation: ${group.orientation})`);
      this.conditions.push({type: 'group', key: key, condition: conditions.join(' and ')});
    }

    this.conditions.forEach(condition => {
      if (typeof window === 'undefined') {
        condition.mql = {matches: false};
      } else {
        condition.mql = window.matchMedia(condition.condition);
        condition.mql.addListener(() => {
          return this.checkCondition(condition);
        });
      }
      this.checkCondition(condition);
    });
  }



  /**
   * check condition
   */
  checkCondition(condition) {
    const isMatch = condition.mql.matches;
    this.set(condition, isMatch);
    return isMatch;
  }



  /**
   * get condition by key
   */
  getConditionByKey(key) {
    return this.conditions.find(condition => condition.key === key);
  }



  /**
   * set condition or key
   */
  set(condition, isMatch) {
    condition = typeof condition === 'string' ? this.getConditionByKey(condition) : condition;

    const key  = condition.key,
          old  = this.states[key];

    this.states[key] = isMatch;

    if (old !== isMatch) {
      this.emit('change', condition);
      this.emit(`change-${key}`, isMatch);
    }
  }
}
