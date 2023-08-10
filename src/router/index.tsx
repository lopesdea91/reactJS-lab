import { createBrowserRouter } from 'react-router-dom'
import { HomeView } from '../@core/presentation/views/home'
import { AboutView } from '../@core/presentation/views/about'

const router = createBrowserRouter([
  { path: '/', element: <HomeView /> },
  { path: '/about', element: <AboutView /> },
])

export default router

