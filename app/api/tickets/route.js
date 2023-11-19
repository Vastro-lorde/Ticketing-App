import Ticket from "../../{models}/TicketModel";
import { NextResponse as res  } from "next/server";

export async function POST (request) {
    try {
        const { title, description, category, priority, progress, status } = await request.json();
        const newTicket = new Ticket({
            title,
            description,
            category,
            priority,
            progress,
            status
        });
        await newTicket.save();
        return res.json({
            success: true,
            ticket: newTicket
        }, {
            status: 201
        });
    } catch (error) {
        return res.json({
            success: false,
            error: error
        }, {
            status: 500
        })
    }
    
}

export async function GET (request) {
    try {
        const tickets = await Ticket.find();
        return res.json({
            success: true,
            tickets
        }, {
            status: 200
        });
    } catch (error) {
        return res.json({
            success: false,
            error: error
        }, {
            status: 500
        })
    }
}

