import Image from "next/image";
import TicketCard from "./(component)/ticketCard";
const getTickets = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/Tickets", {
      cache: "no-store",
    });
    return res.json();
  } catch (error) {
    console.log("Error to GetTickets", error);
  }
};
export default async function Home() {
  const { tickets } = await getTickets();
  const uniqueCategories = [
    ...new Set(tickets?.map(({ category }) => category)),
  ];
  return (
    <div className="p-5">
      <div>
        {tickets &&
          uniqueCategories?.map((uniqueCategory, categoryIndex) => (
            <div key={categoryIndex} className="mb-4">
              <h2>{uniqueCategory}</h2>
              <div className="lg:grid grid-cols-2 xl:grid-cols-4">
                {tickets
                  .filter((ticket) => ticket.category === uniqueCategory)
                  .map((filterTicket, _index) => (
                    <TicketCard
                      key={_index}
                      id="_index"
                      ticket={filterTicket}
                    />
                  ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
