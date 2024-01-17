import { Routes, Route} from "react-router-dom";
import Calculator from "./Calculator";

export default function App(){
    return(
    <div className="App">
    <Routes>
      <Route path="/" element={<Calculator/>}/>
  
    </Routes>
    </div>
    );  
  }