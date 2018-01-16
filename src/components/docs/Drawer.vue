<style lang="scss" scoped>
@import "core/index";

.my-logo {
  border-bottom: solid 1px;
  @include theme-color(border-color, form-divider);

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

.my-anchor-navi {
  border-right: solid 4px;
  @include theme-border-color(context-primary);
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
          <vt@list-tile-action>
          </vt@list-tile-action>
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

          <template v-for="child, childIndex in parent.children">
            <vt@list-tile
              :key="childIndex"
              :to="{name: child.name}"
            >
              <vt@list-tile-action>&nbsp;</vt@list-tile-action>
              <vt@list-tile-content>
                <vt@list-tile-title class="my-child-name">{{child.label}}</vt@list-tile-title>
              </vt@list-tile-content>
              <vt@list-tile-action>
                <!--
                <v-icon>{{ subItem.action }}</v-icon>
                -->
              </vt@list-tile-action>
            </vt@list-tile>
            <li v-if="$route.name === child.name" :key="childIndex + '-anchors'" class="my-anchor-navi">
              <vt@anchor-navi></vt@anchor-navi>
            </li>
          </template>
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
export default {
  props: {
    value: {
      required: false,
    },
  },

  data() {
    return {
      isActive: this.value,
      iconMap: {
        'getting-started': 'cube',
        elements  : 'truck',
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
    links() {
      const links = [];
      const routes = this.$router.options.routes;
      const levels = [];

      routes.forEach(route => {
        const tmp = route.path.replace(/^\//, '').split('/');
        const level = tmp.length - 1;

        if (!levels[level]) levels[level] = [];
        levels[level].push(route);
      });

      levels.forEach((level, index) => {
        if (index === 0) {
          level.forEach(route => {
            if (!route.name !== 'index') {
              links.push({
                path: route.path,
                name: route.name,
              });
            }
          });
        } else {
          level.forEach(route => {
            const tmp = route.path.replace(/^\//, '').split('/');
            const myParentName = tmp[0];
            let parent = links.find(parent => parent.name === myParentName);
            if (!parent) {
              parent = {
                name: myParentName,
                path: '/' + myParentName,
                children: [],
              };
              links.push(parent);
            }
            parent.children.push({
              name: route.name,
              path: route.path,
              label: tmp[1],
            });
          });
        }
      });
      return links;
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
}
</script>
