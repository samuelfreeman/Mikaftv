import { CircleDot } from "lucide-react"
import { programes } from "./data"

const Shows = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {programes.map((data) => (
        <div
          key={data.id}
          className={`flex flex-col md:flex-row gap-8 md:gap-12 my-16 ${data.isLeft ? "md:flex-row-reverse" : ""}`}
        >
          {/* Content */}
          <div className="flex-1 border-b-2 border-[#BFBFBF] pb-6">
            {/* Must Watch Show */}
            <div className="border-l-4 border-[#198587] pl-4 mb-6">
              <h2 className="font-semibold text-lg md:text-xl">MUST WATCH SHOW</h2>
            </div>
            {/* Main content */}
            <div className="space-y-4">
              {/* Title */}
              <h1 className="font-bold text-2xl md:text-3xl italic">{data.title}</h1>
              <div className="w-24 border-b-2 border-[#BFBFBF] mb-4"></div>
              {/* Description */}
              <p className="text-base md:text-lg text-justify">{data.des}</p>
              {/* Subtitle */}
              <h3 className="font-medium text-lg md:text-xl mt-6 mb-2">{data.subtitle}:</h3>
              {/* List of expectations */}
              <ul className="space-y-2 mb-4">
                {data.list.map((list, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CircleDot size={16} className="text-[#198587] flex-shrink-0" />
                    <span className="text-base md:text-lg">{list}</span>
                  </li>
                ))}
              </ul>
              {/* Sub-description */}
              <p className="text-base md:text-lg">{data.content}</p>
              {/* Date and Coming Soon */}
              <div className="text-[#696969] font-medium text-base md:text-lg flex items-center space-x-4 mt-6">
                <p>{data.date}</p>
                <div className="h-5 border-l border-[#585757]"></div>
                <p>Coming Soon</p>
              </div>
            </div>
          </div>
          {/* Image/Video */}
          <div className="md:flex-1  sm:max-w-[60%] md:max-w-[35%]">
            {data.type === "image" ? (
              <img
                src={data.mediaUrl || "/placeholder.svg"}
                alt={data.title}
                className="w-full h-auto rounded-md shadow-md"
              />
            ) : (
              <video src={data.mediaUrl} controls className="w-full h-auto rounded-md shadow-md">
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Shows

