import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";

interface ButtonControlsProps {
  onCategoryChange: (category: string) => void;
  selectedCategory: string;
}

const Controls: React.FC<ButtonControlsProps> = ({ onCategoryChange, selectedCategory }) => {
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("target-section");
      if (section) {
        const rect = section.getBoundingClientRect();
        setShowButtons(rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const categories = ["Trending", "Sports", "Health", "Agriculture", "Finance"];

  return (
    <div
      className={`w-full md:flex md:justify-between top-14  left-0 right-0 z-50 fixed transition-opacity duration-500 ${
        showButtons
          ? "opacity-100 visible delay-200 bg-white border-b"
          : "opacity-0 pointer-events-none"
      }`}
    >
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
      <div className="hidden md:m-4 md:flex flex-col sm:flex-row sm:items-center sm:justify-end sm:space-x-2 sm:mr-20">
        <Input className="w-full sm:w-3/4" type="email" placeholder="Search news, topics and more..." />
        <Button className="mt-2 sm:mt-0" variant="outline">
          Programmes
        </Button>
      </div>
    </div>
  );
};

export default Controls;