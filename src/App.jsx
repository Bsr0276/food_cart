import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Restaurant from "./pages/restaurant";
import Cart from "./pages/cart";
import Header from "./conponents/header";
import Footer from "./conponents/footer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getRestaurants } from "./redux/actions/restActions";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    //restoran verilerini api'den alıp store'a aktaracak aksiyonu tetikle
    dispatch(getRestaurants());
  }, []);

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/restaurant" element={<Restaurant />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
