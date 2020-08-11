import { dynamicWrapper, createRoute } from '@/utils/core';

const routesConfig = app => ({
  path: '/mytest',
  title: '我的测试',
  component: dynamicWrapper(app, [], () => import('./components'))
});

export default app => createRoute(app, routesConfig);
