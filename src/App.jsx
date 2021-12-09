import React from "react"
import { Routes, Route } from "react-router-dom"
import { Layout } from "antd"
import { ThemeProvider } from "styled-components"
import { useDarkMode } from "./hooks/useDarkMode"
import { GlobalStyles } from "./components/GlobalStyles"
import { lightTheme, darkTheme } from "./components/Themes"
import Toggle from "./components/Toggler"
import Main from "./pages/Main"
import Menu from "./components/Menu"
import Logo from "./components/Logo"
import { Content } from "antd/lib/layout/layout"
import Back from "./components/Back"
import { routes } from "./store/routes"
const { Header, Footer } = Layout

const App = () => {
  const [theme, themeToggler] = useDarkMode()

  const themeMode = theme === "light" ? lightTheme : darkTheme
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <Layout>
        <Header>
          <Toggle theme={theme} toggleTheme={themeToggler} />
          <Back />
          <Logo />
        </Header>
        <Content>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/menu" element={<Menu />} />

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
