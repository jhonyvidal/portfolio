import HashLoader from "react-spinners/HashLoader";
import "../../src/assets/css/customStyles.css";

const Loading = () =>{
    return(
        <div className="loader">
            <HashLoader color="#36d7b7" />
        </div>   
    )

}

export default Loading;