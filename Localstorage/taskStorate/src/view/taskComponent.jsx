import { useState, useEffect } from 'react';
import TaskList from '../component/taskList';

const TaskComponent = ({ task }) => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Hacer la compra', description: 'Comprar alimentos para la semana' },
    { id: 2, title: 'Lavar el coche', description: 'Limpiar el coche por fuera y por dentro' },
  ]);

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
    localStorage.removeItem(taskId)
  };

  useEffect(() => {

    console.log('Este es el task',task)
    Object.keys(localStorage).forEach( (e) =>
    setTasks([...tasks, {id:parseInt(e), title:localStorage.getItem(e).split(',')[0], description:localStorage.getItem(e).split(',')[1]}])
     )

    console.log('local,',localStorage)
    console.log('taskt',task)

  }, [task])



  return (
    <div>
      <h1>Lista de Tareas</h1>
      <TaskList tasks={tasks} onDeleteTask={deleteTask} />
    </div>
  );
};

export default TaskComponent;
