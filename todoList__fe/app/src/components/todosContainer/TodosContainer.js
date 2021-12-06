import "./styles.scss";
import { sendRequest } from "../../utils/sendRequest";
import { useState, useEffect } from "react";
import { AddTodo } from "../addTodo/AddTodo";
import { LOCAL_HOST } from "../../constants/index";
import { TodoItem } from "../todoItem/TodoItem";

export function TodosContainer() {
  const [users, setUsers] = useState([]);
  const [creationStatus, setCreationStatus] = useState(false);

  useEffect(() => {
    sendRequest(LOCAL_HOST).then((res) => {
      setUsers(res.map((user) => ({ ...user, readOnly: true })));
    });
  }, []);

  const deleteTodo = (id) => {
    sendRequest(LOCAL_HOST + id, { method: "DELETE" }).then(() => {
      setUsers(users.filter((user) => user.id !== id));
    });
  };

  const createTodo = (user) => {
    sendRequest(LOCAL_HOST, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((res) => {
      setUsers([...users, { ...res[res.length - 1], readOnly: true }]);
      setCreationStatus(false)
    });
  };

  const startEdit = (id) => {
    setUsers(
      users.map((elem) => {
        return elem.id === id ? { ...elem, readOnly: !elem.readOnly } : elem;
      })
    );
  };

  const editTodo = (todo, id, field) => {
    setUsers(
      users.map((elem) => {
        return elem.id === id ? { ...elem, [field]: todo.value } : elem;
      })
    );
  };

  const sendEditedTodo = (id) => {
    let [user] = users.filter((user) => user.id === id);
    sendRequest(LOCAL_HOST + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: user.name, text: user.text }),
    }).then(console.log);

    setUsers(
      users.map((elem) => {
        return elem.id === id ? { ...elem, readOnly: !elem.readOnly } : elem;
      })
    );
  };

  return (
    <div className="wrapper">
      <AddTodo
        addTodo={() => setCreationStatus(!creationStatus)}
        creationMode={creationStatus}
        onSubmit={createTodo}
      />
      <div className="todos-container">
        {users.map((user) => {
          return (
            <TodoItem
              key={user.id}
              id={user.id}
              delete={deleteTodo}
              startEdit={startEdit}
              name={user.name}
              text={user.text}
              readOnly={user.readOnly}
              edit={editTodo}
              sendEdited={sendEditedTodo}
            />
          );
        })}
      </div>
    </div>
  );
}
