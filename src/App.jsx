import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import MentionsLegales from "./pages/MentionsLegales.jsx";
import {ToastContainer} from "react-toastify";
import Confidentialite from "./pages/Confidentialite.jsx";
import PlanSite from "./pages/PlanSite.jsx";

function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<Home />}>
                <Route path={"/mentions-legales"} element={<MentionsLegales />} />
                <Route path={"/confidentialite"} element={<Confidentialite />} />
                <Route path={"/plan-du-site"} element={<PlanSite />} />
            </Route>
        </Routes>

        <ToastContainer />
    </BrowserRouter>
  )
}

export default App
