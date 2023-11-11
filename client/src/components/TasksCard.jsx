import { useTasks } from "../context/TasksContext";
import { useNavigate } from "react-router-dom";
//date
import days from "dayjs";
import utc from "dayjs/plugin/utc";
days.extend(utc);

//styles components
import {
  Card,
  CardTitle,
  CardDescription,
  CardInfoTask,
  CardButtonContainer,
  EditButton,
  DeleteButton,
  Time,
} from "../styles/components/TaskCard";

function TasksCard({ task }) {
  const { deleteTask } = useTasks();
  const navigate = useNavigate();

  return (
    <Card>
      <CardInfoTask>
        <CardTitle>{task.title}</CardTitle>
        <CardDescription>{task.description}</CardDescription>
        <Time>{days(task.date).utc().format("DD/MM/YYYY")}</Time>
      </CardInfoTask>
      <CardButtonContainer>
        <EditButton onClick={() => navigate(`/task/${task._id}`)}>
          Edit
        </EditButton>
        <DeleteButton
          onClick={() => {
            deleteTask(task._id);
          }}
        >
          Delete
        </DeleteButton>
      </CardButtonContainer>
    </Card>
  );
}

export default TasksCard;
