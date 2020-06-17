import React, { Component } from "react"
// import Form from "./contact.from"
import Wave from "./wave"

class Header extends Component {
  render() {
    return (
      <header className="bg-gray-300">
        <div className="container mx-auto p-6 max-w-4xl ">
          <div className="flex justify-center items-center container-header">
            <div className="flex-1 text-header">
              <h1 className="font-bold text-pink-700 text-5xl">
                ¡Hola! Soy Yesme
              </h1>
              <p className="text-xl font-light">
                Soy Ingeniera en Computación, enfocada al desarrollo web.
              </p>
            </div>

            <img
              src="images/trabajo-remoto.svg"
              alt="Home Office"
              className="image-header"
            ></img>
          </div>
          {/* <div>
            <Form />
          </div> */}
        </div>
        <Wave />
      </header>
    )
  }
}

export default Header
