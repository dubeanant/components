import React from "react";
import "../index.css";

export const Wave: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="flex gap-1.5 custom-perspective">
        {[...Array(13)].map((_, index) => (
          <div
            key={index}
            className="item w-[calc((1vw+1vh)*3)] h-[calc((1vw+1vh)*12)] bg-cover bg-center bg-black bg-opacity-50 cursor-pointer grayscale brightness-50 transition-transform duration-1000"
            style={{ backgroundImage: 'url("https://images.pexels.com/photos/214574/pexels-photo-214574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")' }}
            tabIndex={0}
          />
        ))}
      </div>
    </div>
  );
};

