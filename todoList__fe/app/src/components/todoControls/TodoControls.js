import "./styles.scss";

export function TodoControls(deleteTodo) {
  return (
    <div className="todo-controls">
      <button onClick={deleteTodo}>delete</button>
    </div>
  );
}