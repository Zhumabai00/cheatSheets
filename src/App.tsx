import { useAppDispatch, useAppSelector } from "./hooks/redux"
import { userSlice } from "./store/reducers/UserSlice"
import { fetchUsers } from "./store/reducers/ActionCreators"
// import AddTodo from "@components/AddTodo"
import TodoList from "@components/TodoList"
import { Col, Container, Row, Stack } from 'react-bootstrap';
import './App.scss'

import {
  ChakraBaseProvider,
  extendBaseTheme,
  theme as chakraTheme,
} from '@chakra-ui/react'
import AddTodo from "./components/AddTodo";

const { Button } = chakraTheme.components

const theme = extendBaseTheme({
  components: {
    Button,
  },
})
function App() {
  // const { count } = useAppSelector(state => state.userReducer)
  // const { increment } = userSlice.actions
  // const dispatch = useAppDispatch()
  // const { users, isLoading, error } = useAppSelector(state => state.userReducer)

  // useEffect(() => {
  //   dispatch(fetchUsers())
  // }, [])

  return (
    <>
      {/* <h1>{count}</h1>
      <button onClick={() => dispatch(increment(18))}>increment</button> */}
      {/* {isLoading && <h1>IS loading....</h1>}
      {error && <h1>{error}</h1>}
      {JSON.stringify(users, null, 2)} */}

      <ChakraBaseProvider theme={theme}>
        <Container className="m">
          <Row>
            <Col>
              <TodoList />
            </Col>
            <Col>
              <AddTodo />
            </Col>
          </Row>
        </Container>
      </ChakraBaseProvider>
    </>
  )
}

export default App
