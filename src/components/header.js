import React, {Component} from "react";
import Ilustration from "../imgs/trabajo-remoto.svg";
import Form from "./contact.from";

class Header extends Component {
    render(){
        return (
            <header className="bg-gray-300">
                <div className="container mx-auto p-12 max-w-4xl">
                    <div className="flex justify-center items-center">


                        <div className="flex-1">
                            <h1 className="font-bold text-pink-700 text-5xl">¡Hola! Soy Yesme</h1>
                            <p className="text-xl font-light">Soy Desarrolladora Web Frond End</p>
                        </div>

                        <img src={Ilustration} alt="Home Office"></img>
                    </div>
                    <div>
                        <Form/>
                    </div>
                </div>


            </header>
        );
    }
}

export default Header;