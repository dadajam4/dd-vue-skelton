import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _26434856 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)
const _49cbe58a = () => import('../pages/getting-started.vue' /* webpackChunkName: "pages/getting-started" */).then(m => m.default || m)
const _2dac8d7a = () => import('../pages/components/forms.vue' /* webpackChunkName: "pages/components/forms" */).then(m => m.default || m)
const _89572bcc = () => import('../pages/style/typography.vue' /* webpackChunkName: "pages/style/typography" */).then(m => m.default || m)
const _3436e94a = () => import('../pages/style/colors.vue' /* webpackChunkName: "pages/style/colors" */).then(m => m.default || m)
const _448dbd4e = () => import('../pages/layout/grid.vue' /* webpackChunkName: "pages/layout/grid" */).then(m => m.default || m)
const _34556da9 = () => import('../pages/components/lists.vue' /* webpackChunkName: "pages/components/lists" */).then(m => m.default || m)
const _44ca6495 = () => import('../pages/components/buttons.vue' /* webpackChunkName: "pages/components/buttons" */).then(m => m.default || m)
const _521c199e = () => import('../pages/style/content.vue' /* webpackChunkName: "pages/style/content" */).then(m => m.default || m)
const _224ad988 = () => import('../pages/components/menus.vue' /* webpackChunkName: "pages/components/menus" */).then(m => m.default || m)
const _55e4562a = () => import('../pages/layout/spacing.vue' /* webpackChunkName: "pages/layout/spacing" */).then(m => m.default || m)



const scrollBehavior = (to, from, savedPosition) => {
  // SavedPosition is only available for popstate navigations.
  if (savedPosition) {
    return savedPosition
  } else {
    let position = {}
    // If no children detected
    if (to.matched.length < 2) {
      // Scroll to the top of the page
      position = { x: 0, y: 0 }
    }
    else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
      // If one of the children has scrollToTop option set to true
      position = { x: 0, y: 0 }
    }
    // If link has anchor, scroll to anchor by returning the selector
    if (to.hash) {
      position = { selector: to.hash }
    }
    return position
  }
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/",
			component: _26434856,
			name: "index"
		},
		{
			path: "/getting-started",
			component: _49cbe58a,
			name: "getting-started"
		},
		{
			path: "/components/forms",
			component: _2dac8d7a,
			name: "components-forms"
		},
		{
			path: "/style/typography",
			component: _89572bcc,
			name: "style-typography"
		},
		{
			path: "/style/colors",
			component: _3436e94a,
			name: "style-colors"
		},
		{
			path: "/layout/grid",
			component: _448dbd4e,
			name: "layout-grid"
		},
		{
			path: "/components/lists",
			component: _34556da9,
			name: "components-lists"
		},
		{
			path: "/components/buttons",
			component: _44ca6495,
			name: "components-buttons"
		},
		{
			path: "/style/content",
			component: _521c199e,
			name: "style-content"
		},
		{
			path: "/components/menus",
			component: _224ad988,
			name: "components-menus"
		},
		{
			path: "/layout/spacing",
			component: _55e4562a,
			name: "layout-spacing"
		}
    ],
    fallback: false
  })
}
