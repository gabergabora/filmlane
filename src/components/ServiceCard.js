import React from "react";

function ServiceCard({ item }) {
  return (
    <div
      key={item.id}
      className={`w-full flex flex-col gap-4 pb-4  ${
        item.id == 1 && "border-b border-dashed border-b-[#BDBDBD]"
      } `}
    >
      <div className="w-[85px] h-[85px] p-3 rounded-full outline-1 outline-dashed outline-citrine outline-offset-[5px] flex justify-center items-center transition-all duration-200 hover:bg-citrine">
        <div className="text-[42px] text-white">{item.icon}</div>
      </div>
      <h3 className="text-white text-[20px] font-[800]">{item.title}</h3>
      <p className="text-[#BDBDBD] text-[14px] font-medium leading-6">
        {item.desc}
      </p>
    </div>
  );
}

export default ServiceCard;
