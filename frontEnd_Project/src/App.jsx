import "./App.css";

import Homepage from "./Component/HomePage/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Drinkpage from "./Component/DrinkPage/Drinkpage";
import Clubpage from "./Component/ClubPage/Clubpage";
import Payment from "./Component/Cart/Payment";
import ContactPage from "./Component/Contact/ContactPage";
import Warper from "./Component/ShareComponent/Warper";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Warper>
                <Homepage />
              </Warper>
            }
          />
          <Route
            path="/drink"
            element={
              <Warper>
                <Drinkpage />
              </Warper>
            }
          />
          <Route
            path="/club"
            element={
              <Warper isDark>
                <Clubpage />
              </Warper>
            }
          />
          <Route
            path="/cart"
            element={
              <Warper>
                <Payment />
              </Warper>
            }
          />
          <Route
            path="/contact"
            element={
              <Warper>
                <ContactPage />
              </Warper>
            }
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
