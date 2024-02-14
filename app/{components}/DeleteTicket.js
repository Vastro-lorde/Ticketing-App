// "use client"

// import { faX } from "@fortawesome/free-solid-svg-icons"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { useRouter } from "next/navigation"
// import { useState } from "react"
// import { baseUrl } from "../{models}/constants"

// const DeleteTicket =  ({ id }) => {
//   const [showConfirm, setShowConfirm] = useState(false);
//   const router = useRouter();

//   const deleteThisTicket = async () => {
//     const res = await fetch(baseUrl +`/api/tickets/${id}`, {
//       method: 'DELETE'
//     })
//     if (res.ok) {
//       router.refresh();
//     }
//   }
//   return (
    
//     <div>
//       <FontAwesomeIcon icon={faX} className=" text-red-400 hover:cursor-pointer hover:text-red-200" onClick={()=>setShowConfirm(true)}/>
//       <dialog open={showConfirm} className=" p-4 rounded-lg m-auto">
//         <p>Are you sure you want to delete this ticket?</p>
//         <div className=" flex justify-evenly mt-2">
//           <button onClick={deleteThisTicket} className=" text-red-50 bg-red-500 px-3 py-2 rounded-lg hover:text-red-500 hover:bg-slate-100 border border-transparent hover:border-red-500 transition-all">Yes</button>
//           <button className=" text-red-50 bg-gray-500 px-3 py-2 rounded-lg hover:text-gray-500 hover:bg-slate-100 border border-transparent hover:border-gray-500 transition-all" onClick={()=>setShowConfirm(false)}>No</button>
//         </div>
//       </dialog>
//     </div>
//   )
// }

// export default DeleteTicket
"use client"
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { baseUrl } from "../{models}/constants";

const DeleteTicket = ({ id }) => {
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();

  const deleteThisTicket = async () => {
    setLoading(true);
    setError(null); // Clear any previous errors

    try {
      const res = await fetch(baseUrl + `/api/tickets/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        router.refresh();
      } else {
        const errorData = await res.json();
        setError(errorData.message || "Failed to delete ticket");
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <FontAwesomeIcon
        icon={faX}
        className="text-red-400 hover:cursor-pointer hover:text-red-200"
        onClick={() => setShowConfirm(true)}
      />
      <dialog open={showConfirm} className="p-4 rounded-lg m-auto">
          {loading && <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>}
          {error && <p className="text-red-500">{error}</p>}
        <p>Are you sure you want to delete this ticket?</p>
        <div className="flex justify-evenly mt-2">
          <button
            onClick={deleteThisTicket}
            disabled={loading}
            className="text-red-50 bg-red-500 px-3 py-2 rounded-lg hover:text-red-500 hover:bg-slate-100 border border-transparent hover:border-red-500 transition-all"
          >
            Yes
          </button>
          <button
            className="text-red-50 bg-gray-500 px-3 py-2 rounded-lg hover:text-gray-500 hover:bg-slate-100 border border-transparent hover:border-gray-500 transition-all"
            onClick={() => setShowConfirm(false)}
          >
            No
          </button>
        </div>
      </dialog>
    </div>
  );
};

export default DeleteTicket;
