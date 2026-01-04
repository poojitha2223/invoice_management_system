import api from "./api";
import {useNavigate} from "react-router-dom";
export default function Signup(){
 const n=useNavigate();
 const s=async e=>{
  e.preventDefault();
  await api.post("/auth/signup",{
   name:e.target.name.value,
   email:e.target.email.value,
   password:e.target.password.value
  });
  n("/");
 };
 return(<form onSubmit={s}>
 <input name="name" placeholder="Name"/>
 <input name="email" placeholder="Email"/>
 <input name="password" type="password" placeholder="Password"/>
 <button>Signup</button></form>);
}