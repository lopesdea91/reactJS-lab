import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'

import HomeView from './@core/framework/views/Home/HomeView';
import TodoListView from './@core/framework/views/TodoList/TodoListView';
import TodoView from './@core/framework/views/TodoView/TodoView';

const router = createBrowserRouter([
  { path: "/", element: <HomeView /> },
  { path: "/todo-list", element: <TodoListView /> },
  { path: "/todo/:id", element: <TodoView /> },
]);


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <RouterProvider router={router} />
);

// root.render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );