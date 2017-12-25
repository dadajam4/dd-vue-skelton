'use strict';



module.exports = function DDMatchMediaSettings(baseSettings) {
  let breakPoints = [];

  for (const key in baseSettings.breakPoints) {
    breakPoints.push({
      key: key,
      min: baseSettings.breakPoints[key],
    });
  }

  breakPoints = breakPoints.sort((a, b) => { return (!b.min || a.min > b.min) });
  breakPoints.forEach((row, index) => {
    const prev = breakPoints[index - 1];
    const next = breakPoints[index + 1];

    if (prev) {
      row.prev = prev.key;
    }

    if (next) {
      row.next = next.key;
      row.max  = next.min - 1;
    }
  });



  return {
    target     : baseSettings.mediaTarget || 'all',
    groups     : baseSettings.groups,
    breakPoints: breakPoints,
  };
}