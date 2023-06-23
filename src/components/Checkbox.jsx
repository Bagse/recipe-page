const Checkbox = ({ label, boldWords }) => {
    const renderRichText = (text, boldWords) => {
        const words = text.split(' ');
        const boldWordMap = {};
      
        return words.map((word, index) => {
          if (boldWords.includes(word) && !boldWordMap[word]) {
            boldWordMap[word] = true;
            return <span key={index} className="font-bold">{word} </span>;
          } else {
            return <span key={index}>{word} </span>;
          }
        });
      };

  return (
    <div className="flex items-start gap-2 py-2">
      <input type="checkbox" name="" className="bg-[#828282] h-5" />
      <p className="font-mont lowercase text-sm md:text-[16px]">
        {renderRichText(label, boldWords)}
      </p>
    </div>
  );
};

export default Checkbox;
