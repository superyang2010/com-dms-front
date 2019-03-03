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
        path: '/sys',
        name: 'SystemMgt',
        icon: 'appstore',
        routes: [
          {
            path: '/sys/user',
            name: 'UserMgt',
            icon: 'user',
            component: 'Exception/403',
          },
          {
            path: '/sys/role',
            name: 'RoleMgt',
            icon: 'team',
            component: 'Exception/404',
          },
          {
            path: '/sys/menu',
            name: 'MenuMgt',
            icon: 'bars',
            component: 'Exception/500',
          }
        ]
      },
      {
        path: '/antd',
        name: 'Antd',
        routes: [
          {
            path: '/antd/ui',
            name: 'UI',
            icon: 'appstore',
            routes: [
              {
                path: '/antd/ui/avatar',
                name: 'avatar',
                component: 'Antd/UI/Avatar'
              },
              {
                path: '/antd/ui/button',
                name: 'button',
                component: 'Antd/UI/Button'
              },
              {
                path: '/antd/ui/icon',
                name: 'icon',
                component: 'Antd/UI/Icon'
              },
              {
                path: '/antd/ui/tag',
                name: 'tag',
                component: 'Antd/UI/Tag'
              },
              {
                path: '/antd/ui/switch',
                name: 'switch',
                component: 'Antd/UI/Switch'
              },
              {
                path: '/antd/ui/calendar',
                name: 'calendar',
                component: 'Antd/UI/Calendar'
              },
              {
                path: '/antd/ui/checkbox',
                name: 'checkbox',
                component: 'Antd/UI/Checkbox'
              },
              {
                path: '/antd/ui/radio',
                name: 'radio',
                component: 'Antd/UI/Radio'
              },
              {
                path: '/antd/ui/input',
                name: 'input',
                component: 'Antd/UI/Input'
              },
              {
                path: '/antd/ui/timeline',
                name: 'timeline',
                component: 'Antd/UI/Timeline'
              },
              {
                path: '/antd/ui/badge',
                name: 'badge',
                component: 'Antd/UI/Badge'
              },
              {
                path: '/antd/ui/slider',
                name: 'slider',
                component: 'Antd/UI/Slider'
              },
            ]
          },
          {
            path: '/antd/table',
            name: 'Table',
            routes: [
              {
                path: '/antd/table/basic',
                name: 'Basic',
                component: 'Antd/Table/BaseTable'
              },
              {
                path: '/antd/table/advance',
                name: 'Advance',
                component: 'Antd/Table/Advanced'
              },
              {
                path: '/antd/table/playground',
                name: 'Playground',
                component: 'Antd/Table/Playground'
              },{
                path: '/antd/table/cust', 
                name: 'CusTable',
                component: 'Antd/Table/CusTable'
              }
            ]
          },
          {
            path: '/antd/about',
            name: 'About',
            component: 'Antd/About/About'
          }
        ]
      },
      {
        path: '/antdpro',
        name: 'Antd PRO',
        routes: [
          {
            path: '/antdpro/dashboard',
            name: 'dashboard',
            icon: 'dashboard',
            routes: [
              {
                path: '/antdpro/dashboard/analysis',
                name: 'analysis',
                component: './AntdPro/Dashboard/Analysis',
              },
              {
                path: '/antdpro/dashboard/monitor',
                name: 'monitor',
                component: './AntdPro/Dashboard/Monitor',
              },
              {
                path: '/antdpro/dashboard/workplace',
                name: 'workplace',
                component: './AntdPro/Dashboard/Workplace',
              },
            ],
          },
          // forms
          {
            path: '/antdpro/form',
            icon: 'form',
            name: 'form',
            routes: [
              {
                path: '/antdpro/form/basic-form',
                name: 'basicform',
                component: './AntdPro/Forms/BasicForm',
              },
              {
                path: '/antdpro/form/step-form',
                name: 'stepform',
                component: './AntdPro/Forms/StepForm',
                hideChildrenInMenu: true,
                routes: [
                  {
                    path: '/antdpro/form/step-form',
                    redirect: '/antdpro/form/step-form/info',
                  },
                  {
                    path: '/antdpro/form/step-form/info',
                    name: 'info',
                    component: './AntdPro/Forms/StepForm/Step1',
                  },
                  {
                    path: '/antdpro/form/step-form/confirm',
                    name: 'confirm',
                    component: './AntdPro/Forms/StepForm/Step2',
                  },
                  {
                    path: '/antdpro/form/step-form/result',
                    name: 'result',
                    component: './AntdPro/Forms/StepForm/Step3',
                  },
                ],
              },
              {
                path: '/antdpro/form/advanced-form',
                name: 'advancedform',
                authority: ['admin'],
                component: './AntdPro/Forms/AdvancedForm',
              },
            ],
          },
          // list
          {
            path: '/antdpro/list',
            icon: 'table',
            name: 'list',
            routes: [
              {
                path: '/antdpro/list/table-list',
                name: 'searchtable',
                component: './AntdPro/List/TableList',
              },
              {
                path: '/antdpro/list/basic-list',
                name: 'basiclist',
                component: './AntdPro/List/BasicList',
              },
              {
                path: '/antdpro/list/card-list',
                name: 'cardlist',
                component: './AntdPro/List/CardList',
              },
              {
                path: '/antdpro/list/search',
                name: 'searchlist',
                component: './AntdPro/List/List',
                routes: [
                  {
                    path: '/antdpro/list/search',
                    redirect: '/antdpro/list/search/articles',
                  },
                  {
                    path: '/antdpro/list/search/articles',
                    name: 'articles',
                    component: './AntdPro/List/Articles',
                  },
                  {
                    path: '/antdpro/list/search/projects',
                    name: 'projects',
                    component: './AntdPro/List/Projects',
                  },
                  {
                    path: '/antdpro/list/search/applications',
                    name: 'applications',
                    component: './AntdPro/List/Applications',
                  },
                ],
              },
            ],
          },
          {
            path: '/antdpro/profile',
            name: 'profile',
            icon: 'profile',
            routes: [
              // profile
              {
                path: '/antdpro/profile/basic',
                name: 'basic',
                component: './AntdPro/Profile/BasicProfile',
              },
              {
                path: '/antdpro/profile/basic/:id',
                name: 'basic',
                hideInMenu: true,
                component: './AntdPro/Profile/BasicProfile',
              },
              {
                path: '/antdpro/profile/advanced',
                name: 'advanced',
                authority: ['admin'],
                component: './AntdPro/Profile/AdvancedProfile',
              },
            ],
          },
          {
            name: 'result',
            icon: 'check-circle-o',
            path: '/antdpro/result',
            routes: [
              // result
              {
                path: '/antdpro/result/success',
                name: 'success',
                component: './AntdPro/Result/Success',
              },
              { path: '/antdpro/result/fail', name: 'fail', component: './AntdPro/Result/Error' },
            ],
          },
          {
            name: 'exception',
            icon: 'warning',
            path: '/antdpro/exception',
            routes: [
              // exception
              {
                path: '/antdpro/exception/403',
                name: 'not-permission',
                component: './AntdPro/Exception/403',
              },
              {
                path: '/antdpro/exception/404',
                name: 'not-find',
                component: './AntdPro/Exception/404',
              },
              {
                path: '/antdpro/exception/500',
                name: 'server-error',
                component: './AntdPro/Exception/500',
              },
              {
                path: '/antdpro/exception/trigger',
                name: 'trigger',
                hideInMenu: true,
                component: './AntdPro/Exception/TriggerException',
              },
            ],
          },
          {
            name: 'account',
            icon: 'user',
            path: '/antdpro/account',
            routes: [
              {
                path: '/antdpro/account/center',
                name: 'center',
                component: './AntdPro/Account/Center/Center',
                routes: [
                  {
                    path: '/antdpro/account/center',
                    redirect: '/antdpro/account/center/articles',
                  },
                  {
                    path: '/antdpro/account/center/articles',
                    component: './AntdPro/Account/Center/Articles',
                  },
                  {
                    path: '/antdpro/account/center/applications',
                    component: './AntdPro/Account/Center/Applications',
                  },
                  {
                    path: '/antdpro/account/center/projects',
                    component: './AntdPro/Account/Center/Projects',
                  },
                ],
              },
              {
                path: '/antdpro/account/settings',
                name: 'settings',
                component: './AntdPro/Account/Settings/Info',
                routes: [
                  {
                    path: '/antdpro/account/settings',
                    redirect: '/antdpro/account/settings/base',
                  },
                  {
                    path: '/antdpro/account/settings/base',
                    component: './AntdPro/Account/Settings/BaseView',
                  },
                  {
                    path: '/antdpro/account/settings/security',
                    component: './AntdPro/Account/Settings/SecurityView',
                  },
                  {
                    path: '/antdpro/account/settings/binding',
                    component: './AntdPro/Account/Settings/BindingView',
                  },
                  {
                    path: '/antdpro/account/settings/notification',
                    component: './AntdPro/Account/Settings/NotificationView',
                  },
                ],
              },
            ],
          },
          {
            component: '404',
          },
        ],
      },
    ]
  },
];
