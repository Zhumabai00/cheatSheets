import { Checkbox } from '@chakra-ui/react'
import React from 'react'
import { Button, Form, InputGroup, Stack } from 'react-bootstrap'
interface Props {
	todo: {
		id: number
		title: string
		completed: boolean
	},
	// ToggleTodo: () => void
}
interface UpdatePostData {
	onToggle: {
		id: string;
		completed: boolean;
		title: string;
	};
}
const TodoItem = ({ todo }: Props & UpdatePostData) => {
	return (
		<div>
			<Stack direction="horizontal">
				{/* <InputGroup.Checkbox /> */}
				<Checkbox className="me-auto" style={{ padding: '0 10px' }} colorScheme='red' defaultChecked>
					{todo.title}
				</Checkbox>
				{/* <Form.Check
					type='checkbox'
					checked={todo.completed}
					reverse
					label={todo.id}
					name="group1"
				/> */}
				<Button variant="primary">close</Button>
			</Stack>
		</div>
	)
}

export default TodoItem
