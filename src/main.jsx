import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ChatFlow from './components/ChatFlow/ChatFlow.jsx'
import Templates from './components/MessagesTemplate/Templates.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Task from './components/Task/Task.jsx'
import Clients from './components/CustomerManager/Client.jsx'
import Manage from './components/TaskManager/Manage.jsx'
import Login from './pages/login/Login.jsx'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Login/>}/>
        <Route path="*" element={<div>404 Page not found</div>}/>
        <Route path="/" element={<App />}>
          <Route path="tarefas" element={<Task />} />
          <Route path="clientes" element={<Clients />} />
        </Route> 
        <Route path="/tarefas/:id/:name" element={<Manage />} />
        <Route path="/chatflow" element={<ChatFlow />} />
        <Route path="/templates" element={<Templates />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
