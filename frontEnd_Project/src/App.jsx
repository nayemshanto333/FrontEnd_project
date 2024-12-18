import "./App.css";
import Footer from "./Component/Footer";
import NavArea from "./Component/NavArea";
import Homepage from "./Component/HomePage/Homepage";
import  { BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import Drinkpage from "./Component/DrinkPage/Drinkpage";
import Clubpage from "./Component/ClubPage/Clubpage";

function App() {
  return (
    <>
      <Router>
        <NavArea />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/drink" element={<Drinkpage/>}/>
          <Route path="/club" element={<Clubpage/>}/>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
