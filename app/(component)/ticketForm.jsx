"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";
function TicketForm({ ticket }) {
  // console.log("ticketttttttttttttttttttttttttttttttttttttttttttt", ticket);
  const EditTicket = ticket._id === "new" ? false : true;
  const router = useRouter();
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setFromData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (EditTicket) {
      const res = await fetch(`/api/Tickets/${ticket._id}`, {
        method: "PUT",
        body: JSON.stringify({ formData }),
        "content-type": "application/json",
      });
      if (!res.ok) {
        throw new Error("Faied to create Ticket");
      }
    } else {
      const res = await fetch("/api/Tickets", {
        method: "POST",
        body: JSON.stringify({ formData }),
        "content-type": "application/json",
      });
      if (!res.ok) {
        throw new Error("Faied to create Ticket");
      }
    }

    router.refresh();
    router.push("/");
  };

  const startingTicketData = {
    title: "",
    descripation: "",
    priority: 1,
    progress: 0,
    status: "not started",
    category: "Hardware Category",
  };
  if (EditTicket) {
    startingTicketData["title"] = ticket.title;
    startingTicketData["descripation"] = ticket.descripation;
    startingTicketData["priority"] = ticket.priority;
    startingTicketData["progress"] = ticket.progress;
    startingTicketData["status"] = ticket.status;
    startingTicketData["category"] = ticket.category;
  }

  const [formData, setFromData] = useState(startingTicketData);

  return (
    <div className="flex justify-center">
      <form
        className="flex flex-col gap-3 w-1/2"
        method="post"
        onSubmit={handleSubmit}
      >
        <h3>{!EditTicket ? "Create Your Ticket" : "Update Your Ticket"}</h3>
        <label>Title</label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={handleChange}
          required={true}
          value={formData.title}
        />
        <label>Descripaton</label>
        <textarea
          id="descripation"
          name="descripation"
          onChange={handleChange}
          required={true}
          value={formData.descripation}
          rows="5"
        />
        <select
          name="category"
          onChange={handleChange}
          value={formData.category}
        >
          <option className="Hardware Problem">Hardware Problem</option>
          <option className="Software Problem">Software Problem</option>
          <option className="Project">Project</option>
        </select>
        <label>Priority</label>
        <div>
          <input
            id="priority-1"
            name="priority"
            onChange={handleChange}
            value={1}
            type="radio"
            checked={formData.priority == 1}
          />
          <label>1</label>
          <input
            id="priority-2"
            name="priority"
            onChange={handleChange}
            value={2}
            type="radio"
            checked={formData.priority == 2}
          />
          <label>2</label>
          <input
            id="priority-3"
            name="priority"
            onChange={handleChange}
            value={3}
            type="radio"
            checked={formData.priority == 3}
          />
          <label>3</label>
          <input
            id="priority-4"
            name="priority"
            onChange={handleChange}
            value={4}
            type="radio"
            checked={formData.priority == 4}
          />
          <label>4</label>
          <input
            id="priority-5"
            name="priority"
            onChange={handleChange}
            value={5}
            type="radio"
            checked={formData.priority == 5}
          />
          <label>5</label>
        </div>
        <label>Progress</label>
        <input
          type="range"
          id="progress"
          name="progress"
          value={formData.progress}
          min="0"
          max="100"
          onChange={handleChange}
        />
        <label>Status</label>
        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="not started">Not Started</option>
          <option value="started">Started</option>
          <option value="Done">Done</option>
        </select>
        <input
          type="submit"
          className="btn"
          value={!EditTicket ? "Created Ticket" : "Updated Ticket"}
        />
      </form>
    </div>
  );
}

export default TicketForm;
