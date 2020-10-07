import Dashboard from './pages/Dashboard';
import Products from './pages/Products/Products';
import Shopping from './pages/Shopping/Shopping';

const pageList = [
  {
    name: 'Dashboard',
    path: '/home',
    component: Dashboard,
  },
  {
    name: 'Products',
    path: '/products',
    component: Products,
  },
  {
    name: 'Shopping',
    path: '/shopping',
    component: Shopping,
  }
];

export default pageList;
