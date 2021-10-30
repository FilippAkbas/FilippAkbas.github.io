export default [
  {
    path: '/',
    name: 'starter',
    component: () => import(/* webpackChunkName: "Blank" */ '@/view/pages/BlankPage.vue'),
  },
];
