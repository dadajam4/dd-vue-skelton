const cache = {};



// // for node process polyfill
// if (typeof process !== 'undefined' && process.pid) {
//   Intl = require('intl');
// }



class DateFormatDefine {
  constructor(define) {
    // define = JSON.parse(JSON.stringify(define));

    this._numericYearCaches = [];
    this._numericDayCaches = [];

    for (let key in define) {
      this[key] = define[key];
    }
  }

  numericYearByValue(value, numericSkip = false) {
    const cacheKey = (numericSkip ? 'n' : '') + value;
    const cache = this._numericYearCaches[cacheKey];
    if (cache) return cache;
    const date = new Date(value, 0, 1);
    const label = this.year.numeric(date);
    const result = numericSkip && label.match(/\d/) ? value : label;
    this._numericYearCaches[cacheKey] = result;
    return result;
  }

  longMonthByValue(value) {
    return this.month.long[value];
  }

  numericDayByValue(value, numericSkip = false) {
    const cacheKey = (numericSkip ? 'n' : '') + value;
    const cache = this._numericDayCaches[cacheKey];
    if (cache) return cache;
    const date = new Date(2018, 0, value);
    const label = this.day.numeric(date);
    const result = numericSkip && label.match(/\d/) ? value : label;
    this._numericDayCaches[cacheKey] = result;
    return result;
  }
}



function factory(define) {
  return JSON.parse(JSON.stringify(define));
}



/**
 * 言語別の日時フォーマットの定義を返却する
 * 一度生成した後はキャッシュされ、以降はキャッシュを返却する
 * localeに設定可能なのは BCP 47 で定義されている言語キー
 * @see: https://cloud.google.com/speech/docs/languages?hl=ja
 */
export default function createDateFormatDefine(locale) {
  if (cache[locale]) return new DateFormatDefine(cache[locale]);

  const define = {
    year: {
      numeric: null,
      '2-digit': null,
    },
    month: {
      numeric: null,
      '2-digit': null,
      narrow: null,
      short: null,
      long: null,
    },
    day: {
      numeric: null,
      '2-digit': null,
    },
    weekday: {
      narrow: [],
      short: [],
      long: [],
    },
  };

  // weekday
  {
    for (const key in define.weekday) {
      const formatter = new Intl.DateTimeFormat(locale, { weekday: key });
      for (let w = 0; w < 7; w++) {
        const date = new Date(Date.UTC(0, 0, 7 + w));
        define.weekday[key].push(formatter.format(date));
      }
    }
  }

  // year
  {
    const date = new Date(Date.UTC(1111, 0, 1));
    for (const key in define.year) {
      const formatter = new Intl.DateTimeFormat(locale, { year: key });
      define.year[key] = formatter.format;
    }
  }

  // month
  {
    for (const key in define.month) {
      define.month[key] = [];
      const formatter = new Intl.DateTimeFormat(locale, { month: key });
      for (let m = 0; m < 12; m++) {
        const date = new Date(Date.UTC(0, m, 1));
        define.month[key].push(formatter.format(date));
      }
    }
  }

  // day
  {
    const date = new Date(Date.UTC(1111, 0, 11));
    for (const key in define.day) {
      const formatter = new Intl.DateTimeFormat(locale, { day: key });
      define.day[key] = formatter.format;
      // for (let d = 1; d < 32; d++) {
      //   const date = new Date(Date.UTC(1111, 0, d));
      //   // define.day[key].push(formatter.format(date));
      // }
    }
  }

  // year month day の順序
  {
    const date = new Date(Date.UTC(1999, 10, 22));
    const formatter = new Intl.DateTimeFormat(locale, { year: '2-digit', month: '2-digit', day: '2-digit' });
    const formated = formatter.format(date);
    const indexMap = {};
    const indexMaps = [
      {type: 'year', index: formated.indexOf('99')},
      {type: 'month', index: formated.indexOf('11')},
      {type: 'day', index: formated.indexOf('22')},
    ];
    indexMaps.sort((a, b) => {
      return a.index < b.index ? -1 : 1;
    });
    for (let index = 0; index < 3; index++) {
      const target = indexMaps[index];
      target.index = index;
      indexMap[target.type] = target.index;
    }
    define.ymdIndexOrder = indexMaps.map(i => i.type);
    define.ymIndexOrder = define.ymdIndexOrder.filter(o => o !== 'day');
    define.mdIndexOrder = define.ymdIndexOrder.filter(o => o !== 'year');
    define.yearIndexLTMonthIndex = indexMap.year < indexMap.month;
    define.monthIndexLTDayIndex = indexMap.month < indexMap.day;
    define.indexMap = indexMap;
  }

  cache[locale] = define;
  return new DateFormatDefine(define);
}
