"use client"

import { useRouter } from 'next/navigation'
import React, { useState} from 'react'
import { baseUrl } from '../{models}/constants';

const TicketForm = ({ editMode = false, updateTicket = null}) => {
    const router = useRouter();
    const ticketData = {
        title: '',
        description: '',
        category: 'Hardware Problem',
        priority: 1,
        progress: 0,
        status: 'open'
    }

    const handleChange = (event) => {
        const value = event.target.value;
        console.log(value, event.target.id);
        setTicket({
            ...ticket,
            [event.target.id]: value
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        if (editMode) {
            console.log('updating ticket');
            fetch(baseUrl +`/api/tickets/${updateTicket._id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(ticket)
            })
            .then((res) => {
                router.refresh();
                router.push('/');
            })
            .catch((error) => {
                console.log(error);
                router.refresh();
                // router.push('/');
            })
        }
        else {
            const newTicket = {
                ...ticket
            }
            fetch(baseUrl +'/api/tickets', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newTicket)
            })
            .then((res) => {
                console.log(res);
                router.refresh();
                router.push('/');
            })
            .catch((error) => {
                console.log(error);
            })
        }
    }

    const [ticket, setTicket] = useState(editMode? updateTicket: ticketData);
    return (
        <div className=' flex justify-center'>
            <form className=' flex flex-col lg:w-1/3 w-3/4 gap-3' method='POST' onSubmit={handleSubmit}>
                <h3 className=' text-slate-100 text-center'>Create Ticket</h3>
                <input type="text" id='title' placeholder='Title' onChange={handleChange} value={ticket?.title} required />
                <textarea type="text" id='description' placeholder='Description' onChange={handleChange} value={ticket?.description} rows={3} required />
                <label className=' text-slate-300' htmlFor='category'>Category</label>
                <select id='category' onChange={handleChange} value={ticket?.category} required>
                    <option value="Hardware Problem">Hardware Problem</option>
                    <option value="Software Problem">Software Problem</option>
                    <option value="Hardware Problem">Hardware Problem</option>
                    <option value="Other">Other</option>
                </select>
                <label className=' text-slate-300' htmlFor='priority'>Priority</label>
                <select id='priority' onChange={handleChange} value={ticket?.priority} required>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <label className=' text-slate-300' htmlFor='progress'>Progress <span className=' bg-card rounded p-1' style={{color: ticket.progress > 50 ? 'green' : 'red'}}>{ticket.progress}</span></label>
                <input type="range" id='progress' onChange={handleChange} value={ticket?.progress} min="0" max="100" step={10} required />

                <label className=' text-slate-300' htmlFor='status'>Status</label>
                <select id='status' onChange={handleChange} value={ticket?.status} required>
                    <option value="open">Open</option>
                    <option value="in-progress">In Progress</option>
                    <option value="closed">Closed</option>
                </select>
                {editMode && <input type="submit" value="Update Ticket" className=' btn' />}
                {!editMode && <input type="submit" value="Create Ticket" className=' btn' />}
            </form>
        </div>
    )
}

export default TicketForm
