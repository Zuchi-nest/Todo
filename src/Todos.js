const Todos = ({todos, deleteTodo}) => {

  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <div onClick={() => {deleteTodo(todo.id)}} className="collection-item center" key={todo.id}>
          <span className="center-align" onClick={() => {deleteTodo(todo.id)}}>{todo.content}</span>
        </div>
      )
    })
  ) : (
    <p className="center">You have no todo's left, Good job!</p>
  );

  return (
    <div className="todos collection">
      {todoList}
    </div>
  )
}

export default Todos;