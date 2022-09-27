
import React, { useState } from 'react'
import './Blog.css'

function Blog() {

    const [state, setstate] = useState([]);
    const [data, setData] = useState([])

    const input_change = (e) => {
        var name = e.target.name;
        var value = e.target.value;
        setstate(values => ({ ...values, [name]: value }))
        
    }
    
const input_changeimg = (e) => {
    setstate(values => ({ ...values, image: URL.createObjectURL(e.target.files[0]) }));

}

    const submitBtn = (e) => {
        e.preventDefault()
        setData(prev => [...prev, state])
        console.log(" that is state from the array ===", data);
        setstate("");
    }
   
    return (
        <>
            <div>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container text-center">
                        <form className="form-container">
                            <h1>Blog Post</h1><br />
                            <input type="text" onChange={input_change} value={state.title || ''} placeholder="Enter Your Title" name="title" />
                            <input type="text" onChange={input_change} value={state.desc || ''} placeholder="Enter Desc" name="desc" />
                            <input type="file" onChange={input_changeimg} value={state.img || ''} name="img" />
                            <button type="submit" className="btn" onClick={submitBtn}>Add Blog</button>
                        </form>
                    </div>
                </div>
              
                <div className="container">
                    <div className="row">
                        {
                            data === null ? "" : data.map((e) => (
                                <div key={e.image} className="col-md-3 mb-3">
                                    <div key={e.image} className="card" style={{ width: '18rem' }}>
                                        <img className="card-img-top" src={e.image} alt="Card image cap" />
                                        <div className="card-body">
                                            <h5 className="card-title">{e.title}</h5>
                                            <p className="card-text">{e.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog


