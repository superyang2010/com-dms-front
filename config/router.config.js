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
        redirect: '/sys/user',
      },
      {
        path: '/exception',
        routes: [
          {
            path: '/exception/403',
            component: 'Exception/403',
          },
          {
            path: '/exception/404',
            component: 'Exception/404',
          },
          {
            path: '/exception/500',
            component: 'Exception/500',
          },
        ]
      },
      {
        path: '/sys',
        routes: [
          {
            path: '/sys/user',
            component: 'SystemMgt/UserMgt/Index',
          },
          {
            path: '/sys/role',
            component: 'SystemMgt/RoleMgt/Index',
          },
          {
            path: '/sys/menu',
            component: 'SystemMgt/MenuMgt/Index',
          },
          {
            path: '/sys/org',
            component: 'SystemMgt/OrgMgt/Index',
          }
        ]
      },
      {
        path: '/demo',
        routes: [
          {
            path: '/demo/antd',
            name: 'Antd',
            routes: [
              {
                path: '/demo/antd/ui',
                name: 'UI',
                icon: 'appstore',
                routes: [
                  {
                    path: '/demo/antd/ui/avatar',
                    name: 'avatar',
                    component: 'Antd/UI/Avatar'
                  },
                  {
                    path: '/demo/antd/ui/button',
                    name: 'button',
                    component: 'Antd/UI/Button'
                  },
                  {
                    path: '/demo/antd/ui/icon',
                    name: 'icon',
                    component: 'Antd/UI/Icon'
                  },
                  {
                    path: '/demo/antd/ui/tag',
                    name: 'tag',
                    component: 'Antd/UI/Tag'
                  },
                  {
                    path: '/demo/antd/ui/switch',
                    name: 'switch',
                    component: 'Antd/UI/Switch'
                  },
                  {
                    path: '/demo/antd/ui/calendar',
                    name: 'calendar',
                    component: 'Antd/UI/Calendar'
                  },
                  {
                    path: '/demo/antd/ui/checkbox',
                    name: 'checkbox',
                    component: 'Antd/UI/Checkbox'
                  },
                  {
                    path: '/demo/antd/ui/radio',
                    name: 'radio',
                    component: 'Antd/UI/Radio'
                  },
                  {
                    path: '/demo/antd/ui/input',
                    name: 'input',
                    component: 'Antd/UI/Input'
                  },
                  {
                    path: '/demo/antd/ui/timeline',
                    name: 'timeline',
                    component: 'Antd/UI/Timeline'
                  },
                  {
                    path: '/demo/antd/ui/badge',
                    name: 'badge',
                    component: 'Antd/UI/Badge'
                  },
                  {
                    path: '/demo/antd/ui/slider',
                    name: 'slider',
                    component: 'Antd/UI/Slider'
                  },
                ]
              },
              {
                path: '/demo/antd/table',
                name: 'Table',
                routes: [
                  {
                    path: '/demo/antd/table/basic',
                    name: 'Basic',
                    component: 'Antd/Table/BaseTable'
                  },
                  {
                    path: '/demo/antd/table/advance',
                    name: 'Advance',
                    component: 'Antd/Table/Advanced'
                  },
                  {
                    path: '/demo/antd/table/playground',
                    name: 'Playground',
                    component: 'Antd/Table/Playground'
                  },{
                    path: '/demo/antd/table/cust', 
                    name: 'CusTable',
                    component: 'Antd/Table/CusTable'
                  }
                ]
              },
              {
                path: '/demo/antd/about',
                name: 'About',
                component: 'Antd/About/About'
              }
            ]
          },
          {
            path: '/demo/antdpro',
            name: 'AntdPro',
            routes: [
              {
                path: '/demo/antdpro/dashboard',
                name: 'dashboard',
                icon: 'dashboard',
                routes: [
                  {
                    path: '/demo/antdpro/dashboard/analysis',
                    name: 'analysis',
                    component: './antdpro/Dashboard/Analysis',
                  },
                  {
                    path: '/demo/antdpro/dashboard/monitor',
                    name: 'monitor',
                    component: './antdpro/Dashboard/Monitor',
                  },
                  {
                    path: '/demo/antdpro/dashboard/workplace',
                    name: 'workplace',
                    component: './antdpro/Dashboard/Workplace',
                  },
                ],
              },
              // forms
              {
                path: '/demo/antdpro/form',
                icon: 'form',
                name: 'form',
                routes: [
                  {
                    path: '/demo/antdpro/form/basic-form',
                    name: 'basicform',
                    component: './antdpro/Forms/BasicForm',
                  },
                  {
                    path: '/demo/antdpro/form/step-form',
                    name: 'stepform',
                    component: './antdpro/Forms/StepForm',
                    hideChildrenInMenu: true,
                    routes: [
                      {
                        path: '/demo/antdpro/form/step-form',
                        redirect: '/demo/antdpro/form/step-form/info',
                      },
                      {
                        path: '/demo/antdpro/form/step-form/info',
                        name: 'info',
                        component: './antdpro/Forms/StepForm/Step1',
                      },
                      {
                        path: '/demo/antdpro/form/step-form/confirm',
                        name: 'confirm',
                        component: './antdpro/Forms/StepForm/Step2',
                      },
                      {
                        path: '/demo/antdpro/form/step-form/result',
                        name: 'result',
                        component: './antdpro/Forms/StepForm/Step3',
                      },
                    ],
                  },
                  {
                    path: '/demo/antdpro/form/advanced-form',
                    name: 'advancedform',
                    authority: ['admin'],
                    component: './antdpro/Forms/AdvancedForm',
                  },
                ],
              },
              // list
              {
                path: '/demo/antdpro/list',
                icon: 'table',
                name: 'list',
                routes: [
                  {
                    path: '/demo/antdpro/list/table-list',
                    name: 'searchtable',
                    component: './antdpro/List/TableList',
                  },
                  {
                    path: '/demo/antdpro/list/basic-list',
                    name: 'basiclist',
                    component: './antdpro/List/BasicList',
                  },
                  {
                    path: '/demo/antdpro/list/card-list',
                    name: 'cardlist',
                    component: './antdpro/List/CardList',
                  },
                  {
                    path: '/demo/antdpro/list/search',
                    name: 'searchlist',
                    component: './antdpro/List/List',
                    routes: [
                      {
                        path: '/demo/antdpro/list/search',
                        redirect: '/demo/antdpro/list/search/articles',
                      },
                      {
                        path: '/demo/antdpro/list/search/articles',
                        name: 'articles',
                        component: './antdpro/List/Articles',
                      },
                      {
                        path: '/demo/antdpro/list/search/projects',
                        name: 'projects',
                        component: './antdpro/List/Projects',
                      },
                      {
                        path: '/demo/antdpro/list/search/applications',
                        name: 'applications',
                        component: './antdpro/List/Applications',
                      },
                    ],
                  },
                ],
              },
              {
                path: '/demo/antdpro/profile',
                name: 'profile',
                icon: 'profile',
                routes: [
                  // profile
                  {
                    path: '/demo/antdpro/profile/basic',
                    name: 'basic',
                    component: './antdpro/Profile/BasicProfile',
                  },
                  {
                    path: '/demo/antdpro/profile/basic/:id',
                    name: 'basic',
                    hideInMenu: true,
                    component: './antdpro/Profile/BasicProfile',
                  },
                  {
                    path: '/demo/antdpro/profile/advanced',
                    name: 'advanced',
                    component: './antdpro/Profile/AdvancedProfile',
                  },
                ],
              },
              {
                name: 'result',
                icon: 'check-circle-o',
                path: '/demo/antdpro/result',
                routes: [
                  // result
                  {
                    path: '/demo/antdpro/result/success',
                    name: 'success',
                    component: './antdpro/Result/Success',
                  },
                  { path: '/demo/antdpro/result/fail', name: 'fail', component: './antdpro/Result/Error' },
                ],
              },
              {
                name: 'exception',
                icon: 'warning',
                path: '/demo/antdpro/exception',
                routes: [
                  // exception
                  {
                    path: '/demo/antdpro/exception/403',
                    name: 'not-permission',
                    component: './antdpro/Exception/403',
                  },
                  {
                    path: '/demo/antdpro/exception/404',
                    name: 'not-find',
                    component: './antdpro/Exception/404',
                  },
                  {
                    path: '/demo/antdpro/exception/500',
                    name: 'server-error',
                    component: './antdpro/Exception/500',
                  },
                  {
                    path: '/demo/antdpro/exception/trigger',
                    name: 'trigger',
                    hideInMenu: true,
                    component: './antdpro/Exception/TriggerException',
                  },
                ],
              },
              {
                name: 'account',
                icon: 'user',
                path: '/demo/antdpro/account',
                routes: [
                  {
                    path: '/demo/antdpro/account/center',
                    name: 'center',
                    component: './antdpro/Account/Center/Center',
                    routes: [
                      {
                        path: '/demo/antdpro/account/center',
                        redirect: '/demo/antdpro/account/center/articles',
                      },
                      {
                        path: '/demo/antdpro/account/center/articles',
                        component: './antdpro/Account/Center/Articles',
                      },
                      {
                        path: '/demo/antdpro/account/center/applications',
                        component: './antdpro/Account/Center/Applications',
                      },
                      {
                        path: '/demo/antdpro/account/center/projects',
                        component: './antdpro/Account/Center/Projects',
                      },
                    ],
                  },
                  {
                    path: '/demo/antdpro/account/settings',
                    name: 'settings',
                    component: './antdpro/Account/Settings/Info',
                    routes: [
                      {
                        path: '/demo/antdpro/account/settings',
                        redirect: '/demo/antdpro/account/settings/base',
                      },
                      {
                        path: '/demo/antdpro/account/settings/base',
                        component: './antdpro/Account/Settings/BaseView',
                      },
                      {
                        path: '/demo/antdpro/account/settings/security',
                        component: './antdpro/Account/Settings/SecurityView',
                      },
                      {
                        path: '/demo/antdpro/account/settings/binding',
                        component: './antdpro/Account/Settings/BindingView',
                      },
                      {
                        path: '/demo/antdpro/account/settings/notification',
                        component: './antdpro/Account/Settings/NotificationView',
                      },
                    ],
                  },
                ],
              },
              {
                component: '404',
              },
            ]
          }
        ]
      }
    ]
  },
];
