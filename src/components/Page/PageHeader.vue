<script>
import Colorable from '~/mixins/colorable';



export default {
  name: 'vt@page-header',

  mixins: [Colorable],

  props: {
    tag: {
      type: String,
      default: 'header',
    },
    titleTag: {
      type: String,
      default: 'h1',
    },
    backgroundColor: {
      type: String,
      default: 'light-grey',
    },
    textColor: {
      type: String,
      default: 'socondary',
    },
  },

  computed: {
    classes() {
      return this.addColorClasses({
        'vc@page__header': true,
      });
    },
  },

  render(h) {
    const TagName  = this.tag;
    const TitleTag = this.titleTag;

    return (
      <TagName class={this.classes}>
        <TitleTag class="vc@page__header__inner vc@page__container">
          {this.$slots.default}
        </TitleTag>
      </TagName>
    );
  }
}
</script>
