import TicketForm from "@/app/{components}/TicketForm";
import { baseUrl } from "@/app/{models}/constants";

const getTicket = async (id) => {
    const res = await fetch(baseUrl +`/api/tickets/${id}`, {
        cache: 'no-store'
    });
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    const data = await res.json()
    return data;
}

const TicketPage = async ({params}) => {
    const editMode = params.id !== 'new';
    if (editMode) {
        const { ticket } = await getTicket(params.id);

        return (
            <div>
                <TicketForm editMode={editMode} updateTicket={ticket}/>
            </div>
        )
    }
    return (
        <div>
            <TicketForm/>
        </div>
    )
}

export default TicketPage
