export default [
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  }, // 数据看板
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
  }, // 管理页
  {
    path: '/admin',
    name: 'admin',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      {
        path: '/admin/orgnization',
        name: 'orgnization',
        component: './Welcome',
      },
      {
        path: '/admin/staff',
        name: 'staff',
        component: './Welcome',
      },
      {
        path: '/admin/act',
        name: 'act',
        component: './Welcome',
      },
      {
        path: '/admin/flow',
        name: 'flow',
        component: './Welcome',
      },
    ],
  }, // 数据查询
  {
    path: '/list',
    name: 'list',
    icon: 'table',
    routes: [
      {
        path: 'table-list',
        name: 'table-list',
        component: './TableList/index',
      },
    ],
  }, // 数据填报
  {
    path: '/data-recording',
    name: 'data-recording',
    icon: 'icon-bi',
    routes: [
      {
        path: 'proform',
        name: 'proform',
        component: './data-recording/proform',
      },
      {
        path: 'schema-form',
        name: 'schema-form',
        component: './data-recording/schema-form',
      },
    ],
  }, // 资料库
  {
    path: '/doc-lib',
    name: 'doc-lib',
    icon: 'icon-dangan',
    routes: [
      {
        path: 'project',
        name: 'project',
        component: './doc-lib/project',
      },
      {
        path: 'project-design',
        name: 'project-design',
        component: './doc-lib/project-design',
      },
      {
        path: 'project-plan',
        name: 'project-plan',
        component: './doc-lib/project-plan',
      },
      {
        path: 'project-hetong',
        name: 'project-hetong',
        component: './doc-lib/project-hetong',
      },
      {
        path: 'law',
        name: 'law',
        component: './doc-lib/law',
      },
      {
        path: 'project-meeting',
        name: 'project-meeting',
        component: './doc-lib/project-meeting',
      },
    ],
  },
  {
    path: '/',
    redirect: '/welcome',
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
