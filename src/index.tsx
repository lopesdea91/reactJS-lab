import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import Providers from './@core/framework/providers';
import HomeView from './@core/presentention/views/Home/HomeView';
import { ObserverEventCallback } from './@core/presentention/views/ObserverEventCallback';
import { ObserverValueClass } from './@core/presentention/views/ObserverValueClass';
import { ObserverValueFunction } from './@core/presentention/views/ObserverValueFunction';

const router = createBrowserRouter([
  { path: "/", element: <HomeView /> },
  { path: "/observer-eventCallback", element: <ObserverEventCallback /> },
  { path: "/observer-eventValueClass", element: <ObserverValueClass /> },
  { path: "/observer-eventValueFunction", element: <ObserverValueFunction /> },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Providers>
    <RouterProvider router={router} />
  </Providers>
);