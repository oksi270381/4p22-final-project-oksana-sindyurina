import "./App.css";
import Callback from './Pages/PageCallback/Callback';
import PageProduct from './Pages/PageProduct/PageProduct';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Home from "./Pages/Home/Home";
import OneProduct from "./Pages/OneProduct/OneProduct";

function App() {
  return (
    <Router basename="4p22-final-project-oksana-sindyurina">
      <Routes>
          <Route index path={'/'} element={<PageProduct />} />
          <Route path='Home' element={<Home />} />
          <Route path='Callback' element={<Callback />} />
          <Route path='OneProduct'>
            <Route path=':userId' element={<OneProduct />} />
          </Route>
      </Routes>
    </Router>
  );
}

export default App;