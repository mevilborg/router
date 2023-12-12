import { useState } from 'react';
import ReactModal from 'react-modal';

const Addmovie =({addM})=>
{
    const [show,setShow]=useState(false)
    const [title,setTitle]=useState()
    const [img,setImg]=useState()
    const [desc,setDesc]=useState()
    const [rating,setRating]=useState()
    

    const handelShow =()=>{
        setShow(!show)
    }
    const handleAddMovie=()=>{
        let newMovie={title,img,desc,rating}
        addM(newMovie)
        handelShow()

    }
    return(
        <>
        <div className="button-container">
          <button onClick={handelShow}>Add Movie</button>
        </div>
        <ReactModal className="modal"
        isOpen={show}>
<button onClick={handelShow} className="close-btn">X</button>
<label htmlFor="title">Movie Title:</label>
        <input
          type="text"
          id="title"
          onChange={(event)=>setTitle(event.target.value)}
          
        />
        <label htmlFor="imgUrl">Image URL:</label>
        <input
          type="url"
          id="imgUrl"
          onChange={(event)=>setImg(event.target.value)}
         
        />
        <label htmlFor="desc">Description:</label>
        <input
          type="text"
          id="desc"
          onChange={(event)=>setDesc(event.target.value)}
         
        />
        <label htmlFor="rating">Rating:</label>
        <input
          type="text"
          id="rating"
          onChange={(event)=>setRating(event.target.value)}
        />
        <button onClick={handleAddMovie} className="submit-btn">
            Submit
        </button>
        </ReactModal>
        </>
    )
}
export default Addmovie