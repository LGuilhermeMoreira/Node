// TodoList.jsx

import React, { useState } from 'react';
import axios from 'axios';

const TodoList = () => {
  // Estado para armazenar as tarefas
  const [tasks, setTasks] = useState([]);
  // Estado para armazenar a nova tarefa a ser adicionada
  const [newTask, setNewTask] = useState('');
  // Estado para armazenar a data da nova tarefa
  const [newDate, setNewDate] = useState('');
  // Estado para armazenar o status da nova tarefa
  const [newStatus, setNewStatus] = useState('');

  // Função para lidar com a adição de uma nova tarefa
  const addTask = async () => {
    if (newTask.trim() !== '') {
      const newTaskObject = {
        task: newTask,
        date: newDate,
        status: newStatus,
      };

      try {
        const response = await axios.post('http://localhost:8000/cadastrar', newTaskObject);
        setTasks([...tasks, response.data]);  // Assumindo que a API retorna o objeto criado com um ID
        setNewTask('');
        setNewDate('');
        setNewStatus('');
      } catch (error) {
        console.error('Erro ao adicionar tarefa:', error);
      }
    }
  };

  const removeTask = async (index) => {
    const taskId = tasks[index].id;  // Supondo que cada tarefa tenha um campo 'id'

    try {
      await axios.delete(`http://localhost:8000/${taskId}`);
      const updatedTasks = [...tasks];
      updatedTasks.splice(index, 1);
      setTasks(updatedTasks);
    } catch (error) {
      console.error('Erro ao remover tarefa:', error);
    }
  };

  // ...

  return (
    <div>
      <h1>Todo List</h1>
      
      {/* Formulário para adicionar nova tarefa */}
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
          type="text" // Pode ser alterado para type="date" para um seletor de data nativo
          value={newDate}
          onChange={(e) => setNewDate(e.target.value)}
        />
      </div>
      <div>
        <label>Status:</label>
        <input
          type="text"
          value={newStatus}
          onChange={(e) => setNewStatus(e.target.value)}
        />
        <button onClick={addTask}>Adicionar Tarefa</button>
      </div>

      {/* Lista de tarefas */}
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <strong>Tarefa:</strong> {task.task}, {' '}
            <strong>Data:</strong> {task.date}, {' '}
            <strong>Status:</strong> {task.status}
            <button onClick={() => removeTask(index)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
