import React from "react";
import DeletBlock from "./deletBlock";
import PeriorityDisplay from "./prorityDisplay";
import ProgressDisplay from "./progressDisplay";
import SatausDisplay from "./satausDisplay";
import Link from "next/link";
function TicketCard({ ticket }) {
  const formatTimeStamp = (timeSpamp) => {
    const options = {
      year: "numeric",
      month: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      day: "2-digit",
      hour12: true,
    };
    const date = new Date(timeSpamp);
    const formatDate = date.toLocaleString(options);
    return formatDate;
  };
  return (
    <div className="p-3 m-2 rounded-md bg-card hover:bg-card-hover flex flex-col">
      <div className="flex mb-3">
        <PeriorityDisplay priority={ticket.priority} />
        <div className="ml-auto">
          <DeletBlock id={ticket._id} />
        </div>
      </div>
      <Link href={`/ticket/${ticket._id}`}>
        <h4>{ticket.title}</h4>
        <hr className="h-px border-0 bg-page mb-2" />
        <p className="whitespace-pre-wrap">{ticket.descripation}</p>
        <div className="flex-grow"></div>
        <div className="flex mt-2">
          <div className="flex flex-col">
            <p className="text-xs my-1">{formatTimeStamp(ticket.createdAt)}</p>
            <ProgressDisplay progress={ticket.progress} />
          </div>
          <div className="ml-auto flex items-end">
            <SatausDisplay status={ticket.status} />
          </div>
        </div>
      </Link>
    </div>
  );
}

export default TicketCard;
