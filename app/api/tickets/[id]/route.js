import Ticket from "../../../{models}/TicketModel";
import { NextResponse as res  } from "next/server";

export async function DELETE (request, { params: { id } }) {
    try {
        await Ticket.findByIdAndDelete(id);
        return res.json({
            success: true
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

export async function PATCH (request, { params: { id } }) {
    try {

        const { title, description, category, priority, progress, status } = await request.json();
        const updatedTicket = await Ticket.findByIdAndUpdate(id, {
            title,
            description,
            category,
            priority,
            progress,
            status
        }, {
            new: true
        });
        return res.json({
            success: true,
            ticket: updatedTicket
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

export async function GET (request, { params: { id } }) {
    try {
        const ticket = await Ticket.findById(id);
        if (!ticket) {
            return res.json({
                success: false,
                error: "Ticket not found"
            }, {
                status: 404
            });
            
        }
        return res.json({
            success: true,
            ticket
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