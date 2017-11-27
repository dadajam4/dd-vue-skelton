import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _70970305 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)
const _344f786b = () => import('../pages/getting-started.vue' /* webpackChunkName: "pages/getting-started" */).then(m => m.default || m)
const _92bc97da = () => import('../pages/components/forms.vue' /* webpackChunkName: "pages/components/forms" */).then(m => m.default || m)
const _ee67362c = () => import('../pages/style/typography.vue' /* webpackChunkName: "pages/style/typography" */).then(m => m.default || m)
const _bcab23aa = () => import('../pages/style/colors.vue' /* webpackChunkName: "pages/style/colors" */).then(m => m.default || m)
const _3a18407e = () => import('../pages/layout/grid.vue' /* webpackChunkName: "pages/layout/grid" */).then(m => m.default || m)
const _01cd6879 = () => import('../pages/components/lists.vue' /* webpackChunkName: "pages/components/lists" */).then(m => m.default || m)
const _d7a22936 = () => import('../pages/components/buttons.vue' /* webpackChunkName: "pages/components/buttons" */).then(m => m.default || m)
const _0f1290ce = () => import('../pages/style/content.vue' /* webpackChunkName: "pages/style/content" */).then(m => m.default || m)
const _207a5750 = () => import('../pages/components/menus.vue' /* webpackChunkName: "pages/components/menus" */).then(m => m.default || m)
const _9233788a = () => import('../pages/layout/spacing.vue' /* webpackChunkName: "pages/layout/spacing" */).then(m => m.default || m)



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
    base: '/$$base$$',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/",
			component: _70970305,
			name: "index"
		},
		{
			path: "/getting-started",
			component: _344f786b,
			name: "getting-started"
		},
		{
			path: "/components/forms",
			component: _92bc97da,
			name: "components-forms"
		},
		{
			path: "/style/typography",
			component: _ee67362c,
			name: "style-typography"
		},
		{
			path: "/style/colors",
			component: _bcab23aa,
			name: "style-colors"
		},
		{
			path: "/layout/grid",
			component: _3a18407e,
			name: "layout-grid"
		},
		{
			path: "/components/lists",
			component: _01cd6879,
			name: "components-lists"
		},
		{
			path: "/components/buttons",
			component: _d7a22936,
			name: "components-buttons"
		},
		{
			path: "/style/content",
			component: _0f1290ce,
			name: "style-content"
		},
		{
			path: "/components/menus",
			component: _207a5750,
			name: "components-menus"
		},
		{
			path: "/layout/spacing",
			component: _9233788a,
			name: "layout-spacing"
		}
    ],
    fallback: false
  })
}
