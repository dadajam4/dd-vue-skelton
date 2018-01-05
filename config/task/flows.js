module.exports = {

  // core
  core: [
    'core.clean',
    [
      'core.svgIcon',
      'core.sassValues',
    ],
    // 'core.sync',
  ],

  // static
  static: [
    'static.clean',
    'static.sass',
    'static.img',
  ],

  'develop:static': [
    '@core',
    '@static',
  ],

  develop: [
    '@core',
    '@static',
    'global.nuxt',
  ],

  generate: [
    '@core',
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
