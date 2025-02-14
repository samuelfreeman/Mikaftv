import { team } from "./data";

const Team = () => {
  return (
    <div className="w-full h-[150vh] mt-32 mb-40 p-4">
<div className="flex flex-col justify-center items-center p-5" >

      <h1 className="text-3xl font-bold mb-4">Our Team</h1>
      <div className="border-b-4   border-[#0E737D] w-20 "> </div>
</div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {team.map((data) => (
          <div
            key={data?.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img 
              src={data?.imageUrl} 
              alt={data?.name} 
              className="w-full h-48 object-scale-down"
            />
            <div className="p-4">
              <h1 className="text-xl font-bold">{data?.name}</h1>
              <p className="text-gray-600">{data?.position}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;