import { createActivatorWithContent } from '~/util';

export default {
  name: 'vt@menu',

  functional: true,

  render(h, context) {
    return createActivatorWithContent(h, context, 'vt@menu-content', context);
  },
}