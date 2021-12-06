import "./styles.scss";
import { ReactComponent as Edit } from "../../svg/pencil.svg";
import { ReactComponent as Trash } from "../../svg/trash.svg";
import TextareaAutosize from "react-textarea-autosize";

export function TodoItem(props) {
  return (
    <div className="todo-item" key={props.id}>
      <div className="todo-item__controls">
        <button
          onClick={() => props.delete(props.id)}
          className="button button_controls"
        >
          <Trash />
        </button>
        <button
          onClick={() => props.startEdit(props.id)}
          className="button button_controls"
        >
          <Edit />
        </button>
        {props.readOnly || (
          <button
            className="button button_controls button_controls_ok"
            onClick={() => {
              props.sendEdited(props.id);
            }}
          >
            OK
          </button>
        )}
      </div>

      <div className="todo-item__content">
        <label className="todo-item__label">
          name:
          <TextareaAutosize
            className={
              props.readOnly
                ? "todo-item-textarea"
                : "todo-item-textarea edited"
            }
            rows={1}
            value={props.name}
            readOnly={props.readOnly}
            onChange={(event) => {
              props.edit(event.target, props.id, "name");
            }}
          />
        </label>

        <label className="todo-item__label">
          text:
          <TextareaAutosize
            rows={1}
            className={
              props.readOnly
                ? "todo-item-textarea"
                : "todo-item-textarea edited"
            }
            value={props.text}
            readOnly={props.readOnly}
            onChange={(event) => {
              props.edit(event.target, props.id, "text");
            }}
          />
        </label>
      </div>
    </div>
  );
}
