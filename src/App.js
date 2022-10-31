import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import ContactPage from "./pages/ContactPage/ContactPage";
import HelpPage from "./pages/HelpPage/HelpPage"
import {Route, Routes } from "react-router-dom"
import Footer from "./components/Footer/Footer";

function App () {
    return (
    <>
        <Navbar />
        <div className="container">
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/help" element={<HelpPage />}/>
                <Route path="/contact" element={<ContactPage />}/>
            </Routes>
        </div>
        <Footer />
    </>
    )
}

export default App;
