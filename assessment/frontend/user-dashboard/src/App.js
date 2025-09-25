import React, { useEffect, useState } from "react";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';


import "./App.css"; 

const App = () => {
  const [users, setUsers] = useState([]);
  const [tasks, setTasks] = useState([]);

   useEffect(() => {
    fetch("http://localhost:5000/api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error("Failed to fetch users:", err));
  }, []);

   useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
        .then((res) => res.json())
        .then((data) =>
          setTasks(data.map((task) => ({ ...task, localCompleted: task.completed })))
        );
    }, []);

  const formattedDate = new Date().toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  
    const toggleComplete = (id) => {
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === id
            ? { ...task, localCompleted: !task.localCompleted }
            : task
        )
      );
    };

  return (
    <div style={{background:"#f8fbfd"}}>
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center flex-wrap mb-4  py-4">
        <h2 className="text-primary m-0 fw-bolder ps-5">My Dashboard</h2>
        <div className=" px-5  py-2 rounded fw-bold d-flex gap-3 me-5 mt-sm-5">
          <CalendarMonthIcon sx={{ color: "#8497f5" }}/>
          <span>{formattedDate}</span>
        </div>
      </div>

      {/* Dashboard Cards */}
      <div className="px-4 px-lg-5 bg-white m-3 m-lg-5">
        <div className="row g-4 mb-5">
          {/* Total Users */}
          <div className="col-12 col-sm-4 ">
            <div className="stat-card h-100 p-4 rounded shadow" >
              <h5 className="d-flex align-items-center gap-2 mb-2">
                <PeopleAltIcon />
                Total Users
              </h5>
              <p className="fw-bolder fs-2">{users.length}</p>
            </div>
          </div>

          {/* Completed Tasks */}
          <div className="col-12 col-sm-4">
            <div className="stat-card h-100 p-4 rounded shadow">
              <h5 className="d-flex align-items-center gap-2 mb-2">
                <CheckCircleIcon />
                Completed Tasks
              </h5>
              <p className="fw-bolder fs-2">12</p>
            </div>
          </div>

          {/* Pending Tasks */}
          <div className="col-12 col-sm-4">
            <div className="stat-card h-100 p-4 rounded shadow">
              <h5 className="d-flex align-items-center gap-2 mb-2">
                <AccessTimeFilledIcon />
                Pending Tasks
              </h5>
              <p className="fw-bolder fs-2">5</p>
            </div>
          </div>
        </div>

        {/* User Table */}
        <div className="table-responsive ">
          <table className="table custom-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Company</th>
              </tr>
            </thead>
            <tbody>
              {users.map((data) => (
                <tr key={data.id}>
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                  <td>{data.phone}</td>
                  <td>{data.company.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Task List */}
        <div className="mt-5">
         <div className="task-container small p-3 p-md-4">
          <h2 className="text-center p-3">Task List</h2>
          <ul className="list-unstyled">
            {tasks.map((task) => (
              <li
                key={task.id}
                className={`task-item ${task.localCompleted ? "completed" : ""}`}
                onClick={() => toggleComplete(task.id)}
              >
                <input
                  type="checkbox"
                  checked={task.localCompleted}
                  readOnly
                  className="me-2"
                />

                <span className="d-flex align-items-center flex-grow-1">{task.title}</span>

                {task.localCompleted && (
                  <span className="task-status d-flex align-items-center ms-2 fw-semibold">
                    <CheckCircleIcon className="completed-icon me-2" />
                    <span className="status-label d-none d-sm-inline">Completed</span>
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
        </div>
      </div>
    </div>
  );
};

export default App;
