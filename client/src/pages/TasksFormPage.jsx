import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useTasks } from "../context/TasksContext";
import { useNavigate, useParams } from "react-router-dom";

//Date
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

//styles components
import { SectionForm, ButtonSave } from "../styles/components/TasksFormPage";
import {
  Form,
  InputText,
  TextArea,
  InputTime,
  FormGroup,
  ErrorMessage,
} from "../styles/GeneralComponents";

function TasksFormPage() {
  //form hook
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
    setError,
    reset,
  } = useForm();

  //hook router
  const navigation = useNavigate();
  const params = useParams();

  //tasks context
  const { createTask, getTask, editTask } = useTasks();

  //fecha, obtiene año par completar campo input date
  const today = new Date(Date.now()).toISOString().split("T")[0];

  //analiza la parametro de url para ver si edita o crea task
  useEffect(() => {
    if (params.id) loadedTask(params.id);
    else reset({ title: "", description: "", date: today });
  }, [params.id]);

  //carga la task a editar en el formulario
  async function loadedTask(id) {
    try {
      const task = await getTask(id);
      setValue("title", task.title);
      setValue("description", task.description);
      setValue("date", dayjs(task.date).utc().format().split("T")[0]);
      return;
    } catch (error) {
      console.log(error);
    }
  }

  //analiza fecha ingresada
  const checkToday = () => {
    const { date } = getValues();
    if (date < today) {
      setError("date", { message: "Date old" });
      return false;
    }
    return true;
  };

  //checkea si hay parametro en la url para decidir si editar o crear
  const createOrEdit = (data) => {
    if (params.id) {
      editTask({
        ...data,
        id: params.id,
        date: dayjs.utc(data.date).format(),
      });
    } else {
      createTask({
        ...data,
        date: dayjs.utc(data.date).format(),
      });
    }
    return navigation("/tasks");
  };

  //si hay params.id se edita
  const onSubmit = handleSubmit((data) => {
    if (!checkToday()) return;
    createOrEdit(data);
  });

  return (
    <SectionForm>
      <Form onSubmit={onSubmit} name="form" id="form" className="form">
        <FormGroup>
          <InputText
            {...register("title", {
              required: "Title is required",
              minLength: {
                value: 1,
                message: "Min length 1 characters",
              },
              maxLength: {
                value: 20,
                message: "Max length 20 characters",
              },
            })}
            name="title"
            id="title"
            placeholder="Title"
          ></InputText>
          <ErrorMessage>{errors.title?.message}</ErrorMessage>
        </FormGroup>

        <FormGroup>
          <TextArea
            {...register("description", {
              required: "Description is requried",
              minLength: {
                value: 1,
                message: "Min length 1 characters",
              },
              maxLength: {
                value: 200,
                message: "Max length 200 characters",
              },
            })}
            id="description"
            name="description"
            rows="3"
            placeholder="Description"
          ></TextArea>
          <ErrorMessage>{errors.description?.message}</ErrorMessage>
        </FormGroup>
        <FormGroup>
          <InputTime
            {...register("date", {
              required: "Date is required",
            })}
          />
          <ErrorMessage>{errors.date?.message}</ErrorMessage>
        </FormGroup>
        <FormGroup>
          <ButtonSave type="submit">Save</ButtonSave>
        </FormGroup>
      </Form>
    </SectionForm>
  );
}

export default TasksFormPage;
