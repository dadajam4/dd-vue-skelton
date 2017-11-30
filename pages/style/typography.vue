<style lang="scss" scoped>
</style>

<template>
  <div>
    <header class="vc@page-header">
      <h1 class="vc@page-header__inner vc@page__container">Typography</h1>
    </header>

    <main class="vc@page">
      <div class="vc@page__container">
        <p class="vc@page__introduction">これはページのイントロダクションです。</p>
      </div>
      <section id="examples" class="vc@page__section vc@page__container" data-anchor-point>
        <h2 class="vc@page__section-header">Examples</h2>

        <div v-for="example in EXAMPLES" :key="example.label">
          <h3>{{example.label}}</h3>
          <p>{{example.description}}</p>
          <dl v-for="item in example.items" :key="item.label">
            <dt>{{item.label}}</dt>
            <dd>
              <div :class="item.className">{{item.text}}</div>
            </dd>
          </dl>
        </div>
      </section>
    </main>
  </div>
</template>

<script>

/*
dt
figcaption
legend
*/
const EXAMPLES = [
  {
    label: 'heading',
    description: 'htmlの見出し系です',
    items: [
      {
        label: 'h1',
        text: 'Page Title ページタイトル',
        size: '112',
        className: 'vc@text--page-title',
        weight: 'regular',
      },
      {
        label: 'h2',
        text: 'Level-2 セクションの見出しです',
        size: '112',
        className: 'vc@text--section-heading',
        weight: 'regular',
      },
      {
        label: 'h3',
        text: 'Level-3 セクション内の小見出しです',
        size: '112',
        className: 'vc@text--section-sub-heading',
        weight: 'regular',
      },
      {
        label: 'h4',
        text: 'Level-4 何かのタイトルです',
        size: '112',
        className: 'vc@text--title',
        weight: 'bold',
      },
      {
        label: 'h5',
        text: 'Level-5 何かのサブタイトルです',
        size: '112',
        className: 'vc@text--sub-title',
        weight: 'regular',
      },
      {
        label: 'h6, caption',
        text: 'Level-6 キャプションです',
        size: '112',
        className: 'vc@text--caption',
        weight: 'regular',
      },
    ],
  },
  {
    label: 'body',
    description: 'コンテンツ本文系です',
    items: [
      {
        label: 'strong, em, b',
        text: 'This is Bold Body. 強調された本文です',
        size: '112',
        className: 'vc@text--strong-body',
        weight: 'bold',
      },
      {
        label: 'b1',
        text: 'This is Normal Body. 標準の本文です',
        size: '112',
        className: 'vc@text--body',
        weight: 'regular',
      },
    ],
  },
  {
    label: 'size',
    description: 'テキストサイズのバリエーションです',
    items: [
      {
        label: 'xl',
        text: 'This is 最大',
        size: '112',
        className: 'vc@text--xl',
        weight: 'regular',
      },
      {
        label: 'lg',
        text: 'This is 大きい',
        size: '112',
        className: 'vc@text--lg',
        weight: 'regular',
      },
      {
        label: 'sm, small',
        text: 'This is Small. スモールです',
        size: '112',
        className: 'vc@text--sm',
        weight: 'regular',
      },
    ],
  },
];

//   // {
//   //   label: 's',
//   //   text: 'This is Sub Heading. 小見出し',
//   //   size: '112',
//   //   className: 'vc@subheading',
//   //   weight: 'regular',
//   // },
//   // {
//   //   label: 'c',
//   //   text: 'This is Caption. キャプションです',
//   //   size: '112',
//   //   className: 'vc@caption',
//   //   weight: 'regular',
//   // },
// ];



export default {
  head() {
    return {
      title: 'Typography',
    }
  },

  data() {
    return {
      EXAMPLES,
    }
  },
}
</script>
