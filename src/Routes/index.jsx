import { Navigate, Route, Routes } from 'react-router-dom'
import { Destacados } from '../Paginas/Destacados'
import { Contato } from '../Paginas/Contato'
import Detail from '../Paginas/Detail'
import Home from '../Paginas/Home'
import LoginForm from '../Components/LoginForm'
import { DentistaContext } from '../Contexts/DentistaProvider'
import { useContext } from 'react'

const PrivateRoute = ({ children }) => {
  const { userToken } = useContext(DentistaContext)

  return userToken ? children : <Navigate to="/" />
}

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route
        path="/home"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
      <Route
        path="/destacados"
        element={
          <PrivateRoute>
            <Destacados />
          </PrivateRoute>
        }
      />
      <Route path="/dentist/:id" element={<Detail />} />
      <Route path="/contato" element={<Contato />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
    </Routes>
  )
}