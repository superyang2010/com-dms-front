export default [
  // user
  {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: [
      { path: '/user', redirect: '/user/login' },
      { path: '/user/login', component: './User/Login' },
    ],
  },
  // app
  {
    path: '/',
    component: '../layouts/BasicLayout',
    routes: [
      {
        path: '/',
        redirect: '/demo/demo1',
      },
      {
        path: '/demo',
        name: 'demo',
        routes: [
          {
            path: '/demo/demo1',
            name: 'demo1',
            component: 'Exception/403',
          }
        ]
      },
    ],
  },
];
