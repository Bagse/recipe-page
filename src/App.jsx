import Ingredients from "./components/Ingredients";
import Instructions from "./components/Instructions";
import TimeCard from "./components/TimeCard";
import { BiCode } from "react-icons/bi";
import { BiCodeAlt } from "react-icons/bi";

function App() {
  return (
    <div className="px-4 py-10 lg:px-80">
      <div>
        <h1 className="font-play font-bold text-2xl md:text-5xl">
          Classic Cheesecake Recipe
        </h1>
        <div className="flex pt-4 md:pt-6 gap-3 items-start">
          <img src="./img/6dots.svg" className="pt-1 md:w-4" />
          <p className="font-mont font-medium text-[#4F4F4F] text-[12px] md:text-sm md:w-[580px] italic">
            Look no further for a creamy and ultra smooth classic cheesecake
            recipe! Paired with a buttery graham cracker crust, no one can deny
            its simple decadence. For the best results, bake in a water bath.
          </p>
        </div>
        <img
          src="./img/photo1.png"
          alt="imagen cheesecake"
          className="rounded-xl py-5 md:mt-6 md:w-screen md:h-[400px]"
        />
      </div>
      <div className="md:flex md:flex-row-reverse md:gap-16">
      <TimeCard />
      <Ingredients />
      </div>
      <Instructions />
      <div className="text-[#BDBDBD] font-mont italic text-[12px] md:text-[16px] md:flex md:gap-2 pt-4">
        <p>Source</p>
        <p>https://sallysbakingaddiction.com/classic-cheesecake/</p>
      </div>

      <footer className="text-[#828282] font-mont font-medium place-content-center flex items-center md:text-sm pt-24 gap-1">
        <BiCode className="hover:text-black hover:scale-125" />
        Created by{" "}
        <a
          href="https://github.com/Bagse"
          target="_blank"
          className="hover:text-[#F2994A] hover:font-bold"
          rel="noopener noreferrer"
        >
          Bagse
        </a>{" "}
        -{" "}
        <a
          href="https://devchallenges.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#F2994A] hover:font-bold"
        >
          devChallenges.io
        </a>
        <BiCodeAlt className="hover:text-black hover:scale-125" />
      </footer>
    </div>
  );
}

export default App;
