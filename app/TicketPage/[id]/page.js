import TicketForm from "@/app/{components}/TicketForm"

const getTicket = async (id) => {
    const res = await fetch(`http://localhost:3000/api/tickets/${id}`, {
        cache: 'no-store'
    });
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    const data = await res.json()
    return data
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
