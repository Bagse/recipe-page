import Checkbox from "./Checkbox";

function Ingredients() {
  return (
    <div>
      <h2 className="font-play capitalize font-bold text-lg md:text-2xl">ingredients</h2>
      <div className="py-2">
        <h3 className="capitalize font-play italic text-[#333333] md:text-lg md:py-3">
          graham cracker crust
        </h3>
        <Checkbox
          label="1 and 1/2 cups (150g) graham cracker crumbs (about 10 full sheet graham crackers)"
          boldWords={["graham", "cracker", "crumbs"]}
        />
        <Checkbox
          label="5 Tablespoons (70g) unsalted butter, melted"
          boldWords={["unsalted", "butter,"]}
        />
        <Checkbox
          label="1/4 cup (50g) granulated sugar"
          boldWords={["granulated", "sugar"]}
        />
      </div>
      <div className="py-2">
        <h3 className="capitalize font-play italic text-[#333333] md:text-lg md:py-3">
          Cheesecake
        </h3>
        <Checkbox
          label="four 8-ounce blocks (904g) full-fat cream cheese, softened to room temperature"
          boldWords={["cream", "cheese,"]}
        />
        <Checkbox
          label="1 cup (200g) granulated sugar"
          boldWords={["granulated", "sugar"]}
        />
        <Checkbox
          label="1 cup (240g) full-fat sour cream, at room temperature"
          boldWords={["sour", "cream,"]}
        />
        <Checkbox
          label="1 teaspoon pure vanilla extract"
          boldWords={["pure", "vanilla", "extract"]}
        />
        <Checkbox
          label="2 teaspoons fresh lemon juice (optional, but recommended)"
          boldWords={["fresh", "lemon", "juice"]}
        />
        <Checkbox
          label="3 large eggs, at room temperature"
          boldWords={["eggs,"]}
        />
        <div className="flex items-start gap-2 py-2">
          <input type="checkbox" name="" className="bg-[#828282] h-5" />
          <p className="font-mont lowercase text-sm md:text-[16px]">
          topping suggestions: <span className="italic font-medium">salted caramel, lemon curd, strawberry topping, chocolate ganache, red wine chocolate ganache, fresh fruit, whipped cream, or raspberry sauce</span> (recipe in notes)
          </p>
        </div>
      </div>
    </div>
  );
}

export default Ingredients;
