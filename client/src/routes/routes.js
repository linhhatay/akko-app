import Home from '~/pages/Home';
import ProductDetails from '~/pages/ProductDetails';

import config from '~/config';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.productDetail, component: ProductDetails },
];

const privateRoutes = [];
export { publicRoutes, privateRoutes };
