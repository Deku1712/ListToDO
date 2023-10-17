import { useDispatch } from "react-redux"
import { setFitler } from "../redux/actions";


export const Filter=()=>{
    const dispatch = useDispatch();
    const handleFilter = (filtertype) => {
        console.log(filtertype)
        dispatch(setFitler(filtertype));
    }


    return(
        <div className="d-flex justify-content-evenly">
            <button className="btn btn-secondary" onClick={()=> handleFilter('ALL')}>ALL</button>
            <button className="btn btn-success" onClick={() => handleFilter('COMPLETED')}>COMPLETED</button>
            <button className="btn btn-warning" onClick={() => handleFilter('INCOMPLETED')}>INCOMPLETED</button>
        </div>
    )

}