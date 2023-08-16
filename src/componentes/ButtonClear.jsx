/* eslint-disable react/prop-types */
import "../estilos/buttonClear.css"

function ButtonClear(props){
    return(
        <div className="boton-clear" onClick={props.manejarClear}>
            {props.children}
        </div>
    )
}

export default ButtonClear;