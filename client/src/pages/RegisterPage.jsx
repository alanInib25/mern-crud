import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

//style components
import {
  Form,
  FormGroup,
  InputText,
  InputPassword,
  ErrorMessage,
  Span,
} from "../styles/GeneralComponents";
import { SectionRegister, RegisterButton } from "../styles/components/Register";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //context
  const { signup, user, errors: registerErrors, isAuthenticate } = useAuth();

  //hook
  const navigate = useNavigate();

  //si esta autenticado que redireccione;
  useEffect(() => {
    if (isAuthenticate) navigate("/tasks");
  }, [isAuthenticate]);

  //form submit
  const onSubmit = handleSubmit(async (values) => {
    signup(values);
    navigate("/login");
  });

  return (
    <SectionRegister>
      {registerErrors.map((error, i) => (
        <div key={i}>{error}</div>
      ))}

      <Form onSubmit={onSubmit}>
        <FormGroup>
          <InputText
            {...register("username", { required: "Username is required" })}
            placeholder="Username"
          />
          <ErrorMessage>{errors.username?.message}</ErrorMessage>
        </FormGroup>
        <FormGroup>
          <InputText
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                message: "Email invalid format",
              },
            })}
            placeholder="Email"
          />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>
        </FormGroup>
        <FormGroup>
          <InputPassword
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Min length is 6 characters",
              },
              maxLength: {
                value: {
                  value: 12,
                  message: "Max length is 12 characters",
                },
              },
            })}
            placeholder="Password"
          />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>
        </FormGroup>
        <FormGroup>
          <RegisterButton type="submit">Register</RegisterButton>
        </FormGroup>
        <Span>
          Do you have a account? <Link to="/login">Sign in</Link>
        </Span>
      </Form>
    </SectionRegister>
  );
}

export default RegisterPage;
