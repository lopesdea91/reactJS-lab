import { createBrowserRouter } from 'react-router-dom'
import { FC } from 'react'
import Layout from '../@core/presentation/layout'
import { HomeView } from '../@core/presentation/views/home'
import { PostView } from '../@core/presentation/views/post'

const LayoutWrapper = (View: FC) => {
  return (
    <Layout>
      <View />
    </Layout>
  )
}

const router = createBrowserRouter([
  { path: '/', element: LayoutWrapper(HomeView) },
  { path: '/post/:id', element: LayoutWrapper(PostView) },
])

export default router

