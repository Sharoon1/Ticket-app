import React from "react";

function SatausDisplay({ status }) {
  const getStatusColor = () => {
    let color = "bg-slate-700";
    switch (status.toLowerCase()) {
      case "done":
        color = "bg-green-400";
        return color;
      case "started":
        color = "bg-yellow-400";
        return color;
      case "not started":
        color = "bg-red-400";
        return color;
    }
    return color;
  };
  return (
    <span
      className={` ${getStatusColor(
        status
      )} inline-block text-xs text-gray-700 px-2 py-1 font-semibold rounded-full`}
    >
      {status}
    </span>
  );
}

export default SatausDisplay;
