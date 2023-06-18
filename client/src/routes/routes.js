import Home from '~/pages/Home';
import ProductDetails from '~/pages/ProductDetails';
import Account from '~/pages/Account';
import ForgotPassword from '~/pages/Account/ForgotPassword';
import ResetPassword from '~/pages/Account/ResetPassword';
import EditAccount from '~/pages/Account/EditAccount/EditAccount';

import config from '~/config';
import Address from '~/pages/Address';
import Pay from '~/pages/Address/Pay';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.productDetail, component: ProductDetails },
    { path: config.routes.account, component: Account },
    { path: config.routes.forgotPassword, component: ForgotPassword },
    { path: config.routes.resetPassword, component: ResetPassword },
    { path: config.routes.editAccount, component: EditAccount },
    { path: config.routes.editAddress, component: Address },
    { path: config.routes.editAddressPay, component: Pay },
];

const privateRoutes = [];
export { publicRoutes, privateRoutes };
