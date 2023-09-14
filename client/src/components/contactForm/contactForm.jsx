import React, { useState } from "react";


const ContactForm = () => {

    const [state, setState] = useState({
        nombre: "",
        apellido: "",
        email: "",
        consulta: ""
    })

    const baseUrl = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

    const sendEmail = async () => {
        let dataSend = {
            nombre: state.nombre,
            apellido: state.apellido,
            email: state.email,
            consulta: state.consulta
        }

        const res = await fetch(`${baseUrl}/email/sendEmail`,{
            method: "POST",
            body: JSON.stringify(dataSend),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })
        .then((res)=>{
            console.log(res);
            if(res.status > 199 && res.status < 300 ){
                alert ("Email sent succesfully")
            }
        })
    }

    const handleInput = (e) => {
        const { name, value } = e.target;
        setState((prevProps) => ({
            ...prevProps,
            [name]: value
        }));
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(state);
        await sendEmail();
    }


    return (
        <div >
        <div>
            <form onSubmit={handleSubmit} >
                <div >
                    <label >Nombre: </label> <br />
                    <input type="text" name="nombre" value={state.nombre} onChange={handleInput}  />
                </div>
                <div >
                    <label >Apellido: </label> <br />
                    <input type="text" name="apellido" value={state.apellido} onChange={handleInput}  />
                </div>
                <div >
                    <label >Correo electronico: </label> <br />
                    <input type="email" name="email" value={state.email} onChange={handleInput}  />
                </div>
                <div >
                    <label >Por favor detalle una breve <br /> descripcion de su consulta:</label> <br />
                    <textarea
                        name="consulta"
                        value={state.consulta}
                        onChange={handleInput}
                                                 
                    />
                </div>
                <div >
                    <label ></label>
                    <button type="submit">Enviar</button>
                </div>
            </form>
        </div>        
        </div>
    )
}

export default ContactForm;