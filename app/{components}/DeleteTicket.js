"use client"

import { faX } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { baseUrl } from "../{models}/constants"

const DeleteTicket =  ({ id }) => {
  const [showConfirm, setShowConfirm] = useState(false);
  const router = useRouter();

  const deleteThisTicket = async () => {
    const res = await fetch(baseUrl +`/api/tickets/${id}`, {
      method: 'DELETE'
    })
    if (res.ok) {
      router.refresh();
    }
  }
  return (
    
    <div>
      <FontAwesomeIcon icon={faX} className=" text-red-400 hover:cursor-pointer hover:text-red-200" onClick={()=>setShowConfirm(true)}/>
      <dialog open={showConfirm} className=" p-4 rounded-lg m-auto">
        <p>Are you sure you want to delete this ticket?</p>
        <div className=" flex justify-evenly mt-2">
          <button onClick={deleteThisTicket} className=" text-red-50 bg-red-500 px-3 py-2 rounded-lg hover:text-red-500 hover:bg-slate-100 border border-transparent hover:border-red-500 transition-all">Yes</button>
          <button className=" text-red-50 bg-gray-500 px-3 py-2 rounded-lg hover:text-gray-500 hover:bg-slate-100 border border-transparent hover:border-gray-500 transition-all" onClick={()=>setShowConfirm(false)}>No</button>
        </div>
      </dialog>
    </div>
  )
}

export default DeleteTicket