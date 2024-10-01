import { useState } from "react"
import { ListaPendientes } from "../ListaPendientes"

export const TodoApp = () => {

    const [nuevoPendiente, setNuevoPendiente] = useState<string>("")
    const [listaPendientes, setListaPendientes] = useState<string[]>([])
    
    
    const handleAddTask = () => {
        if(nuevoPendiente.trim()=== "") return
        setListaPendientes(pendienteAnterior => [...pendienteAnterior, nuevoPendiente])
        setNuevoPendiente("")
    }

    const handleBorrarPendiente = (index: number) => {
        setListaPendientes (pendientes => pendientes.filter((_,i ) => i !== index))
    }


    return(
    <div>

        <h1>Lista de pendientes</h1>
        <div>
            <input 

                type="text"
                value={nuevoPendiente}
                onChange={(e) => setNuevoPendiente(e.target.value)}
                placeholder="Nuevo pendiente"

             />

             <button onClick={handleAddTask}>Nuevo Pendiente</button>
        </div>

        <ListaPendientes listaPendientes={listaPendientes} borrarPendientes ={handleBorrarPendiente}></ListaPendientes>

    </div>)
}