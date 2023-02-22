import React from "react";
import Navbar from "../components/navbar.component";
import Footer from "../components/footer.component";

const Feedpage = () => {
  return (
    <div className="bg-gradient-to-r from-[#090D0C] via-[#0A1312] to-[#0E2020] min-h-screen">
      <Navbar />
      <div className=" pt-[10vh]"></div>
      <Footer />
    </div>
  );
};

export default Feedpage
