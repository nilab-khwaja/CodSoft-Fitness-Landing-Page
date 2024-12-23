import React, { useState } from "react";

function Reservation() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [service, setService] = useState("");
    const [date, setDate] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the reservation logic here
        console.log("Reservation made for", name, email, service, date);
    };

    return (
        <section className="reservation" id="reservation">
            <div className="reservation-container">
                <h2>Reserve Your Spot</h2>
                <p>Book a personal training session, a class, or a consultation with our experts!</p>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your full name"
                        required
                    />
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                    />
                    <select
                        id="service"
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        required
                    >
                        <option value="">Select a service</option>
                        <option value="personal-training">Personal Training</option>
                        <option value="group-class">Group Class</option>
                        <option value="nutrition-consult">Nutrition Consultation</option>
                    </select>
                    <input
                        type="date"
                        id="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                    />

                    <button type="submit">Reserve Now</button>
                </form>
            </div>
        </section>
    );
}

export default Reservation;
