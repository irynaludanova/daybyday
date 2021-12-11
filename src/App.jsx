import React from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import { Layout } from "antd"
import { ThemeProvider } from "styled-components"
import { useDarkMode } from "./hooks/useDarkMode"
import { GlobalStyles } from "./components/GlobalStyles"
import { lightTheme, darkTheme } from "./components/Themes"
import Main from "./pages/Main"
import Menu from "./components/Menu"
import { Content, Footer } from "antd/lib/layout/layout"
import { routes } from "./store/routes"
import Login from "./pages/Login"
import UserPage from "./pages/UserPage"
import { useAuth } from "./hooks/useAuth"
import CustomHeader from "./components/CustomHeader"

const App = () => {
  const [theme, themeToggler] = useDarkMode()
  const [user, setUser] = useAuth()
  const themeMode = theme === "light" ? lightTheme : darkTheme
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <Layout>
        <CustomHeader theme={theme} themeToggler={themeToggler} user={user} />
        <Content>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/menu" element={<Menu />} />
            <Route
              path="/login"
              element={user ? <Navigate to="/" /> : <Login />}
            />
            <Route
              path="/userpage"
              element={user ? <UserPage /> : <Navigate to="/login" />}
            />
            {routes.map(({ index, path, element, exact }) => {
              return (
                <Route
                  key={index}
                  path={path}
                  element={element}
                  exact={exact}
                />
              )
            })}
          </Routes>
        </Content>
        <Footer />
      </Layout>
    </ThemeProvider>
  )
}

export default App
