import Layout from '../../layout'
import Form from './components/Form'

export const HomeView = () => {
  return (
    <Layout>
      <h1 className='text-3xl border-b-2 mb-5'>HomeView</h1>
      <Form />
    </Layout>
  )
}