import { adminTeam, managementTeam } from "./data";

const Team = () => {
  return (
    <div className="w-full min-h-[120vh] mt-32 mb-32 p-4">
      <div className="flex flex-col justify-center items-center p-5" >

        <h1 className="text-3xl font-bold mb-4">Our Team</h1>
        <div className="border-b-4   border-[#0E737D] w-20 "> </div>
      </div>
      <h1 className="text-center font-bold">Management</h1>
      <div className=" flex justify-center items-center  flex-wrap ">
        {adminTeam.map((data) => (
          <div
            key={data?.id}
            className="bg-white rounded-lg m-8 w-72 shadow-md overflow-hidden"

          >
            <img
              src={data?.imageUrl}
              alt={data?.name}
              className="w-full h-52 object-scale-down"
            />
            <div className="p-4">
              <h1 className="text-xl font-bold">{data?.name}</h1>
              <p className="text-gray-600">{data?.position}</p>
            </div>
          </div>
        ))}
      </div>
      <h1 className="text-center font-bold">Meet the Hosts & Anchors</h1>
      <div className=" flex justify-center items-center  flex-wrap ">
        {managementTeam.map((data) => (
          <div
            key={data?.id}
            className="bg-white rounded-lg m-8 w-72 shadow-md overflow-hidden"
          >
            <img
              src={data?.imageUrl}
              alt={data?.name}
              className="w-full h-52 object-scale-down"
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