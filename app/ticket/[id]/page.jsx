import TicketForm from "@/app/(component)/ticketForm";
import React from "react";

const getTicketData = async (id) => {
  const res = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
    cache: "no-store",
  });
  console.log(
    "resssssssssssssssssssssssssssssssssssssssssssssssssssss",
    !res.ok
  );
  if (!res.ok) {
    throw new Error("failed to update fetch");
  }

  return res.json();
};

const Ticket = async ({ params }) => {
  const EditTicket = params.id === "new" ? false : true;
  let updateTicketData = {};
  if (EditTicket) {
    updateTicketData = await getTicketData(params.id);
    updateTicketData = updateTicketData.foundTicket;
    console.log("updateTicketDatadddddddddddddddddddd", updateTicketData);
  } else {
    updateTicketData = {
      _id: "new",
    };
  }

  return (
    <div>
      <TicketForm ticket={updateTicketData} />
    </div>
  );
};

export default Ticket;
