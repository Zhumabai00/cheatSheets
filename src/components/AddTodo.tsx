import { useMutation } from '@apollo/client';
import { ADD_TODO, ALL_TODO } from '@src/apollo/todos';
import React, { FC, useCallback, useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap';
interface ITodo {
	title: string
	__ref: {
		completed: boolean
		id: number

	}
}
interface GetUsersQuery {
	todos: ITodo[]
}
const AddTodo: FC = () => {
	const [inputValue, setInputValue] = useState('');
	const [AddTodo, { error }] = useMutation(ADD_TODO, {
		refetchQueries: [
			{ query: ALL_TODO }
		],
		// update(cache, { data: { createTodo } }) {
		// 	cache.modify({
		// 		fields: {
		// 			allTodos(currentTodos = []) {
		// 				return currentTodos.filter((todo: ITodo) => (
		// 					todo.title !== createTodo.title
		// 				))
		// 			}
		// 		}
		// 	})
		// }
		// update(cache, { data: { newTodo } }) {
		// 	const { todos } = cache.readQuery<GetUsersQuery>({ query: ALL_TODO })

		// 	cache.writeQuery({
		// 		query: ALL_TODO,
		// 		data: {
		// 			todos: [newTodo, ...todos]
		// 		}
		// 	})
		// }
	})

	console.log(inputValue)
	const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement> | React.KeyboardEvent<HTMLInputElement>): void => {
		e.preventDefault()
		if (inputValue.trim().length) {
			AddTodo({
				variables: {
					title: inputValue,
					completed: false
				}
			});
			setInputValue('');
		}
		console.log('Submitted value:', inputValue);
	}, [inputValue]);

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		setInputValue(event.target.value);
	};
	const handlekey = (event: React.KeyboardEvent<HTMLInputElement>): void => {
		if (event.key === "Enter") handleSubmit(event);
	}
	if (error) {
		return <h3>Error...</h3>
	}
	return (
		<div className='p-10 Todo'>
			<form onSubmit={e => handleSubmit(e)}>
				<Row>
					<Col>
						<input type="text" style={{ border: "1px solid black", outline: "none" }} value={inputValue} onKeyPress={handlekey} onChange={handleInputChange} />
					</Col>
					<Col md="auto">
						<Button variant="primary" type="submit">submit</Button>
					</Col>
				</Row>
			</form>
		</div>
	)
}

export default AddTodo
