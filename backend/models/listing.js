const mongoose = require("mongoose");
const schema = mongoose.Schema;

const listingSchema = new schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    dimensions: String,
    images: {
        type: [String],
        default: ["https://images.unsplash.com/vector-1756301726355-6e695b181820?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
        set: (v) => 
            v === "" 
            ? "https://images.unsplash.com/vector-1756301726355-6e695b181820?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            : v,
    },
    pricing: {
        baseprice: Number,
        perDay: Number,
        perMonth: Number
    },
    location: {
        country: String,
        district: String,
        city: String,
        area: String,
        coordinates: {
            lat: Number,
            lng: Number
        }
    },
    category: String,
    type: String,
    availability: [
        {
            from: Date,
            to: Date,
            bookedBy: String
        }
    ],
    UIB: {
        type: String,
        required: true,
    },
    status: {
        type:String,
        enum: ["active", "blocked", "maintenance"],
        default: "active"
    }
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;


