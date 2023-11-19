
import TicketCard from './{components}/TicketCard'
import { baseUrl } from './{models}/constants';

const getTickets = async () => {
  try {
    const res = await fetch(baseUrl +'/api/tickets', {
      cache: 'no-store'
    })
    const data = await res.json();
    return data
  } catch (error) {
    console.log(error)
  }
}

export default async function Home() {
  const result = await getTickets();
  const tickets = result?.tickets;
  const uniqueCategories = [...new Set(tickets?.map((ticket) => ticket.category))];
  return (
    <div className=' p-5'>
      <div>
        <p>Total Tickets: {tickets?.length}</p>
        {tickets && uniqueCategories?.map((category, index) => (
          <div key={index}>
            <p className=' m-2'><span  className=' bg-card cursor-pointer inline-block rounded-full px-2 py-1 text-xs font-semibold text-slate-300'>{category}</span>
           </p>
           <div className=' lg:grid grid-cols-3 xl:grid-cols-4'>
              {tickets?.filter((ticket) => ticket.category === category)?.map((uniqueTicket, index) => (
                <TicketCard key={index} ticket={uniqueTicket} />
              ))}
            </div>
           
          </div>
        ))}
      </div>
      
    </div>
  )
} 
