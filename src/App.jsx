import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./pages/Navbar";
import Beer from "./pages/Beer";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Contact from "./pages/Contact";
import './index.css'


function App() {
  return (

   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar/>} >
          <Route index element={<Home/>} />
          <Route path="contact" element={<Contact/>} />
          <Route path="beer/:id" element={<Beer/>} />
          <Route path="*" element={<NoPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
