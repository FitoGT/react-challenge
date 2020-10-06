import Dashboard from './pages/Dashboard';
import Products from './pages/Products/Products';

// See React Router documentation for details: https://reacttraining.com/react-router/web/api/Route
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
];

export default pageList;
