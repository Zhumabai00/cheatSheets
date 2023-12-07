import { FC } from 'react'
import { Spinner, Stack } from 'react-bootstrap';
import TodoItem from './TodoItem';
import { useQuery, useMutation } from '@apollo/client';
import { ALL_TODO, UPDATE_TODO } from '@src/apollo/todos';
import TotalCount from './TotalCount';

interface ITodo {
	id: number
	title: string
	completed: boolean
}
interface GetUsersQuery {
	todos: ITodo[]
}
interface GetProps {
	ToggleTodo: () => void

}
interface UpdatePostData {
	Todo: {
		id: string;
		completed: boolean;
		title: string;
	};
}


const TodoList: FC = () => {
	const { loading, error, data } = useQuery<GetUsersQuery>(ALL_TODO)
	// const [ToggleTodo, { error: updateError }] = useMutation<UpdatePostData>(UPDATE_TODO)
	if (loading) {
		return <Spinner animation="grow" />
	}
	if (error) {
		return <h3>Error...</h3>
	}
	return (
		<div className='p-10 Todo'>
			<Stack gap={3}>
				{data && data.todos.map(todo => (
					<TodoItem
						// onToggle={ToggleTodo}
						key={todo.id}
						todo={todo} />
				))}
			</Stack>
			<TotalCount />
		</div>
	)
}

export default TodoList
