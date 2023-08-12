import {Route, Routes} from "react-router";
import App from "./App";
import MinNFT from "./pages/MinNFT.page/MinNFT.page";
import Welcome from "./pages/Welcome.page/Welcome.page";
import Result from "./pages/Result.page/Result.page";



const Router = ()=>{
    return (
           <Routes>
               <Route path="/*" element={<App/>}>
                   <Route path='minNft' element = {<MinNFT />} />
                   <Route path='welcome' element={<Welcome />} />
                   <Route path='result' element = {<Result />} />
               </Route>
           </Routes>
    )
}


export default Router