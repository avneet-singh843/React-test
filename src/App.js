import "./App.css"
// importing routes
import { BrowserRouter, Routes, Route } from "react-router-dom";

// importing pages
import DashboardPage from "./pages/DashboardPage";
import MontagesPage from "./pages/MontagesPage";
import CreditsPage from "./pages/CreditsPage";

// importing components
import SideBarComponent from "./components/SideBarComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <HeaderComponent /> */}
        {/* <SideBarComponent /> */}

        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/montages" element={<MontagesPage />} />
          <Route path="/credits" element={<CreditsPage />} />
          <Route path="*" element="Page not exist error 404" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
