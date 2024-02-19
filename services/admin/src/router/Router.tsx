import { createRoot } from 'react-dom/client';
import { App } from '@/components/App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { LazyAbout } from '@/pages/About/About.lazy';
import { Suspense } from 'react';
import { UserCard } from '@packages/shared/src/components/UserCard';

const routes = [
    {
        path: "/admin",
        element: <App />,
        children: [
            {
                path: '/admin/about',
                element: <Suspense fallback={'Loading...'}><LazyAbout />
                    <UserCard username={'HElllo from admin!!!!'} /></Suspense>
            },
        ]
    },
]

export const router = createBrowserRouter(routes);

export default routes;