

const Location = () => {
  return (
    
    <div className="w-full flex h-[80vh]  md:mb-40 md:mt-0 p-6 mt-56 justify-center flex-col items-center">
        <h1 className="text-center font-bold text-4xl pb-8">Our Location:</h1>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.7637320335625!2d-1.6450646257967318!3d6.676167893319007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdb97dceac8945b%3A0x4524b5d59fe4f2da!2sMikaf%20Multimedia!5e0!3m2!1sen!2sgh!4v1739208581528!5m2!1sen!2sgh"
      className="w-full max-w-[800px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-lg shadow-lg"
      style={{ border: "0" }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
  )
}

export default Location
