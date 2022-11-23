// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import AuthService from "../services/auth.service";
// import axios from "axios";
// const ClickToBuy = () => {
//   const navigate = useNavigate();
//   const [homes, setHomes] = useState([]);
//   const [checkAdmin,setCheckAdmin] = useState(false);
//   const checkUser = () => {
//     const user = AuthService.getCurrentUser();
//     if (user) {
//         if(user.rols === "ROLE_ADMIN")
//         {
//             setCheckAdmin(true)
//         }
//         else{
//             setCheckAdmin(false)
//         }
//     } else {
//       navigate("/loginmsg");
//     }
//   }
//   const loadhomes = async () => {
//     await axios.get("http://localhost:8080/api/home").then(res=>setHomes(res.data));
//   };
  

//   return (
//     <div>
//         {checkUser}
//         {checkAdmin ?
//         (<button className="bg-blue-600 rounded-md text-white h-10 w-32" onClick={deleteHome}>
//           Delete
//         </button>) :
//         (<button className="bg-blue-600 rounded-md text-white h-10 w-32">
//         Click To Buy
//       </button>)}
//     </div>
//   );
// };

// export default ClickToBuy;
