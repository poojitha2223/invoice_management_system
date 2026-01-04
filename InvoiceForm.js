import api from "./api";
export default function InvoiceForm(){
 const s=e=>{
  e.preventDefault();
  api.post("/invoices",{
   invoiceNumber:e.target.invoiceNumber.value,
   clientName:e.target.clientName.value,
   date:e.target.date.value,
   amount:e.target.amount.value,
   status:e.target.status.value
  });
 };
 return(<form onSubmit={s}>
 <input name="invoiceNumber"/>
 <input name="clientName"/>
 <input name="date" type="date"/>
 <input name="amount"/>
 <select name="status">
  <option>Paid</option>
  <option>Unpaid</option>
  <option>Pending</option>
 </select>
 <button>Save</button></form>);
}