import { FC } from 'react'
import { useParams } from 'react-router-dom'

export const PostView: FC = () => {
  const params = useParams()
  return (
    <>
      <div className='flex items-center justify-between'>
        <h1 className='text-3xl border-b-2 mb-5'>Post</h1>
      </div>

      Post id: {params?.id}
    </>
  )
}