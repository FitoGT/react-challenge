import Dashboard from './pages/Dashboard';
import Products from './pages/Products/Products';
import Shopping from './pages/Shopping/Shopping';


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
  {
    name: 'Shopping',
    path: '/shopping',
    component: Shopping,
  }
];

export default pageList;
