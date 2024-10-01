type TareaProps = {
    pendiente: string;
    borrarPendiente: () => void;

}

export const Pendiente = ({pendiente, borrarPendiente}: TareaProps) => {
    return (
        <div className="task">
            <span>{pendiente}</span>
            <button onClick={borrarPendiente}>Done!</button>
        </div>
    )
}