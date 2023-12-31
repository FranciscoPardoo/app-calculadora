import "../estilos/button.css"

/* eslint-disable react/prop-types */
function Button(props){

    const esOperador = valor => {
        return isNaN(valor) && (valor != ".") && (valor != "=");
    }

    return(
        <div 
        className={`boton-contenedor ${esOperador(props.children) ? "operador" : null}`}
        onClick={() => props.manejarClic(props.children)}>
            {props.children}
        </div>
    )
}

export default Button;