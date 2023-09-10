/** @format */
import { db } from "@/_data/db";

async function getTickets() {
  try {
    const res = await fetch("http://localhost:4000/tickets", {
      next: {
        revalidate: 30,
      },
    });
    return res.json;
  } catch (error) {
    return db.tickets;
  }
}

const TicketList = async () => {
  const tickets = await getTickets();
  return (
    <div>
      {Array.isArray(tickets) ? (
        tickets.map((ticket) => (
          <div className="card my-5">
            {ticket.id}
            <h3>{ticket.title} gggg </h3>
            <p>{ticket.body.slice(0, 200)}... </p>
            <div className={`pill ${ticket.priority}`}>
              {ticket.priority} priority
            </div>
          </div>
        ))
      ) : (
        <p className="text-center">There is no open Ticket</p>
      )}
    </div>
  );
};
export default TicketList;
