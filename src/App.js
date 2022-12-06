import Home from "./rutas/Home";
import Carrito from "./rutas/Carrito"
import Login from "./rutas/Login"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

/* RAMA DEVELOP */

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/carrito" element={<Carrito/>}></Route>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
