import Home from '~/pages/Home';
import ProductDetails from '~/pages/ProductDetails';
import Account from '~/pages/Account';
import ForgotPassword from '~/pages/Account/ForgotPassword';
import ResetPassword from '~/pages/Account/ResetPassword';
import EditAccount from '~/pages/Account/EditAccount/EditAccount';

import config from '~/config';
import Address from '~/pages/Address';
import PayAddress from '~/pages/Address/PayAddress';
import Store from '~/pages/Store';
import Cart from '~/pages/Cart';
import Pay from '~/pages/Pay';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.productDetail, component: ProductDetails },
    { path: config.routes.store, component: Store },
    { path: config.routes.account, component: Account },
    { path: config.routes.forgotPassword, component: ForgotPassword },
    { path: config.routes.resetPassword, component: ResetPassword },
    { path: config.routes.editAccount, component: EditAccount },
    { path: config.routes.editAddress, component: Address },
    { path: config.routes.editAddressPay, component: PayAddress },
    { path: config.routes.cart, component: Cart },
    { path: config.routes.pay, component: Pay },
];

const privateRoutes = [];
export { publicRoutes, privateRoutes };
