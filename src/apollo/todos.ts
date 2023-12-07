import { useQuery, gql } from '@apollo/client'

export const ALL_TODO = gql`
	query AllTodos {
		todos: allTodos {
			id
			title
			completed
		}
	}
`;

export const ADD_TODO = gql`
	mutation AddTodo($title: String!, $completed: Boolean!) {
  newTodo: createTodo(title: $title, completed: $completed) {
    id
    title
    completed
  }
}
`;
export const UPDATE_TODO = gql`
	mutation UpdateTodo($id: ID!, $completed: Boolean!) {
		updateTodo(id: $id, completed: $completed) {
			id
			title
			completed
		}
	}
`;
