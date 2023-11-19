import Link from "next/link"
import DeleteTicket from "./DeleteTicket"
import Priority from "./Priority"
import ProgressDisplay from "./ProgressDisplay"
import StatusDisplay from "./StatusDisplay"


const TicketCard = ({ ticket }) => {
    return (
        <div className=" flex flex-col bg-card border border-transparent hover:border hover:border-card-hover rounded-md shadow-lg p-3 m-2">
            <div className=" flex mb-3">
                <Priority priority={ticket.priority}/>
                <div className=" ml-auto">
                    <DeleteTicket id={ticket._id}/>
                </div>
            </div>
            <Link href={`/TicketPage/${ticket._id}`}>
                <h4>{ticket.title}</h4>
                <hr className=" h-px border-0 bg-page mb-2"/>
                <p className=" whitespace-pre-wrap text-xs">{ticket.description}</p>
                <div className=" flex-grow"></div>
                <div className=" flex mt-2 ">
                    <div className=" flex flex-col">
                        <p className=" text-xs my-1">{ new Date(ticket.createdAt).toUTCString()}</p>
                        <ProgressDisplay progress={ticket.progress}/>
                    </div>
                    <div className=" ml-auto flex items-end">
                        <StatusDisplay status={ticket.status}/>
                    </div>
                    
                </div>
            </Link>
        </div>
    )
}

export default TicketCard
