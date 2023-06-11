// function ListGroup() {
//   let items = ["New York", "Bombay", "Delhi", "Mecca", "Gurgaon"];
// //   items=[];
     
//   const message =  items.length === 0 && <p> No Items found</p>
//   return (
//     <div>
//       <h1>List</h1>
//       {message}
//       <ul className="list-group">
//         {items.map((item) => (
//           <li onClick={()=>console.log('Items clicked')}key={item} className="list-group-item">
//             {item}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

function ListGroup(){
   let items=[
      "delhi",
      "Mumbai",
      "Goa",
      "Hyderabad"
   ]
   

   return (
     <>
       <h1> Items</h1>
       <ul className="list-group">
         {items.map((item) => (
           <li className="list-group-item">{item}</li>
         ))}
       </ul>
     </>
   );
}

export default ListGroup;
