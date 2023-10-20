import Dashboard from './components/dashboard/Dashboard';
import GenerateProforma from './components/generate-proforma/GenerateProforma';
import ProductDetails from './components/product-details/ProductDetails';

const routes = [
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/product-details', name: 'ProductDetails', element: ProductDetails },
  { path: '/proforma-invoice', name: 'GenerateProforma', element: GenerateProforma },
];

export default routes;
