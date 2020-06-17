import React from "react"
import Header from "../components/header"
import Repos from "../components/repos"
//import CodigoFacilito from "../components/codigofacilito"
//import Medium from "../components/medium.js";
import EdNav from "../components/education-nav"
// import Wave from "../components/wave"
import Footer from "../components/footer"

export default () => (
  <div className="app">
    <Header />
    {/* <Wave /> */}
    <EdNav />
    <Repos />
    <Footer />
    {/* <CodigoFacilito/> */}
    {/* <Medium/> */}
  </div>
)
