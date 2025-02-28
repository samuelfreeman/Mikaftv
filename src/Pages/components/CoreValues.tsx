
import { logopic } from "@/assets"
const CoreValues = () => {
  return (
    <div className="min-h-[190vh] pt-20 mt-40 w-full p-10  bg-[#262626]">
      <div className="md:flex  gap-10 w-full justify-center  ">

        {/* image  */}
        <div className=" md:w-[563px] object-contain w-full max-w-[563px] h-[200px] md:h-[492px] rounded-md overflow-hidden">
          <img
            className="w-full h-full object-scale-down rounded-md"
            src={logopic}
            alt=""
          />
        </div>


        {/* corevalues */}
        <div className="space-y-2">

          <h1 className="text-white text-3xl md:text-5xl pt-10  ">Core Values</h1>
          <div className="border-b-4   border-[#0E737D] w-20 "> </div>
          <ul className="list-none space-y-5">
            <li className='text-white text-sm lg:text-lg'><span className="font-bold" >Inclusivity:</span> Embracing diversity in language, culture, and perspectives.</li>
            <li className='text-white text-sm lg:text-lg'><span className="font-bold" >Integrity:</span> Upholding truth, fairness, and accuracy in all content.</li>
            <li className='text-white text-sm lg:text-lg'><span className="font-bold" >Community Focus:</span> Serving as a bridge between people and their communities.</li>
            <li className='text-white text-sm lg:text-lg'><span className="font-bold" >Innovation:</span> Leveraging technology and creativity to enhance storytelling.</li>
            <li className='text-white text-sm lg:text-lg'><span className="font-bold" >Excellence:</span> Striving for high standards in programming and service delivery</li>

          </ul>
        </div>
        <div>
        </div>

      </div>
      <div className="md:flex text-white md:space-x-16  ">

        {/* Our vision */}
        <div className="space-y-3">
          <h1 className="text-white text-3xl pt-10  ">Our Vision</h1>
          <div className="border-b-4   border-[#0E737D] w-16 "> </div>
          <p className="text-sm lg:text-lg">To become a trusted, leading bilingual media platform that informs, inspires, and connects diverse communities across Ghana and beyond, empowering individuals and fostering resilience for a more enlightened and united world.</p>

        </div>
        {/* our mission */}
        <div className="space-y-3">
          <h1 className="text-white text-2xl md:text-3xl pt-10  ">Our Mission</h1>
          <div className="border-b-4   border-[#0E737D] w-16 "> </div>
          <p className="text-sm lg:text-lg">To provide trustworthy and balanced information that inspires resilience, empowers individuals, and fosters inclusivity. Through engaging content in English and Twi languages, we aim to promote cultural pride, community dialogue, education, and entertainment, helping people navigate and thrive in a dynamic world.</p>

        </div>
      </div>
      <div className="md:flex text-white   w-full gap-10  justify-between ">

        {/* Our vision */}
        <div className="space-y-3 md:w-2/4">
          <h1 className="text-white text-2xl md:text-3xl pt-10  ">Contact Details</h1>
          <div className="border-b-4   border-[#0E737D] w-16 "> </div>
          <ul className="list-none space-y-5 ">
            <li className='text-white text-sm lg:text-lg '><span className="font-bold" >Postal Address:</span>  P.O. Box 30491 - Airport, Accra.</li>
            <li className='text-white text-sm lg:text-lg '><span className="font-bold" >Location:</span>  Patasi - Kumasi, Near Movie House Plaza.</li>
            <li className='text-white text-sm lg:text-lg'><span className="font-bold" >Office Number:</span> 0322009247, +233 (0) 556818815</li>

            <li className='text-white text-sm lg:text-lg'><span className="font-bold" >Email Address:</span>  info@mikaftvonline.</li>

          </ul>

        </div>
        {/* our mission */}
        <div className="space-y-3 w-2/3">
          <h1 className="text-white text-2xl md:text-3xl pt-10  ">Company Name</h1>
          <div className="border-b-4   border-[#0E737D] w-16 "> </div>
          <p className="text-sm lg:text-lg">Mikaf Multimedia</p>
          <h1 className="text-white text-2xl md:text-3xl pt-5  ">Brand & Tagline</h1>
          <div className="border-b-4   border-[#0E737D] w-16 "> </div>
          <p className="text-sm lg:text-lg">Mikaf TV - “Where Stories Come Alive.”</p>
        </div>
      </div>



    </div>
  )
}

export default CoreValues
