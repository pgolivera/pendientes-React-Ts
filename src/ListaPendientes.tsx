import { Pendiente } from "./components/Pendientes";

type PendientesProps = {
    listaPendientes: string[];
    borrarPendientes: (index:number) => void;
}

export const ListaPendientes = ({listaPendientes, borrarPendientes}: PendientesProps) => {
    return (
        <div className="taskList">
            {listaPendientes.map((pendiente, index) => (

                <Pendiente key={index} pendiente={pendiente} borrarPendiente={() => borrarPendientes(index)}></Pendiente>

                )
            )}
        </div>
    )
}