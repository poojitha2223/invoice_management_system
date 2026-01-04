import api from "./api";
import {useNavigate} from "react-router-dom";
export default function Login(){
 const n=useNavigate();
 const s=async e=>{
  e.preventDefault();
  const r=await api.post("/auth/login",{
   email:e.target.email.value,
   password:e.target.password.value
  });
  localStorage.setItem("token",r.data.token);
  n("/home");
 };
 return(<form onSubmit={s}>
 <input name="email" placeholder="Email"/>
 <input name="password" type="password" placeholder="Password"/>
 <button>Login</button></form>);
}