import { FC, useEffect } from 'react'
import { useAuthStore, useLoadingStore, usePostStore } from '../../../framework/store'
import { IPost } from '../../../domain/entities/Post';
import { Posts } from './components/Posts'

export const HomeView: FC = () => {
  const authStore = useAuthStore()
  const postStore = usePostStore()
  const loadingStore = useLoadingStore()

  async function getData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=12')
    const result = await response.json() as IPost[]

    postStore.setPosts(result)
  }

  useEffect(() => {
    if (postStore.data.posts.length === 0) getData()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <div className='flex items-center justify-between'>
        <h1 className='text-3xl border-b-2 mb-5'>Home</h1>
        {loadingStore.loading && <span>carregando ...</span>}
      </div>

      <Posts posts={postStore.data.posts} logged={authStore.data.logged} />
    </>
  )
}