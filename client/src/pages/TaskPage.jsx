import { useEffect } from "react";
import { useTasks } from "../context/TasksContext";

//components
import TasksCard from "../components/TasksCard";

//styls components
import {
  SectionTaskPage,
  NoTasksMessage,
  ContainerCard,
} from "../styles/components/TasksPage";

function TaskPage() {
  //context
  const { getTasks, tasks, errors } = useTasks();

  //solicita tareas del usuario
  useEffect(() => {
    getTasks();
  }, []);

  //muestra errores del servidor
  if (errors.length) {
    return (
      <div>
        {errors.map((error, i) => (
          <p key={i}>{error}</p>
        ))}
      </div>
    );
  }

  return (
    <SectionTaskPage>
      {tasks.length > 0 ? (
        <ContainerCard>
          {tasks.map((task) => (
            <TasksCard key={task._id} task={task} />
          ))}
        </ContainerCard>
      ) : (
        <NoTasksMessage>Not tasks</NoTasksMessage>
      )}
    </SectionTaskPage>
  );
}

export default TaskPage;
