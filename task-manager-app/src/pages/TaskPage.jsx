import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTasks } from "../Redux/TaskReducer/action";
import { TaskCard } from "../components/TaskCard";
import "../css/taskPage.css";

export const TaskPage = () => {
  const dispatch = useDispatch();

  const token = useSelector((store) => store.auth.token);

  const data = useSelector((store) => store.data.tasks);
  const isLoading = useSelector((store) => store.data.isLoading);
  const [filteredData, setfilteredData] = useState(null);

  useEffect(() => {
    dispatch(getAllTasks(token));
  }, []);

  const handleFilter = (e) => {
    const filterValue = e.target.value;
    if (filterValue === "All") {
      setfilteredData([...data]);
    } else {
      const filteredData = data.filter((task) => task.priority === filterValue);
      setfilteredData(filteredData);
    }
  };

  // console.log(data);

  return (
    <div id="taskpage">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>Task Page</h1>
        <select onChange={handleFilter} style={{ width: "20%" }} id="filtering">
          <option value="All">All</option>
          <option value="Low">Low</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
        </select>
      </div>

      {isLoading && (
        <h1
          style={{
            textAlign: "center",
            marginTop: "100px",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
          }}
        >
          Loading...
        </h1>
      )}
      {data && (
        <TaskCard data={filteredData ? filteredData : data} token={token} />
      )}
    </div>
  );
};
