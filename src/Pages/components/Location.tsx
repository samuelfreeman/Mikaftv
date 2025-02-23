

const Location = () => {
  return (
    
     <div className="w-full mt-10  h-[70vh]  md:min-h-[160vh]    md:max-h-[80vh] md:mt-0 ">

     
    <div className=" flex justify-center flex-col items-center">
        <h1 className="  md:text-center font-extrabold md:text-4xl text-[#198587] md:pb-8">Find Us On Google Maps:</h1>

        <span className="md:w-32 w-10 h-[2px] mb-4 mt-2 md:-mt-5 md:mb-2 bg-[#198587]"></span>
        <h1 className="md:w-1/5 text-center mb-5">Stay connected and visit us anytime. Click below to locate us easily!</h1>
        <div className=" border-4 md:w-[1300px] max-[1300px] border-[#24918D]">

    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.7637320335625!2d-1.6450646257967318!3d6.676167893319007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdb97dceac8945b%3A0x4524b5d59fe4f2da!2sMikaf%20Multimedia!5e0!3m2!1sen!2sgh!4v1739208581528!5m2!1sen!2sgh"
      className="w-full  max-w-[1300px]  h-[300px] sm:h-[800px] md:h-[500px] lg:h-[600px] rounded-lg shadow-lg"
      style={{ border: "0" }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      </div>
  </div>
      <div className=" m-8">
        <h1 className="font-bold text-xl py-4">Need Directions?</h1>
        <p>Use the map above to find us easily. We look forward to seeing you!</p>
        <h1 className=" text-[#24918D]"> <span className="text-black font-bold py-2">Call Office:</span> 0322009247, 0556818815</h1>
      </div>
      
  </div>
  )
}

export default Location
