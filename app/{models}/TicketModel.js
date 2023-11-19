import mongoose, { Schema } from "mongoose";
import mongodb from "./db";

await mongodb()

const ticketModel = new Schema({
    title : {
        type: String, 
        required: true
    },
    description : {
        type: String, 
        required: true
    },
    category : {
        type: String, 
        required: true
    },
    priority: {
        type: Number, 
        required: true,
        default: 0
    },
    progress : {
        type: Number, 
        required: true,
        default: 0
    },
    status : {
        type: String,
        required: true,
        default: "Open"
    },
    active : {
        type: Boolean,
        required: true,
        default: true
    }
}, {
    timestamps: true
});

const Ticket = mongoose.models.Ticket || mongoose.model("Ticket", ticketModel);

export default Ticket;