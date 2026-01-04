import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Home from "./Home";
import InvoiceForm from "./InvoiceForm";
export default function App(){
 return(<BrowserRouter><Routes>
 <Route path="/" element={<Login/>}/>
 <Route path="/signup" element={<Signup/>}/>
 <Route path="/home" element={<Home/>}/>
 <Route path="/invoice" element={<InvoiceForm/>}/>
 </Routes></BrowserRouter>);
}