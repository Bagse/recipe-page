function InstructionCardPro({ number, bold, label }) {
  return (
    <div className="flex gap-4">
      <h5 className="bg-[#F2994A] flex rounded-lg px-4 text-2xl text-center w-[36px] h-[36px] font-play font-bold text-white place-content-center">
        {number}
      </h5>
      <p className="font-mont">
        <span className="font-bold">{bold} </span>
        {label}
      </p>
    </div>
  );
}

export default InstructionCardPro;
