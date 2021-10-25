import React, { useState } from 'react'; 

export const AddContain = ({addContain}) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit  = (e) => {
        e.preventDefault();
        if(!title || !desc){
            alert("Title Or Description Cannot Be Blank")
        }
        else {
            addContain(title, desc);
            setTitle("");
            setDesc("");
        }
        
    }
    return (
        <div className="container my-3">
            <h3>Add a Contain</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Contain Title</label>
                    <input type="text" value={title} onChange={(e) => {setTitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Contain Description</label>
                    <input type="text" value={desc} onChange={(e) => {setDesc(e.target.value)}} className="form-control" id="exampleInputPassword1" />
                </div>
                    <button type="submit" className="btn btn-sm btn-outline-success">Add Contain</button>
            </form>
        </div>
    )
}
