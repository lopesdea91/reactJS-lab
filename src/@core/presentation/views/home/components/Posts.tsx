import { useNavigate } from "react-router-dom"
import { IPost } from "../../../../domain/entities/Post"
import { cssMerge } from "../../../../../utils"

interface PostsProps {
  posts: IPost[]
  logged: boolean
}

export const Posts = ({ posts, logged }: PostsProps) => {
  const navigate = useNavigate()

  function formatPost(post: IPost): IPost {
    return {
      ...post,
      body: post.body.slice(0, 50) + ' ...'
    }
  }

  const postsFormated = logged ? posts : posts.map(formatPost)

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {postsFormated.map(post => (
        <div
          key={post.id}
          className={cssMerge(
            'p-4 rounded border-[1px] shadow-lg shadow-zinc-300',
            logged ? "cursor-pointer duration-150 hover:scale-105" : 'cursor-not-allowed'
          )}
          onClick={() => logged && navigate(`/post/${post.id}`)}
        >
          <h3 className={cssMerge(
            "overflow-hidden font-bold text-lg capitalize leading-5 mb-2",
            logged ? "" : 'truncate'
          )}>
            {post.title}
          </h3>

          <span className={cssMerge(
            "inline-block text-sm text-zinc-600 leading-4",
          )}>
            {post.body}
          </span>
        </div>
      ))}
    </div>
  )
}
