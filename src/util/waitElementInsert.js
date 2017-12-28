export const waitElementInsert = (query, opts = {}) => {
  const context  = opts.context  || document;
  const interval = opts.interval || 100;
  const forgo    = opts.forgo    || 1000;

  return new Promise(resolve => {
    let intervalTimerId = null,
        forgoTimerId    = null;

    const clearTimer = () => {
      if (intervalTimerId !== null) {
        clearInterval(intervalTimerId);
        intervalTimerId = null;
      }

      if (forgoTimerId !== null) {
        clearTimeout(forgoTimerId);
        forgoTimerId = null;
      }
    }

    const tick = () => {
      const els = context.querySelector(query);
      if (els) {
        clearTimer();
        resolve(els);
        return true;
      }
    }

    if (!tick()) {
      intervalTimerId = setInterval(tick, interval);
      forgoTimerId    = setTimeout(() => {
        clearTimer();
        return resolve();
      }, forgo);
    }
  });
};
