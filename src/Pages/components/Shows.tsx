import { CircleDot } from "lucide-react";
import { programes } from "./data";

const Shows = () => {
  return (
    <div>
      <div>
        {programes.map((data) => (
          <div
            key={data.id}
            className={` md:px-16 my-10 px-3 ${
              data.isLeft
                ? " flex md:flex-row-reverse flex-col-reverse gap-10"
                : "md:flex gap-10"
            }`}
          >
            {/* Content */}
            <div className="border-b-2 border-[#BFBFBF] py-3 w-full md:w-3/5">
              {/* const title */}
              <div className="border-l-4 pt-3 mb-4 pl-2 border-[#198587] ">
                <h2 className="font-semibold text-lg md:text-xl">
                  MUST WATCH SHOW
                </h2>
              </div>
              {/* Main content */}
              <div className="space-y-3">
                {/* title */}
                <div className="space-y-3">
                  {" "}
                  <h1 className="font-bold text-[22px] ">
                    <i>{data.title}</i>
                  </h1>
                  <p className="border-b-2 w-[20vw] "></p>
                  {/* description */}
                  <p className="text-xl text-justify">{data.des}</p>
                  {/* const */}
                  <h3 className="font-medium text-xl">🎧 What to Expect:</h3>
                  {/* List of expectation */}
                  <ul>
                    {data.list.map((list, index) => (
                      <li key={index} className="flex gap-2 items-center">
                        <CircleDot size={20} className="text"/>
                        {list}
                      </li>
                    ))}
                  </ul>
                  {/* subdescri[ption] */}
                  <p className="text-xl ">{data.content}</p>
                </div>
                {/* date */}
                <div className="text-[#696969] font-medium text-lg flex space-x-3">
                  <p>{data.date}</p>
                  <p className="border border-[#585757]"></p>
                  <p>Coming Soon</p>
                </div>
              </div>
            </div>
            {/* Image */}
            <div className="md:w-2/5 my-5 md:my-0">
              <img src={data.imageUrl} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shows;
