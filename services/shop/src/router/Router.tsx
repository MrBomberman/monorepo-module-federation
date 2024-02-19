import { App } from '@/components/App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { LazyShop } from '@/pages/Shop/Shop.lazy';
import { Suspense } from 'react';
import { UserCard } from '@packages/shared/src/components/UserCard';

const routes = [
    {
        path: "/shop",
        element: <App />,
        children: [
            {
                path: '/shop/main',
                element: <Suspense fallback={'Loading...'}><LazyShop /></Suspense>
            },
            {
                path: '/shop/second',
                element: <Suspense fallback={'Loading...'}><div style={{ color: 'red' }}>CHIIIIIIL</div>
                    <UserCard username={'Hello from shooop'} />
                </Suspense>
            }
        ]
    },
]

export const router = createBrowserRouter(routes);

export default routes;