import { useMutation } from '@apollo/client'
import { Checkbox } from '@chakra-ui/react'
import { DELETE_TODO, UPDATE_TODO } from '@src/apollo/todos'
import React from 'react'
import { Button, Form, InputGroup, Stack } from 'react-bootstrap'
interface Props {
	// todo: {
	id: number
	title: string
	completed: boolean
	// },
	// ToggleTodo: () => void
}
interface UpdatePostData {
	onToggle: {
		id: string;
		completed: boolean;
		title: string;
	};
}
const TodoItem = ({ id, completed, title }: Props) => {
	const [ToggleTodo, { error: updateError }] = useMutation(UPDATE_TODO)
	const [removeTodo, { error: deleteError }] = useMutation(DELETE_TODO, {
		update(cache, { data: { removeTodo } }) {
			cache.modify({
				fields: {
					allTodos(currentTodos = []) {
						return currentTodos.filter((todo: { __ref: string }) => (
							todo.__ref !== `Todo:${removeTodo.id}`
						))
					}
				}
			})
		}
	})
	if (updateError) {
		return <h2>Errore...</h2>
	}
	return (
		<div>
			<Stack direction="horizontal">
				{/* <InputGroup.Checkbox /> */}
				<Checkbox onChange={() => ToggleTodo({
					variables: {
						id,
						completed: !completed,
					}
				})} isChecked={completed} className="me-auto" style={{ padding: '0 10px' }} colorScheme='red'>
					{title}
				</Checkbox>
				{/* <Form.Check
					type='checkbox'
					checked={todo.completed}
					reverse
					label={todo.id}
					name="group1"
				/> */}
				<Button onClick={() => removeTodo({
					variables: {
						id,
					}
				})} variant="primary">close</Button>
			</Stack>
		</div>
	)
}

export default TodoItem
