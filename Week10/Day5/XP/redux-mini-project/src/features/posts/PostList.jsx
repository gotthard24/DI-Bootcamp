import { useEffect } from 'react'
import ReactionButton from './ReactionButton'
import { usePostSelector, useGetPosts, usePostStatus } from './postHooks'

function PostList() {
  const postsData = usePostSelector()
  const postStatus = usePostStatus()
  const callGetPosts = useGetPosts()

  useEffect(() => {
    callGetPosts()
  }, []);

  if (postStatus === 'pending') return <h2>Loading...</h2>
  
  return (
    <>
      <section>
        {postsData.map(post =>{
          return(
            <div className='post' key={post.id}>
              <h2 className='post-title' >{post.title}</h2>
              <p className='post-content' >{post.body}</p>
              <ReactionButton post = {post}/>
            </div>
          )
        })}
      </section>
    </>
  )
}

export default PostList
