import React from "react";
import { useForm } from "react-hook-form";
import { ReactComponent as Plus } from "../../svg/plus.svg";
import TextareaAutosize from "react-textarea-autosize";
import "./styles.scss";

export function AddTodo(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="wrapper">
      <button
        onClick={props.addTodo}
        className="addTodo-form-button addTodo-form-button_plus"
      >
        <Plus />
      </button>

      {props.creationMode && (
        <form className="addTodo-form" onSubmit={handleSubmit(props.onSubmit)}>
          <label className="addTodo-form__label">
            name:
            <TextareaAutosize
              {...register("name", {
                required: true,
                minLength: 2,
                pattern: /^[a-zA-Z0-9_ ]*$/i,
              })}
              rows={1}
              className={"addTodo-form__textarea"}
            />
              {errors?.name?.type === "pattern" && (
                  <span className="addTodo-form__error-message">
                  The name must not contain special characters
              </span>
              )}

            {errors?.name?.type === "required" && (
              <span className="addTodo-form__error-message">
                This field is required
              </span>
            )}

            {errors?.name?.type === "minLength" && (
              <span className="addTodo-form__error-message">
                Name must be at least two letters
              </span>
            )}
          </label>
          <label className="addTodo-form__label">
            text:
            <TextareaAutosize
              {...register("text", { required: true, minLength: 2 })}
              rows={1}
              className={"addTodo-form__textarea"}
            />
            {errors?.text?.type === "required" && (
              <span className="addTodo-form__error-message">
                This field is required
              </span>
            )}
            {errors?.text?.type === "minLength" && (
              <span className="addTodo-form__error-message">
                Name must be at least two letters
              </span>
            )}
          </label>
          <input
            type="submit"
            value="ADD"
            className="addTodo-form-button addTodo-form-button_add"
          />
        </form>
      )}
    </div>
  );
}
