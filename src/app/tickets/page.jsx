/** @format */

import TicketList from "./TicketList";

const Tickets = () => {
  return (
    <div>
      <nav>
        <div className="">
          <h2>Tickets</h2>
          <p>
            <small>currently open tickets</small>
          </p>
        </div>
      </nav>
      <TicketList />
    </div>
  );
};
export default Tickets;
