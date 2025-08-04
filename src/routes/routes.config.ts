export const routes = [
  {
    path: '/',
    component: () => import('../components/yaffry/yaffry.component'),
    basePath: 'components/yaffry'
  },
  {
    path: '/democomp1',
    component: () => import('../components/democomp1/democomp1.component'),
    basePath: 'components/democomp1'
  },
  {
    path: '/democomp2',
    component: () => import('../components/democomp2/democomp2.component'),
    basePath: 'components/democomp2'
  },
  // Append with other routes as needed
];