import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../css/TaskCard.css";
import "../css/Login.css";
import { addTask, deleteTask } from "../Redux/TaskReducer/action";
import { ModelForm } from "./ModelForm";

export const TaskCard = ({ data, token }) => {
  const isloaded = useSelector((store) => store.data.isLoading);
  console.log(isloaded);
  const [showaddtask, setShowaddtask] = useState(false);
  const dispatch = useDispatch();

  const [addtaskdetails, setAddtaskdetails] = useState({
    title: "",
    description: "",
    priority: "",
  });

  const [edittaskdetails, setEdittaskdetails] = useState(null);

  const handeladdtask = () => {
    setShowaddtask(false);

    dispatch(addTask(addtaskdetails, token));
  };

  const handleDeletetTask = (id) => {
    dispatch(deleteTask(id, token));
  };

  return (
    <div id="cardWrapper">
      <div className="addcard card " onClick={() => setShowaddtask(true)}>
        +
      </div>
      <div
        id="addtask"
        style={{
          zIndex: 100,
          borderRadius: "18px",
          display: showaddtask ? "block" : "none",
          backgroundColor: "transparent",
        }}
      >
        <div className="login wrap" style={{}}>
          <div id="cross">
            <button onClick={() => setShowaddtask(false)}>
              <p>X</p>
            </button>
          </div>
          <input
            onChange={(e) =>
              setAddtaskdetails({ ...addtaskdetails, title: e.target.value })
            }
            pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"
            placeholder="Title"
            id="email"
            name="email"
            type="text"
          />
          <textarea
            onChange={(e) =>
              setAddtaskdetails({
                ...addtaskdetails,
                description: e.target.value,
              })
            }
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
            onChange={(e) =>
              setAddtaskdetails({ ...addtaskdetails, priority: e.target.value })
            }
          >
            <option disabled selected hidden>
              priority
            </option>
            <option value="Low">Low</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
          </select>

          <button
            style={{
              width: "100%",
              borderRadius: "25px",
              border: "none",
              marginTop: "30px",
            }}
            onClick={() => handeladdtask()}
            className="btn"
          >
            Add Task
          </button>
        </div>
      </div>
      {data.length == 0 && !isloaded && (
        <p
          style={{
            textAlign: "center",
            fontSize: "24px",
            marginTop: "30px",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            zIndex: "999",
          }}
        >
          No task added
        </p>
      )}
      {data.map((task, i) => {
        return (
          <div key={i} className="card">
            <div className="details">
              <div className="cardHeader">
                {task.title}
                <span
                  style={{
                    width: "10px",
                    padding: "2px",
                    backgroundColor: task.status ? "green" : "red",
                    height: "10px",
                    borderRadius: "20%",
                    marginLeft: "5px",
                    color: task.status ? "green" : "red",
                  }}
                >
                  |
                </span>
              </div>
              <div className="cardHeader">
                date: {task.date.substring(0, 10)}
              </div>
              <div className="cardHeader">Priority: {task.priority}</div>
              <p className="cardText">{task.description}</p>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div
                  className="button"
                  style={{ backgroundColor: task.status ? "green" : "red" }}
                >
                  {task.status ? "Completed" : "Not Completed"}
                </div>
                <div
                  className="button"
                  onClick={() => {
                    handleDeletetTask(task._id);
                  }}
                >
                  Delete
                </div>
              </div>
              <svg
                className="editicon"
                onClick={() => {
                  setEdittaskdetails(task);
                }}
                xmlns="http://www.w3.org/2000/svg"
                data-name="Layer 1"
                viewBox="0 0 24 24"
                id="Edit"
              >
                <path
                  d="M3.5,24h15A3.51,3.51,0,0,0,22,20.487V12.95a1,1,0,0,0-2,0v7.537A1.508,1.508,0,0,1,18.5,22H3.5A1.508,1.508,0,0,1,2,20.487V5.513A1.508,1.508,0,0,1,3.5,4H11a1,1,0,0,0,0-2H3.5A3.51,3.51,0,0,0,0,5.513V20.487A3.51,3.51,0,0,0,3.5,24Z"
                  fill="#ffffff"
                  class="color000000 svgShape"
                ></path>
                <path
                  d="M9.455,10.544l-.789,3.614a1,1,0,0,0,.271.921,1.038,1.038,0,0,0,.92.269l3.606-.791a1,1,0,0,0,.494-.271l9.114-9.114a3,3,0,0,0,0-4.243,3.07,3.07,0,0,0-4.242,0l-9.1,9.123A1,1,0,0,0,9.455,10.544Zm10.788-8.2a1.022,1.022,0,0,1,1.414,0,1.009,1.009,0,0,1,0,1.413l-.707.707L19.536,3.05Zm-8.9,8.914,6.774-6.791,1.4,1.407-6.777,6.793-1.795.394Z"
                  fill="#ffffff"
                  class="color000000 svgShape"
                ></path>
              </svg>
            </div>
          </div>
        );
      })}
      {edittaskdetails && (
        <ModelForm
          data={edittaskdetails}
          handleClose={setEdittaskdetails}
          token={token}
        />
      )}
    </div>
  );
};
