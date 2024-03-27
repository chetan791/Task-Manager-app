import React, { useState } from "react";
import "../css/Login.css";
import { useDispatch } from "react-redux";
import { editTask } from "../Redux/TaskReducer/action";

export const ModelForm = ({ data, handleClose, token }) => {
  const dispatch = useDispatch();
  const [taskdata, setTaskdata] = useState({
    title: data.title,
    description: data.description,
    priority: data.priority,
    status: data.status,
  });

  const handleEditTask = () => {
    dispatch(editTask(taskdata, token, data._id));
    handleClose(null);
  };

  return (
    <div
      className="login wrap"
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        zIndex: "999",
      }}
    >
      <div id="cross">
        <button
          onClick={() => {
            handleClose(null);
          }}
        >
          <p>X</p>
        </button>
      </div>
      <input
        onChange={(e) => {
          setTaskdata({ ...taskdata, title: e.target.value });
        }}
        value={taskdata.title}
        pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"
        placeholder="Title"
        id="email"
        name="email"
        type="text"
      />
      <textarea
        onChange={(e) => {
          setTaskdata({ ...taskdata, description: e.target.value });
        }}
        value={taskdata.description}
        placeholder="description"
        style={{
          width: "95%",
          borderRadius: "25px",
          border: "none",
          marginTop: "30px",
          padding: "10px",
        }}
      />
      <select
        className="priority"
        onChange={(e) => {
          setTaskdata({ ...taskdata, priority: e.target.value });
        }}
        value={taskdata.priority}
      >
        <option disabled selected hidden>
          priority
        </option>
        <option value="Low">Low</option>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
      </select>

      <select
        className="status"
        onChange={(e) => {
          setTaskdata({
            ...taskdata,
            status: e.target.value === "true" ? true : false,
          });
        }}
        value={taskdata.status}
      >
        <option disabled selected hidden>
          status
        </option>
        <option value="false">To Do</option>
        <option value="true">Completed</option>
      </select>

      <button
        onClick={() => {
          handleEditTask();
        }}
        style={{
          width: "100%",
          borderRadius: "25px",
          border: "none",
          marginTop: "30px",
        }}
        className="btn"
      >
        Update Task
      </button>
    </div>
  );
};
