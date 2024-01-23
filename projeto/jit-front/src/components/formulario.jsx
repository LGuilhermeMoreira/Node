// TodoList.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './css/TodoList.css'


const TodoList = () => {
  const [tasks, setTasks] = useState([]);

  const [newTask, setNewTask] = useState('');
  const [newDate, setNewDate] = useState('');
  const [newStatus, setNewStatus] = useState('');

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('http://localhost:8000/listar'); 
        setTasks(response.data);
      } catch (error) {
        console.error('Erro ao carregar tarefas:', error);
      }
    };

    fetchTasks();
  }, []);

  const addTask = async (event) => {
    event.preventDefault();  // Adicionado para prevenir o comportamento padrão do formulário
    if (newTask.trim() !== '') {
      const newTaskObject = {
        task: newTask,
        date: newDate,
        status: newStatus,
      };

      try {
        const response = await axios.post('http://localhost:8000/cadastrar', newTaskObject);
        setTasks([...tasks, response.data]);
        setNewTask('');
        setNewDate('');
        setNewStatus('');
      } catch (error) {
        console.error('Erro ao adicionar tarefa:', error);
      }
    }
  };

  const removeTask = async (index) => {
    const taskId = tasks[index]._id;
    console.log(taskId)
    try {
      await axios.delete(`http://localhost:8000/deletar/${taskId}`);
      const updatedTasks = [...tasks];
      updatedTasks.splice(index, 1);
      setTasks(updatedTasks);
    } catch (error) {
      console.error('Erro ao remover tarefa:', error);
    }
  };

  const updateStatus = async (index, newStatus) => {
    const taskId = tasks[index]._id;

    console.log(tasks)

    try {
      const response = await axios.put(`http://localhost:8000/concluir/${taskId}`, { status: newStatus });
      const updatedTasks = [...tasks];
      updatedTasks[index] = response.data;
      setTasks(updatedTasks);
    } catch (error) {
      console.error('Erro ao atualizar status:', error);
    }
  };

  return (
    <div className="TodoList">
      <h1>Todo List</h1>

      <form onSubmit={addTask}>  
        <div>
          <label>Tarefa:</label>
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
        </div>
        <div>
          <label>Data:</label>
          <input
            type="text"
            value={newDate}
            onChange={(e) => setNewDate(e.target.value)}
          />
        </div>
        <button type="submit">Adicionar Tarefa</button>  
      </form>

      <ul>
      {tasks.map((task, index) => (
        <li key={index}>
        <strong>Tarefa:</strong> {task.task}<br />
        <strong>Data:</strong> {task.date}<br />
        <strong>Status:</strong> 
        <span style={{ color: task.taskStatus ? 'green' : 'red' }}>
          {task.taskStatus ? 'Concluído' : 'Pendente'}
        </span><br />
        <button onClick={() => updateStatus(index, true)}>Concluir</button><br />
        <button onClick={() => removeTask(index)}>Remover</button>
      </li>
      
))}

      </ul>
    </div>
  );
};

export default TodoList;
