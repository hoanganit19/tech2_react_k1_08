import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todoSelector, addToDo, removeToDo } from "./toDoSlice";
import { v4 as uuidv4 } from "uuid";

export default function ToDo() {
  const dispatch = useDispatch();

  const [jobName, setJobName] = useState("");

  const jobList = useSelector(todoSelector);

  const handleAddToDo = (e) => {
    e.preventDefault();

    if (jobName !== "") {
      dispatch(
        addToDo({
          id: uuidv4(),
          name: jobName,
        })
      );

      setJobName("");
    }
  };

  const handleChange = (e) => {
    if (e.target.value !== "") {
      setJobName(e.target.value);
    }
  };

  const handleRemove = (index) => {
    dispatch(removeToDo(index));
  };

  return (
    <div style={{ margin: "3%" }}>
      <div>
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
      <div>
        {jobList.map(({ id, name }, index) => (
          <p key={id}>
            <input type={"checkbox"} />
            {name}
            <span
              onClick={() => {
                handleRemove(index);
              }}
            >
              x
            </span>
          </p>
        ))}
      </div>
    </div>
  );
}
