import React from "react";

function CardPequeno(props) {
    return (
        <>
            <div className="smallCard-conteiner">
                <img src={props.img} />
                <p>e-mail:</p>
                <p>{props.email}</p>
            </div>
            <div className="smallCard-conteiner">
                <img src={props.img1} />
                <p>Endereço:</p>
                <p>{props.endereço}</p>
            </div>
        </>
    )
}

export default CardPequeno;