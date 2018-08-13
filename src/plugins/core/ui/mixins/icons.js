const CREATE_DEFAULT_SETS = function() {
  return {
    md: {
      name: 'Material Design icon',
      icons: {
        'complete': 'check',
        'cancel': 'cancel',
        'close': 'close',
        'delete': 'cancel', // delete (e.g. v-chip close)
        'clear': 'clear',
        'success': 'check_circle',
        'info': 'info',
        'warning': 'priority_high',
        'error': 'warning',
        'prev': 'chevron_left',
        'next': 'chevron_right',
        'delimiter': 'fiber_manual_record', // for carousel
        'sort': 'arrow_upward',
        'expand': 'keyboard_arrow_down',
        'menu': 'menu',
        'subgroup': 'arrow_drop_down',
        'dropdown': 'arrow_drop_down',
        'edit': 'edit',
        'ratingEmpty': 'star_border',
        'ratingFull': 'star',
        'ratingHalf': 'star_half',
        'angleUp': 'expand_less',
        'angleDown': 'expand_more',
        'angleLeft': 'chevron_left',
        'angleRight': 'chevron_right',
        'calendar': 'event',
        'calendarToday': 'calendar_today',

        'user': 'perm_identity',
        'cart': 'shopping_cart',
        'check': 'check',
        'notification': 'notification_important',
        'arrowUp': 'arrow_upward',
        'arrowDown': 'arrow_downward',
        'arrowLeft': 'arrow_back',
        'arrowRight': 'arrow_forward',
        'search': 'search',
        'code': 'code',
        'comment': 'comment',
        'userAddress': 'account_box',
        'refresh': 'refresh',
        'renew': 'autorenew',
        'label': 'label',
        'home': 'home',
        'dotsHorizontal': 'more_horiz',
        'dotsVertical': 'more_vert',
        'phone': 'phone',
        'location': 'my_location',
        'link': 'link',
      },
    },
    mdi: {
      name: 'materialdesignicons.com',
      icons: {
        'complete': 'mdi-check',
        'cancel': 'mdi-close-circle',
        'close': 'mdi-close',
        'delete': 'mdi-close-circle', // delete (e.g. v-chip close)
        'clear': 'mdi-close',
        'success': 'mdi-check-circle',
        'info': 'mdi-information',
        'warning': 'mdi-exclamation',
        'error': 'mdi-alert',
        'prev': 'mdi-chevron-left',
        'next': 'mdi-chevron-right',
        'delimiter': 'mdi-circle', // for carousel
        'sort': 'mdi-arrow-up',
        'expand': 'mdi-chevron-down',
        'menu': 'mdi-menu',
        'subgroup': 'mdi-menu-down',
        'dropdown': 'mdi-menu-down',
        'edit': 'mdi-pencil',
        'ratingEmpty': 'mdi-star-outline',
        'ratingFull': 'mdi-star',
        'ratingHalf': 'mdi-star-half',
        'angleUp': 'mdi-chevron-down',
        'angleDown': 'mdi-chevron-up',
        'angleLeft': 'mdi-chevron-left',
        'angleRight': 'mdi-chevron-right',
        'calendar': 'mdi-calendar',
        'calendarToday': 'mdi-calendar-today',

        'user': 'mdi-account',
        'cart': 'mdi-cart',
        'check': 'mdi-check',
        'notification': 'mdi-bell',
        'arrowUp': 'mdi-arrow-up',
        'arrowDown': 'mdi-arrow-down',
        'arrowLeft': 'mdi-arrow-left',
        'arrowRight': 'mdi-arrow-right',
        'search': 'mdi-magnify',
        'code': 'mdi-code-tags',
        'comment': 'mdi-comment-text',
        'userAddress': 'mdi-account-location',
        'refresh': 'mdi-refresh',
        'renew': 'mdi-autorenew',
        'label': 'mdi-label',
        'home': 'mdi-home',
        'dotsHorizontal': 'dots-horizontal',
        'dotsVertical': 'dots-vertical',
        'phone': 'mdi-phone',
        'location': 'mdi-crosshairs-gps',
        'link': 'mdi-link',
      },
    },
    fa: {
      name: 'Font-Awesome 5+',
      icons: {
        'complete': 'fas fa-check',
        'cancel': 'fas fa-times-circle',
        'close': 'fas fa-times',
        'delete': 'fas fa-times-circle', // delete (e.g. v-chip close)
        'clear': 'fas fa-times-circle', // delete (e.g. v-chip close)
        'success': 'fas fa-check-circle',
        'info': 'fas fa-info-circle',
        'warning': 'fas fa-exclamation',
        'error': 'fas fa-exclamation-triangle',
        'prev': 'fas fa-chevron-left',
        'next': 'fas fa-chevron-right',
        'delimiter': 'fas fa-circle', // for carousel
        'sort': 'fas fa-arrow-up',
        'expand': 'fas fa-chevron-down',
        'menu': 'fas fa-bars',
        'subgroup': 'fas fa-caret-down',
        'dropdown': 'fas fa-caret-down',
        'edit': 'fas fa-edit',
        'ratingEmpty': 'far fa-star',
        'ratingFull': 'fas fa-star',
        'ratingHalf': 'fas fa-star-half',
        'angleUp': 'fas fa-angle-up',
        'angleDown': 'fas fa-angle-down',
        'angleLeft': 'fas fa-angle-left',
        'angleRight': 'fas fa-angle-right',
        'calendar': 'far fa-calendar',
        'calendarToday': 'fas fa-reply',

        'user': 'fas fa-user',
        'cart': 'fas fa-shopping-cart',
        'check': 'fas fa-check',
        'notification': 'fas fa-bell',
        'arrowUp': 'fas fa-arrow-up',
        'arrowDown': 'fas fa-arrow-down',
        'arrowLeft': 'fas fa-arrow-left',
        'arrowRight': 'fas fa-arrow-right',
        'search': 'fas fa-search',
        'code': 'fas fa-code',
        'comment': 'fas fa-comment-dots',
        'userAddress': 'fas fa-address-book',
        'refresh': 'fas fa-redo',
        'renew': 'fas fa-sync',
        'label': 'fas fa-tag',
        'home': 'fas fa-home',
        'dotsHorizontal': 'fas fa-ellipsis-h',
        'dotsVertical': 'fas fa-ellipsis-v',
        'phone': 'fas fa-phone',
        'location': 'fas fa-map-marked-alt',
        'link': 'fas fa-link',
      },
    },

  }
}

export default function Icons(iconfont = 'md', customIcons = {}) {
  // iconfont = 'mdi';
  // iconfont = 'fa';
  const iconSets = CREATE_DEFAULT_SETS();
  for (const key in customIcons) {
    iconSets[key] = customIcons[key];
  }

  return {
    name: 'vt@ui-icons',

    data() {
      return {
        iconfont,
        iconSets,
      }
    },

    computed: {
      currentIconSet() {
        return this.iconSets[this.iconfont];
      },
      icons() {
        return this.currentIconSet.icons;
      },
    },
  }
}
