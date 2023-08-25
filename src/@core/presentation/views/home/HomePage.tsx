import { FC, useEffect } from 'react'
import { useAuthStore, useLoadingStore, usePostStore } from '../../../framework/store'
import { Posts } from './components/Posts'
import { postsApi } from '../../../infra/api';
import { http } from '../../../infra/http';

export const HomeView: FC = () => {
  const authStore = useAuthStore()
  const postStore = usePostStore()
  const loadingStore = useLoadingStore()

  async function getData() {
    const { data } = await postsApi(http).get()
    postStore.setPosts(data)
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