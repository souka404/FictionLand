
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { DeleteNovelAction } from "../config/actions";

function NovelList() {
    const novels = useSelector(state => state.novels)
    console.log(novels);
    const dispatch = useDispatch()
    const handleDelete = (id) =>   {
        dispatch(DeleteNovelAction(id))
    }
    return (
        <div>
            <p>
                <Link to="/add-novel" >
                    <button>
                        Add novel
                    </button>
                </Link>
            </p><br />
            <div className="novels">
                {novels.map((novel, index) => {
                    return (
                      <>
                        <div key={index}>
                          <p>id: {novel.id}</p>
                          <p>title: {novel.title}</p>
                          <p>descreption: {novel.description}</p>
                          <p>genre: {novel.genre}</p>
                          <div>
                            <Link to={`/update-novel/${novel.id}`}>
                              <button>Update</button>
                            </Link>

                            <button
                              className="button-1" onClick={() => handleDelete(novel.id)}
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                        <br />
                      </>
                    );
                })}
            </div>
        </div>
    )
}
export default NovelList;
