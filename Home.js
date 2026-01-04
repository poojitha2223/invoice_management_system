import api from "./api";
import {useEffect,useState} from "react";
export default function Home(){
 const [d,s]=useState([]);
 useEffect(()=>{api.get("/invoices").then(r=>s(r.data));},[]);
 return(<div>{d.map(i=><div key={i.id}>{i.invoiceNumber}-{i.status}</div>)}</div>);
}