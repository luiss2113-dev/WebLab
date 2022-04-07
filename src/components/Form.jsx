import React, { useState } from 'react'
import { setMedicamento } from '../data/medicamentos'
import Error from './Error'

const Form = ({ setllamarInfo, setErrorApi }) => {

    const [nombre, setNombre] = useState("")
    const [detalle, setDetalle] = useState("")
    const [precio, setPrecio] = useState("")
    const [error, seterror] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if ([nombre, detalle, precio].includes("")) {
            seterror(true)
            return;
        } 

        seterror(false)

        setMedicamento({ nombre, detalle, precio }, result => {
            if (result.status == 200) {
                setllamarInfo(true)
                console.log("Entramoossssss")
            } else {
                setErrorApi("Algo ha fallado, verifica si guardó la información")
            }
        })

        setNombre("")
        setPrecio("")
        setDetalle("")
    }

  return (
      <div className='mx-auto'>
        <h2 className="font-extrabold text-2xl text-center">
            ¡Crea un medicamento!
        </h2>
          <form
              onSubmit={handleSubmit}
              className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
              {error && <Error error={"Todos los campos son obligatorios"} key="error-form" />}
                <div className="mb-5 mt-5">
                    <label htmlFor="nombre" className="block text-gray-700 uppercase font-medium">Nombre del medicamento</label>
                    
                    <input id = "nombre" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        type={"text"}
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                        placeholder="Nombre del medicamento" />
                </div>

                <div className="mb-5">
                    <label htmlFor="precio" className="block text-gray-700 uppercase font-medium">precio del medicamento</label>
                    
                    <input id = "precio" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        type={"number"}
                        value={precio}
                        onChange={e => setPrecio(e.target.value)}
                        placeholder="Precio de venta" />
                </div>
              
              <div className="mb-5">
                    <label htmlFor="detalle" className="block text-gray-700 uppercase font-medium">Detalle del medicamento</label>
                    
                     <textarea
                        id="detalle"
                        value={detalle}
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                       onChange={e => setDetalle(e.target.value)}
                        placeholder="Describe el medicamento"
                    />
              </div>

               <input type={"submit"}
                    className="bg-gray-700 w-full p-3 text-white uppercase hover:bg-gray-800 font-bold cursor-pointer transition-all"
                    value={"Guardar"}
                />
        </form>
    </div>
  )
}

export default Form