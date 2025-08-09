import React from "react";

function Error({ message }) {
  return (
    <div className="text-center text-red-500 font-semibold">{message}</div>
  );
}

export default Error;
