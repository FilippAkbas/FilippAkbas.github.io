const routes = [
  {
    path: 'login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '@/view/authentication/FbSignIn.vue'),
  },
  {
    path: 'register',
    name: 'register',
    component: () => import(/* webpackChunkName: "register" */ '@/view/authentication/FbSignup.vue'),
  },
  {
    path: 'forgotPassword',
    name: 'forgotPassword',
    component: () => import(/* webpackChunkName: "forgotPassword" */ '@/view/authentication/ForgotPassword.vue'),
  },
];

export default routes;
