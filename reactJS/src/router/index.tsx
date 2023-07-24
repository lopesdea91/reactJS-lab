import { createBrowserRouter } from "react-router-dom";
import HomeView from "../@core/presentation/views/HomeView";
import MovieView from "../@core/presentation/views/MovieView";

const router = createBrowserRouter([
  { path: "/", element: <HomeView /> },
  { path: "/movie/:id", element: <MovieView /> },
]);

export default router