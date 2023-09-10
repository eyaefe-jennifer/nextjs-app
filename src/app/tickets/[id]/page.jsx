/** @format */
async function getTicket(id) {
  const res = await fetch("http://localhost:4000/tickets/" + id, {
    next: {
      revalidate: 60,
    },
  });

  return res.json;
}
const TicketDetails = async ({ params }) => {
  const ticket = await getTicket(params.id);
  return (
    <div>
      <nav>
        <h2>Ticket Details</h2>
      </nav>
      <div className="card">
        <h2>{ticket.title} </h2>
        <small>{ticket.user_email} </small>
        <div className={`pill ${ticket.priority}`}>
          {ticket.priority} priority
        </div>
      </div>
    </div>
  );
};
export default TicketDetails;
