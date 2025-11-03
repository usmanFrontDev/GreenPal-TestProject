import React from "react";
import ReactDOM from "react-dom/client";
import FirstPage from "./pages/FirstPage";
import SecondPage from "./pages/SecondPage";
import Header from "./components/Header";
import ThirdPage from "./pages/ThirdPage";
import FourthPage from "./pages/FourthPage";
import FifthPage from "./pages/FifthPage";
import SixthPage from "./pages/SixthPage";
import SeventhPage from "./pages/SeventhPage";
import Footer from "./components/Footer";

function LandingPage() {
  return (
    <div className="w-full">
      <Header />
   <FirstPage/>
      <SecondPage 
      company="Google" 
      reviewsProp="2,348" 
      rating="4.8"
       icon='https://cdn-icons-png.freepik.com/512/16509/16509564.png?ga=GA1.1.109328347.1753693542' />
        <ThirdPage 
      company="Reddit" 
      reviewsProp="2,848" 
      rating="4.9"
       icon='https://cdn-icons-png.freepik.com/512/13670/13670326.png?ga=GA1.1.109328347.1753693542' />
        <FourthPage 
      company="Trustpilot" 
      reviewsProp="1,848" 
      rating="4.9"
       icon='https://images.seeklogo.com/logo-png/63/1/trustpilot-icon-logo-png_seeklogo-638647.png' />

 <FifthPage 
      company="Facebook" 
      reviewsProp="2,342" 
      rating="4.9"
       icon=' https://cdn-icons-png.freepik.com/512/6846/6846678.png?ga=GA1.1.109328347.1753693542' />
      
      <SixthPage/>
      <SeventhPage/>
      <Footer/>
    </div>
  );
}

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  if (root) {
    ReactDOM.createRoot(root).render(<LandingPage />);
  }
});
