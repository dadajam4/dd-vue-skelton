<style lang="scss" scoped>
@import "../../plugins/ui/sass/core/index";
.my-logo {
  border-bottom: solid 1px;
  @include theme-color(form-divider);

  & > a {
    color: inherit;
    font-weight: bold;
    display: flex;
    padding-left: 20px;
    height: $toolbar-row-height;
    align-items: center;
    transition: get-transition(primary);

    &:hover,
    &:focus {
      background: rgba(0, 0, 0, .1);
    }
  }
}

.my-parent-name,
.my-child-name {
  &:first-letter {
    text-transform: uppercase;
  }
}
</style>

<template>
  <vt@app-drawer right static="desktop" v-model="isActive" ref="drawer">
    <div class="my-logo">
      <router-link :to="{name: 'index'}">
        <img class="vc@m-r--xs" src="img/logo/dd.svg" alt="" width="24">
        DD Vue Skelton
      </router-link>
    </div>
    <vt@list>
      <template v-for="parent, parentIndex in links">
        <vt@list-tile
          v-if="!parent.children"
          :key="parentIndex"
          :to="{name: parent.name}"
        >
          <vt@list-tile-action>
            <vt@icon>{{iconMap[parent.name]}}</vt@icon>
          </vt@list-tile-action>
          <vt@list-tile-content>
            <vt@list-tile-title class="my-parent-name">{{parent.name}}</vt@list-tile-title>
          </vt@list-tile-content>
        </vt@list-tile>

        <vt@list-group
          v-if="parent.children"
          :key="parentIndex"
          :group="parent.path"
        >
          <vt@list-tile slot="item">
            <vt@list-tile-action>
              <vt@icon>{{iconMap[parent.name]}}</vt@icon>
            </vt@list-tile-action>
            <vt@list-tile-content>
              <vt@list-tile-title class="my-parent-name">{{parent.name}}</vt@list-tile-title>
            </vt@list-tile-content>
            <vt@list-tile-action>
              <vt@icon>angle-down</vt@icon>
            </vt@list-tile-action>
          </vt@list-tile>

          <vt@list-tile
            v-for="child, childIndex in parent.children"
            :key="childIndex"
            :to="{name: child.name}"
          >
            <vt@list-tile-action>&nbsp;</vt@list-tile-action>
            <vt@list-tile-content>
              <vt@list-tile-title class="my-child-name">{{child._filename}}</vt@list-tile-title>
            </vt@list-tile-content>
            <vt@list-tile-action>
  <!--
              <v-icon>{{ subItem.action }}</v-icon>
  -->
            </vt@list-tile-action>
          </vt@list-tile>
  <!--
            <ul v-if="$route.name === child.name && child._anchors" style="padding-left:10px;">
              <li v-for="anchor in child._anchors" :key="anchor.id">
                <a
                  :href="`${child.path}/#${anchor.id}`"
                  v-scroll-to="{
                    element: `#${anchor.id}`,
                    offset: -30,
                    onDone: () => { onDoneScroll(`${child.path}/#${anchor.id}`) },
                  }"
                >{{anchor.label}}</a>
              </li>
            </ul>
  -->
        </vt@list-group>
      </template>
    </vt@list>
  </vt@app-drawer>

</template>

<script>
// import routings from '.tmp/public-routings';

const links = [
  {
    name: 'getting-started',
    path: '/getting-started',
  },

  {
    name: 'style',
    path: '/style',
    children: [
      {
        name: 'style-colors',
        path: '/style/colors',
        _filename: 'colors',
      },
      {
        name: 'style-content',
        path: '/style/content',
        _filename: 'content',
      },
      {
        name: 'style-typography',
        path: '/style/typography',
        _filename: 'typography',
      },
    ],
  },

  {
    name: 'components',
    path: '/components',
    children: [
      {
        name: 'components-forms',
        path: '/components/forms',
        _filename: 'forms',
      },
      {
        name: 'components-buttons',
        path: '/components/buttons',
        _filename: 'buttons',
      },
      {
        name: 'components-lists',
        path: '/components/lists',
        _filename: 'lists',
      },
      {
        name: 'components-menus',
        path: '/components/menus',
        _filename: 'menus',
      },
    ],
  },

  {
    name: 'layout',
    path: '/layout',
    children: [
      {
        name: 'layout-grid',
        path: '/layout/grid',
        _filename: 'grid',
      },
      {
        name: 'layout-spacing',
        path: '/layout/spacing',
        _filename: 'spacing',
      },
    ],
  },
];



export default {
  props: {
    value: {
      required: false,
    },
  },

  data() {
    return {
      isActive: this.value,
      links: links,
      iconMap: {
        'getting-started': 'cube',
        components: 'th-large',
        layout    : 'th-list',
        style     : 'columns',
      },
    }
  },

  computed: {
    lastRequested: {
      get() { return this.$refs.drawer.lastRequested },
      set(lastRequested) { this.$refs.drawer.lastRequested = lastRequested },
    },
  },

  watch: {
    value() {
      this.isActive = this.value;
    },

    isActive() {
      this.$emit('input', this.isActive);
    },
  },

  methods: {
    onDoneScroll(path) {
      window.history.pushState(null, null, path);
    },
  },

  // created() {
  //   setTimeout(() => {
  //   console.warn(this.$router.currentRoute);
  //   }, 1000);
  // },
}
</script>
