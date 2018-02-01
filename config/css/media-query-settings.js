const mediaQuerySettings = {
  mediaTarget: 'all',

  breakPoints: {
    xs: null, // 0    ~ 575  : Phone (Narrow)
    sm: 576,  // 576  ~ 767  : Phone
    md: 768,  // 768  ~ 991  : Tablet
    lg: 992,  // 992  ~ 1199 : Desktop
    xl: 1200, // 1200 ~      : Desktop (Wide)
  },

  groups: {
    mobile         : {max: 'md'}, // Phone, Tablet
    desktop        : {min: 'lg'}, // Desktop
    mobileLandscape: {max: 'md', orientation: 'landscape'},
  },
};



module.exports = mediaQuerySettings;
