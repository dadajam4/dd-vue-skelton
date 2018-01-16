<script>
import Colorable from '~/mixins/color';



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
  },

  data() {
    return {
      defaultBackgroundColor: 'light',
      defaultTextColor: 'socondary',
    }
  },

  computed: {
    classes() {
      return this.addColorClasses({
        'vc@page__header': true,
        'vc@page__pull': true,
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
