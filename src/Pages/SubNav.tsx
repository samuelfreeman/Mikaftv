import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface ButtonControlsProps {
  onCategoryChange: (category: string) => void;
  selectedCategory: string;
}

const Controls: React.FC<ButtonControlsProps> = ({ onCategoryChange, selectedCategory }) => {
  const categories = ["Trending", "Sports", "Health", "Agriculture", "Finance"];

  return (
    <div className="w-full md:flex md:justify-between mb-36 mt-14 top-0 left-0 right-0 z-50 fixed bg-white border-b">
      {/* Category Buttons (Scrollable on small screens) */}
      <div className="flex overflow-x-auto pl-4 py-2 sm:pl-12 sm:py-0 sm:overflow-visible">
        {categories.map((category) => (
          <Button
            key={category}
            className={`min-w-max px-3 sm:px-5 mx-2 sm:mx-3 mt-2 sm:mt-5 rounded transition-colors duration-300 ${
              selectedCategory === category
                ? "bg-[#681FA3] text-white"
                : "bg-gray-200 text-black hover:bg-gray-300"
            }`}
            onClick={() => onCategoryChange(category)}
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Search Input and Button (Below category buttons on small screens) */}
      <div className=" hidden  md:m-4 md:flex flex-col sm:flex-row sm:items-center sm:justify-end sm:space-x-2 sm:mr-20">
        <Input className="w-full sm:w-3/4" type="email" placeholder="Search news, topics and more..." />
        <Button className="mt-2 sm:mt-0" variant="outline">
          Programmes
        </Button>
      </div>
    </div>
  );
};

export default Controls;