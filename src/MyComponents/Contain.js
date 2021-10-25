import React from 'react';
import {MinCont} from "./MinCont";

export const Contain = (props) => {
    let myStyle = {
        minHeight: "100vh",
        margin: "40px auto"
    }
    let empty = {
        color: "red",
    }
    return (
        <div className="container my-3" style={myStyle}>
            <h3 className="my-3">Contain Works!!!</h3>
            <h6 className="my-1" style={empty}>
            {props.contains.length === 0? "No Contain To Display":
            props.contains.map((contain) => {
                return (<MinCont contain={contain} key={contain.sno} onDelete={props.onDelete} />)
            })
            }
            </h6>
        </div>
    )
} 
