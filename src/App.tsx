import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import SaibaMaisPage from "./pages/SaibaMaisPage";

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/saiba-mais" element={<SaibaMaisPage />} />
            </Routes>
        </Router>
    );
};

export default App;
