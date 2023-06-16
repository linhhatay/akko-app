import Home from '~/pages/Home';
import ProductDetails from '~/pages/ProductDetails';
import Account from '~/pages/Account';

import config from '~/config';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.productDetail, component: ProductDetails },
    { path: config.routes.account, component: Account },
];

const privateRoutes = [];
export { publicRoutes, privateRoutes };
