import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/home"
import Restaurant from "./pages/restaurant"
import Cart from "./pages/cart"

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurant" element={<Restaurant />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
    </BrowserRouter>
    
  )
}

export default App