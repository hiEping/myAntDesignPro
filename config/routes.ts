export default [
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  // 数据看板
  {
    path: '/dashBoard',
    name: 'dashboard',
    icon: 'icon-dashboard',
    routes: [
      {
        path: 'analysis',
        name: 'analysis',
        component: './dashBoard/analysis',
      },
      {
        path: 'monitor',
        name: 'monitor',
        component: './dashBoard/monitor',
      },
      {
        path: 'workplace',
        name: 'workplace',
        component: './dashBoard/workplace',
      },
    ],
  },
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './user/Login',
          },
        ],
      },
    ],
  },
  // 信息查询
  {
    path: '/list',
    name: 'list',
    icon: 'table',
    routes: [
      {
        path: 'gys',
        name: 'gys',
        component: './list/gys',
      },
      {
        path: 'project',
        name: 'project',
        component: './list/project',
      },
      {
        path: 'law',
        name: 'law',
        component: './list/law',
      },
    ],
  },
  // 数据填报
  {
    path: '/data-recording',
    name: 'data-recording',
    icon: 'icon-bi',
    routes: [
      {
        path: 'part',
        name: 'part',
        component: './data-recording/part',
      },
      {
        path: 'project-plan',
        name: 'project-plan',
        component: './data-recording/project-plan',
      },
      {
        path:'in-safe',
        name:'in-safe',
        component:'./data-recording/insafe',
      },
      {
        path:'qc',
        name:'qc',
        component:'./data-recording/qc',
      },
      {
        path:'COVID-19',
        name:'COVID-19',
        component:'./data-recording/COVID-19',
      },
    ],
  },
  // 管理页
  {
    path: '/admin',
    name: 'admin',
    icon: 'crown',
    access: 'canAdmin',
    //component: './Admin',
    routes: [
      {
        path: 'orgnization',
        name: 'orgnization',
        component: './Welcome',
      },
      {
        path: 'staff',
        name: 'staff',
        component: './Welcome',
      },
      {
        path: 'act',
        name: 'act',
        component: './Welcome',
      },
      {
        path: 'flow',
        name: 'flow',
        component: './Welcome',
      },
    ],
  },
  {
    name: 'flow',
    icon: 'smile',
    path: '/flow',
    component: './flow',
  },
  {
    component: './404',
  },
];
