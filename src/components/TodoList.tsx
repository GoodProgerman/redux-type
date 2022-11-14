import { FC, useEffect } from 'react'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'
// import { setTodoPage } from '../store/action-creators/todo'
import { Todo, TodoState } from '../types/todo'

const TodoList: FC = () => {
	const { page, error, limit, loading, todos } = useTypedSelector(state => state.todo)
	const { fetchTodos, setTodoPage } = useActions()
	const pages = [1, 2, 3, 4, 5]

	useEffect(() => {
		fetchTodos(page, limit,)

	}, [page])


	if (loading) {
		return <h1>loading...</h1>
	}
	if (error) {
		return <h1>{error}</h1>
	}
	return (
		<div>
			{
				(todos as Todo[]).map(todo =>
					<div key={todo.id}>{todo.id} - {todo.title}</div>
				)
			}
			{
				pages.map(p =>
					<div style={{ border: p === page ? '2px solid green' : '1px solid yellow', display: 'inline-block', padding: 25 }}
						onClick={() => setTodoPage(p)}
					>{p}</div>
				)
			}
		</div>
	)
}

export default TodoList