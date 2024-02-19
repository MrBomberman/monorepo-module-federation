import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { router } from './router/Router';

// этот файл является entrypoint нашего микрофронта

const root = document.getElementById('root');

if (!root) {
    throw new Error('root not found');
}

const container = createRoot(root);



container.render(
    <RouterProvider router={router} />
);