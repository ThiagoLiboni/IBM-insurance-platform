import { Link, useRoutes } from "react-router-dom";
import { useEffect, useState } from "react";
import Task from "./components/Task/Task.jsx";
import Clients from "./components/CustomerManager/Client.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import Manage from "./components/TaskManager/Manage.jsx";

function App() {
  const [isAutomationVisible, setIsAutomationVisible] = useState(false);

  const displayAutomation = () => {
    setIsAutomationVisible((prevState) => !prevState);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isAutomationVisible && !event.target.closest(".op-automation")) {
        setIsAutomationVisible(false);
      }
    };

    document.body.addEventListener("click", handleClickOutside);
    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, [isAutomationVisible]);

  function setTemplates() {
    window.location.assign("/templates");
  }
  function setFlowChat() {
    window.location.assign("/chatflow");
  }

  let element = useRoutes([
    { path: "/tarefas", element: <Task /> },
    { path: "/tarefas/:id/:name", element: <Manage /> },
    { path: "/clientes", element: <Clients /> },
  ]);

  return (
    <div>
      <div className="main-container container-fluid d-flex">
        <nav className="menu">
          <ul className="option-menu">
            <div className="option-menu-item">
              <Link to="/tarefas" className="option-text">
                TAREFAS
              </Link>
            </div>
            <div className="option-menu-item">
              <Link to="/clientes" className="option-text" value="clientes">
                CLIENTES
              </Link>
            </div>
            <div
              onMouseEnter={displayAutomation}
              className="option-menu-item op-automation-3"
            >
              <li className="option-text" value="automacao">
                AUTOMAÇÃO
              </li>
            </div>
          </ul>
        </nav>
        <div
          className="op-automation"
          style={{ display: isAutomationVisible ? "flex" : "none" }}
        >
          <ul className="op-automation-list">
            <div onClick={setTemplates} className="option-menu-item ">
              <li className="option-text" value="templates">
                TEMPLATES
              </li>
            </div>
            <div onClick={setFlowChat} className="option-menu-item">
              <li className="option-text" value="fluxos">
                FLUXOS
              </li>
            </div>
          </ul>
        </div>
        <div className="content">{element}</div>
      </div>
    </div>
  );
}

export default App;
