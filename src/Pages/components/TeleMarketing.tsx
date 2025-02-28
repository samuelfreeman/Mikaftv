
import { Button } from "@/components/ui/button"; // Assuming you're using a UI library like Shadcn
import { NavLink } from "react-router";

export default function TelemarketPromotion() {
  return (
    <section className="bg-gray-50 md:py-12 px-6   md:px-8 h-[230vh] md:h-[130vh] mt-28 md:mt-18">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
       

        {/* Text Section */}
        <div className="space-y-6 border-b-2 pb-4">
          <h2 className=" text-2xl md:text-3xl  font-bold   border-l-4 p-2 border-[#681FA3]">
            TELEMARKET PROMOTION
          </h2>
          <p className="text-lg  ">
            Your Brand deserves the Spotlight - Put your business in the spotlight!
          </p>
          <div className="border-b-4   border-[#681FA3] w-56 "> </div>
          <p className="text-sm lg:text-lg">
            Boost your business with Mikaf TV’s all-new TeleMarket Promotion! Get
            the widest reach at the lowest rates ever and showcase your goods and
            services to a massive audience. For 3 months, enjoy premium TV
            advertising at incredibly affordable prices, perfect for startups,
            small businesses, and brands looking to grow!
          </p>

          {/* Why Choose Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold ">
              📢 Why Choose TeleMarket Promotion?
            </h3>
            <ul className=" list-inside  space-y-2">
              <li> <span className="text-[#681FA3] text-sm lg:text-lg pr-2">{"> "}</span> Unmatched TV exposure at unbeatable rates.</li>
              <li> <span className="text-[#681FA3] text-sm lg:text-lg pr-2">{"> "}</span> Maximum visibility for your products and services.</li>
              <li> <span className="text-[#681FA3] text-sm lg:text-lg pr-2">{"> "}</span> Reach thousands of potential customers daily.</li>
            </ul>
          </div>

          {/* Call to Action */}
          <p className="text-sm lg:text-lg">
            Our TeleMarket Promotion is set to revolutionize advertising by
            offering businesses an affordable way to showcase their products and
            services to a massive audience.
          </p>
          <p className=" text-sm lg:text-lg font-semibold">
            Limited Spaces Available! Secure your slot now and take your business
            to the next level.  <Button variant="link"><NavLink to="/comingsoon" className="text-gray-900 hover:text-gray-700 text-lg font-bold">Terms & Conditions Apply.</NavLink></Button>
          </p>

          
         
        </div>
         {/* Image Section */}
         <div className=" w-[100%]  h-[10vh] md:w-full md:h-full  md:p-20">
          <img
          
            src="/telemarket.jpg" // Replace with your image path
            alt="TeleMarket Promotion"
             height={"20"}
             width={"20"}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
      
    </section>
  );
}