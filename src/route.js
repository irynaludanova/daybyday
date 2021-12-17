import React from "react"
import { Route, Routes, Navigate } from "react-router-dom"
import UserPage from "./pages/UserPage"
import TodoList from "./components/TodoList"
import TodoForm from "./components/TodoForm"
import Main from "./pages/Main"
import Menu from "./components/Menu"
import Login from "./pages/Login"

export const useRoutes = (isAuthenticated) => {
  if (isAuthenticated) {
    return (
      <Routes>
        <Route path="/menu" element={<Menu />} exact />
        <Route path="/" element={<Main />} exact />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/userpage" element={<UserPage />} exact />
        <Route path="/todolist" element={<TodoList />} exact />
        <Route path="/todoform" element={<TodoForm />} />
      </Routes>
    )
  }
  return (
    <Routes>
      <Route path="/menu" element={<Menu />} exact />
      <Route path="/" element={<Main />} exact />
      <Route path="*" element={<Navigate to="/" />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}
