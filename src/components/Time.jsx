import { AiOutlineClockCircle } from "react-icons/ai";

function Time({ prep, time }) {
  return (
    <div className="flex gap-1 md:gap-3 items-center">
      <AiOutlineClockCircle className="text-[#333333]" />
      <div className="font-mont">
        <h4 className="text-[#BDBDBD] font-bold text-[8px] md:text-[10px] uppercase">
          {prep}
        </h4>
        <p className="text-[#333333] font-semibold text-[10px] md:text-sm lowercase">
          {time}
        </p>
      </div>
    </div>
  );
}

export default Time;
