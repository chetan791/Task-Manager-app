import React from "react";
import logo from "../assets/TasKQ.png";
import "../css/Home.css";
import stayOrganized from "../assets/stayOrganized.png";

export const Home = () => {
  let features = [
    {
      name: "Create Task",
      details:
        "Start by creating new tasks with a title, description, due date, priority level, and status. TaskQ allows you to add detailed information to each task to ensure clarity and organization.",
    },
    {
      name: "Update Task",
      details:
        "Edit and update existing tasks as needed. You can modify task details such as the title, description, due date, priority, and status directly from the app's interface.",
    },
    {
      name: "Delete Task",
      details:
        "Remove tasks that are no longer relevant or completed. TaskQ provides a simple delete function to help you declutter your task list and focus on what's important.",
    },
    {
      name: "Task Status",
      details:
        "Easily track the status of your tasks to see if they are completed or pending. TaskQ uses intuitive indicators to show the progress of each task, helping you prioritize and manage your workload effectively.",
    },
    {
      name: "User-Friendly Interface",
      details:
        "TaskQ features a clean and user-friendly interface that makes task management a breeze. The app's design focuses on simplicity and functionality, allowing you to navigate tasks effortlessly.",
    },
    {
      name: "Task Sorting and Filtering",
      details:
        "Organize your tasks efficiently with sorting and filtering options. TaskQ lets you sort tasks by due date, priority, or status, making it easier to focus on urgent tasks or specific categories.",
    },
    {
      name: "Responsive Design",
      details:
        "Access TaskQ from any device with its responsive design. Whether you're using a desktop, tablet, or smartphone, TaskQ adapts to your screen size for seamless task management on the go.",
    },
    {
      name: "Collaboration",
      details:
        "Collaborate with team members or share tasks with friends and family (optional feature). TaskQ supports collaboration by allowing multiple users to access and work on shared task lists",
    },
  ];
  return (
    <div id="home">
      <div id="first">
        <h1>Introducing</h1>
        <div id="logo">
          <img src={logo} alt="logo" />
        </div>
        <h1>Get ready to acheving your goals</h1>
      </div>
      <div id="second">
        <h1>TaskQ - Your Personal Task Manager</h1>
        <p>
          Welcome to TaskQ, your go-to app for managing tasks efficiently and
          staying organized. TaskQ offers a range of features designed to help
          you create, update, and track your tasks effortlessly.
        </p>
        <div id="features">
          {features.map((feature, index) => {
            return (
              <div key={index} id="feature">
                <h3>{feature.name}</h3>
                <p>{feature.details}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div id="third">
       <div>
       <h1>Get Started</h1>
        <p>
          Ready to boost your productivity with TaskQ? Get started in just a few
          simple steps:
        </p>
        <ol>
          <li>
            Sign Up/Login: Create an account or log in to your existing TaskQ
            account to access your tasks.
          </li>
          <li>
            Create Tasks: Start adding tasks by clicking the "Create Task"
            button and filling in the task details.
          </li>
          <li>
            Manage Tasks: Use the task management features to update, delete,
            and track the status of your tasks.
          </li>
          <li>
            Stay Organized: Enjoy a clutter-free and organized task management
            experience with TaskQ.
          </li>
        </ol>
       </div>
       <div id="stayOrganizedimage">
        <img src={stayOrganized} alt="" />
       </div>
      </div>
    </div>
  );
};
