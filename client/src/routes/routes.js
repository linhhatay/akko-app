import Home from '~/pages/Home';
import ProductDetails from '~/pages/ProductDetails';
import Account from '~/pages/Account';
import ForgotPassword from '~/pages/Account/ForgotPassword';
import ResetPassword from '~/pages/Account/ResetPassword';

import config from '~/config';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.productDetail, component: ProductDetails },
    { path: config.routes.account, component: Account },
    { path: config.routes.forgotPassword, component: ForgotPassword },
    { path: config.routes.resetPassword, component: ResetPassword },
];

const privateRoutes = [];
export { publicRoutes, privateRoutes };
