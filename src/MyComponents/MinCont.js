import React from 'react'

export const MinCont = ({contain, onDelete}) => {
    return (
        <>
        <div>
            <h4>{contain.title}</h4>
            <p>{contain.desc}</p>
            <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(contain)}}>
                Delete</button>
        </div>
        <hr/>
        </>
    )
}
 