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
import { pageRoutes } from "./store/routes"
import Login from "./pages/Login"
import UserPage from "./pages/UserPage"
import { useSocialAuth } from "./hooks/useSocialAuth"
import CustomHeader from "./components/CustomHeader"
import { useAuth } from "./hooks/useAuth"
const App = () => {
  const [token] = useAuth()
  const [user] = useSocialAuth()
  const [theme, themeToggler] = useDarkMode()
  const themeMode = theme === "light" ? lightTheme : darkTheme
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <Layout>
        <CustomHeader
          theme={theme}
          themeToggler={themeToggler}
          user={user}
          token={token}
        />
        {console.log("User:", user, "Token:", token)}
        <Content>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/login" element={<Login />} />

            <Route
              path="/userpage"
              element={user || token ? <UserPage /> : <Navigate to="/login" />}
            />
            {pageRoutes.map(({ index, path, element, exact }) => {
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
