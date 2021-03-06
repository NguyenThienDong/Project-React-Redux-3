import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import NotFound from './pages/NotFound/404';
import ProductActionPage from './pages/ProductActionPage/ProductActionPage';
import ProductListPage from './pages/ProductListPage/ProductListPage';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage />
    },
    {
        path: '/products',
        exact: false,
        main: ({history}) => <ProductActionPage history={history}/>
    },
    {
        path: '/producsts/:id/edit',
        exact: false,
        main: ({match, history}) => <ProductActionPage match={match} history={history}/>
    },
    {
        path: '/product-list',
        exact: false,
        main: () => <ProductListPage />
    },
    {
        path: '',
        exact: false,
        main: () => <NotFound />
    }
]

export default routes;