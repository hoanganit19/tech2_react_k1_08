import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  todoSelector,
  addToDo,
  removeToDo,
  completeToDo,
  fetchTodos,
  fetchAddTodo,
  fetchDeleteTodo,
  fetchCompleteTodo,
  fetchFilterTodos,
  todoLoadingSelector,
} from "./toDoSlice";
import { v4 as uuidv4 } from "uuid";
import "./ToDo.css";

export default function ToDo() {
  const dispatch = useDispatch();

  const [jobName, setJobName] = useState("");

  const jobList = useSelector(todoSelector);

  const loading = useSelector(todoLoadingSelector);

  useEffect(() => {
    dispatch(fetchTodos()); //call dữ liệu từ api
  }, []);

  const handleAddToDo = (e) => {
    e.preventDefault();

    if (jobName !== "") {
      // dispatch(
      //   addToDo({
      //     id: uuidv4(),
      //     name: jobName,
      //     complete: false
      //   })
      // );

      // dispatch(thunkFunction({
      //   id: uuidv4(),
      //   name: jobName,
      //   complete: false
      // }));

      dispatch(
        fetchAddTodo({
          name: jobName,
          complete: false,
        })
      );

      setJobName("");
    }
  };

  const handleChange = (e) => {
    setJobName(e.target.value);
  };

  const handleRemove = (id) => {
    //dispatch(removeToDo(index));
    dispatch(fetchDeleteTodo(id));
  };

  const handleComplete = (id, isChecked) => {
    // dispatch(
    //   completeToDo({
    //     index: index,
    //     complete: isChecked,
    //   })
    // );

    dispatch(
      fetchCompleteTodo({
        id: id,
        status: isChecked,
      })
    );
  };

  const handleFilter = (e) => {
    const keyword  = e.target.value;
    dispatch(fetchFilterTodos(keyword));
  }

  const renderJobs = () => {
    return (
      <>
        {loading !== "pending" ? (
          jobList.map(({ id, name, complete }, index) => {
            const attributes = {
              type: "checkbox",
              onChange: (e) => {
                handleComplete(id, e.target.checked);
              },
            };

            if (complete) {
              attributes.checked = true;
            } else {
              attributes.checked = false;
            }

            return (
              <p key={id}>
                <input {...attributes} />
                <span className={complete ? "complete" : ""}>{name}</span>
                <span
                  className="remove"
                  onClick={() => {
                    handleRemove(id);
                  }}
                >
                  x
                </span>
              </p>
            );
          })
        ) : (
          <p>Đang tải...</p>
        )}
      </>
    );
  };

  return (
    <div style={{ margin: "3%" }}>
      <div>
        <input
          type="search"
          name="keyword"
          placeholder="Từ khoá..."
          onChange={handleFilter}
        />
        <form onSubmit={handleAddToDo}>
          <input
            type={"text"}
            onChange={handleChange}
            name={"job"}
            placeholder={"Tên công việc..."}
            value={jobName}
          />
          <button type={"submit"}>Thêm</button>
        </form>
      </div>
      <div>{renderJobs()}</div>
    </div>
  );
}
