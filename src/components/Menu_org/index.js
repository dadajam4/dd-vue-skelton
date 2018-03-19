import Menu from './Menu';


const Test = {
  name: 'vt@test-menu',
  functional: true,
  render(h, context) {
    console.log(context.slots());
    return [
      h('div', null, 'a'),
      h('div', null, 'b'),
    ]
  },
};

export default {
  Menu,
  Test,
}
