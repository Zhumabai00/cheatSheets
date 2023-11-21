import { useEffect, useState } from 'react'
import { postAPI } from '../../src/services/PostService'
import PostItem from './PostItem'
import { IPost } from 'src/models/IPost'

export default function PostContainer() {
	const [limit, setLimit] = useState(10)
	const { data: posts, error, isLoading, refetch } = postAPI.useFetchAllPostsQuery(limit)
	const [createPost, { }] = postAPI.useCreatePostMutation()
	const [updatePost, { }] = postAPI.useUpdatePostMutation()
	const [deletePost, { }] = postAPI.useDeletePostMutation()
	// const { data: posts, error, isLoading, refetch } = postAPI.useFetchAllPostsQuery(limit, {
	// 	pollingInterval: 1000
	// })

	useEffect(() => {
		// setTimeout(() => {
		// 	setLimit(3)
		// }, 2000)
	}, [])
	const handleCreate = async () => {
		const title = prompt()
		await createPost({ title, body: title } as IPost)
	}
	const handleRemove = (post: IPost) => {
		deletePost(post)
	}
	const handleUpdate = (post: IPost) => {
		updatePost(post)
	}
	return (
		<div>
			<div className="post__list">
				{/* <button onClick={() => refetch()}>REFETCH</button> */}
				<button onClick={handleCreate}>Add new post +</button>
				{isLoading && <h1>Loading,..........</h1>}
				{error && <h1>error:(:(:(:\</h1>}
				{posts && posts.map(post => (
					<PostItem remove={handleRemove} update={handleUpdate} key={post.id} post={post} />
				))}
			</div>
		</div>
	)
}

