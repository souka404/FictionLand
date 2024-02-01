import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AddNovelAction } from "../config/actions";

function Addnovel(){
    const count = useSelector(data=> data.novels.length)
    const [title,setTitle]=useState("")
    const [description,setDescription]=useState("")
    const [genre,setGenre]=useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()
const handleClick = () =>  {
    dispatch(AddNovelAction({
        id:count+1,
        title:title,
        description:description,
        genre:genre
    }))
    navigate('/')
}
return(
  <form>
    <label>Title : </label>
    <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/><br/><br/>
    <label>Description : </label>
    <textarea type="text" value={description} onChange={(e)=>setDescription(e.target.value)} /><br/><br/>
          
    <label>Genre : </label>
    <input type="text" value={genre} onChange={(e)=>setGenre(e.target.value)}/><br/><br/>
    <button onClick={handleClick}>Add</button>
  </form>
)
}
export default Addnovel;