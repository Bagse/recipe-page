import { GiKnifeFork } from "react-icons/gi";
import Time from "./Time";
function TimeCard() {
  return (
    <div className="flex flex-col md:shadow-lg md:py-4 md:items-center md:px-16 md:h-[310px] md:rounded-lg">
      <div className="flex items-center gap-1 md:gap-3">
        <GiKnifeFork className="text-[#F2994A]" />
        <div className="font-mont">
          <h4 className="text-[#BDBDBD] font-bold text-[8px] md:text-[10px]">YIELDS</h4>
          <p className="text-[#F2994A] font-medium text-[10px] md:text-sm">12 servings</p>
        </div>
      </div>
      <div className="flex md:flex-col md:gap-6 py-5 justify-between">
        <Time prep="prep time" time="45 minutes" />
        <Time prep="cook time" time="1 hour" />
        <Time prep="total time" time="7,75 hours" />
      </div>
    </div>
  );
}

export default TimeCard;
