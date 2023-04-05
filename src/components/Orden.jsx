import React from "react";
import '@styles/OrdenItem.scss'

const Orden = () => {
    return (
        <div className="banner">
            <div className="information">
                <p>21-02-2023</p>
                <p>5 árticulos</p>
            </div>
            <div className="total">
                <p>$2,500</p>
            </div>
        </div>

    );
}

export default Orden;