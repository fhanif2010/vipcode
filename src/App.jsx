import { Route, Routes } from "react-router"
import Login from "./pages/login"
import Register from "./pages/Register"
import Product from "./component/Product"

function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/product" element={<Product />}/>
        </Routes>
    </>
  )
}

export default App
