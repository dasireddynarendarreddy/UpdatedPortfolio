import {Routes,Route} from "react-router-dom"
import App from "@/App"
import Gpt from "./Gpt"
function RouteComp()
{
    return(
        <>
             <Routes>
                <Route path="" element={<App/>}/>
                <Route path="assistant" element={<Gpt/>}/>
             </Routes>
        </>
    )
}
export default RouteComp