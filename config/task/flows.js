module.exports = {

  // ui
  ui: [
    'ui.clean',
    [
      'ui.svgIcon',
      'ui.sassValues',
    ],
    'ui.sync',
  ],

  // static
  static: [
    'static.clean',
    'static.sass',
    'static.img',
  ],

  develop: [
    '@ui',
    '@static',
    'global.nuxt',
  ],

  generate: [
    '@ui',
    '@static',
    {name: 'global.nuxt', options: {command: 'generate'}},
    'global.nuxtDistPathResolve',
  ],


  // // develop
  // develop: [
  //   'public.clean',
  //   [
  //     // 'public.sprite',
  //     'public.img',
  //     'public.svgIcon',
  //     'public.files',
  //     // 'public.html',
  //     'public.sassValues',
  //     'public.routings',
  //   ],
  //   [
  //     'public.css',
  //     'public.webpack',
  //   ],
  // ],

  // // develop
  // develop: [
  //   'public.clean',
  //   [
  //     // 'public.sprite',
  //     'public.img',
  //     'public.svgIcon',
  //     'public.files',
  //     // 'public.html',
  //     'public.sassValues',
  //     'public.routings',
  //   ],
  //   [
  //     'public.css',
  //     'public.webpack',
  //   ],
  // ],
}
