import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

//style components
import {
  Form,
  FormGroup,
  InputEmail,
  InputPassword,
  ErrorMessage,
  Span,
} from "../styles/GeneralComponents";
import {
  SectionLogin,
  LoginButton,
  ErrorServer,
} from "../styles/components/Login";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //context
  const { signin, errors: loginErrors, isAuthenticate } = useAuth();

  //hook
  const navigate = useNavigate();

   //si esta autenticado que redireccione;
  useEffect(() => {
    if (isAuthenticate) navigate("/tasks");
  }, [isAuthenticate]);

  //submit form
  const onSubmit = handleSubmit((values) => {
    signin(values);
  });

  return (
    <SectionLogin>
      {loginErrors.map((error, i) => (
        <ErrorServer key={i}>{error}</ErrorServer>
      ))}

      <Form onSubmit={onSubmit}>
        <FormGroup>
          <InputEmail
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                message: "Email invalid format",
              },
            })}
            placeholder="Email..."
          />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>
        </FormGroup>
        <FormGroup>
          <InputPassword
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Min length is 6 characters",
              },
              maxLength: {
                value: 12,
                message: "Max length is 12 characters",
              },
            })}
            placeholder="Password..."
          />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>
        </FormGroup>
        <FormGroup>
          <LoginButton type="submit">Login</LoginButton>
        </FormGroup>
        <Span>
          Don't have an account? <Link to="/register">Sign up</Link>
        </Span>
      </Form>
    </SectionLogin>
  );
}

export default LoginPage;
