import { useParams } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { UpdateNovelAction } from "../config/actions";
function Updatenovel(){
    const {id}=useParams()
    const novel = useSelector(data=> data.novels.find((u)=>u.id===parseInt(id)))

    const [title, setTitle] = useState(novel ? novel.title : "");
    const [description, setDescription] = useState(novel ? novel.description : "");
    const [genre, setGenre] = useState(novel ? novel.genre : "");

    const dispatch = useDispatch()
    const navigate = useNavigate()
const handleClick = () =>  {
    dispatch(UpdateNovelAction({
        id: id,
        title: title,
        description: description,
        type: novel.type  
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
          <button onClick={handleClick}>Enregistrer</button>
        </form>
      )

}
export default Updatenovel;