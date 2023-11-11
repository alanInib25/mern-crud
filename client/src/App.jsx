import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { TasksProvider } from "./context/TasksContext"
//components

//pages
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import TaskPage from "./pages/TaskPage";
import TasksFormPage from "./pages/TasksFormPage";
import Header from "./components/Header.jsx";
import ProtectedRoute from "./ProtectedRoute";

//styles
import { ThemeProvider } from "styled-components";
import { GlobalStyles, theme} from "./styles/GlobalStyles.js";


function App() { 
  return (
    <AuthProvider>
      <TasksProvider>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Header/>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route element={<ProtectedRoute />}>
                <Route path="/tasks" element={<TaskPage />} />
                <Route path="/add-task" element={<TasksFormPage />} />
                <Route path="/task/:id" element={<TasksFormPage />} />
              </Route>
            </Routes>
          </ThemeProvider>
        </BrowserRouter>
      </TasksProvider>
    </AuthProvider>
  );
}
export default App;
