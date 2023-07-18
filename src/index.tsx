import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import Providers from './@core/framework/providers';
import HomeView from './@core/presentention/views/Home/HomeView';
import TodoListView from './@core/presentention/views/TodoList/TodoListView';
import TodoView from './@core/presentention/views/TodoView/TodoView';

const router = createBrowserRouter([
  { path: "/", element: <HomeView /> },
  { path: "/todo-list", element: <TodoListView /> },
  { path: "/todo/:id", element: <TodoView /> },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Providers>
    <RouterProvider router={router} />
  </Providers>
);

// root.render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );