import { useQuery } from '@apollo/client'
import { Flex } from '@chakra-ui/react'
import { ALL_TODO } from '@src/apollo/todos'
import { FC } from 'react'

interface ITodo {
	id: number
	title: string
	completed: boolean
}
const TotalCount: FC = () => {
	const { data } = useQuery(ALL_TODO)
	return (
		<Flex justifyContent={'center'} borderTop={"2px"} mt={5}>
			{data?.todos && (
				<b>Total todos: {data.todos.length}</b>
			)}
		</Flex>
	)
}

export default TotalCount
