import SiteFooter from "./Footer"
import Navbar from "./Navbar"

const PrivacyPolicy = () => {
    return (
        <div>
            <Navbar/>
      <div className="bg-gray-50 min-h-screen mt-10 py-12">
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
          <div className="px-6 py-8 sm:px-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
  
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
              <h2 className="text-xl font-semibold text-blue-700 mb-2">Here are our highlights</h2>
              <p className="text-blue-600">
                As a general rule, privacy policies are written by lawyers for lawyers. We hope you find these highlights
                to instead be a clear and transparent summary of our Privacy Policy.
              </p>
            </div>
  
            <div className="prose prose-sm sm:prose lg:prose-lg max-w-none text-gray-700">
              <p>
                At Mikaf TV, we value your privacy and are committed to protecting your personal information. This Privacy
                Policy outlines how we collect, use, and safeguard your data while providing broadcasting, entertainment,
                and digital services to our audience.
              </p>
  
              <h2 className="text-2xl font-semibold mt-8 mb-4">Our Commitment to Your Privacy</h2>
              <p>
                Mikaf TV's mission is to deliver quality programming, entertainment, and advertising opportunities to a
                broad audience. We only collect, use, or share your information to enhance your experience and ensure
                seamless communication between viewers, advertisers, and our team. We do not sell your personal
                information to third parties.
              </p>
  
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
                <p className="text-yellow-700 font-semibold">
                  With those disclaimers out of the way, here's our most important highlight:
                </p>
                <p className="mt-2">
                  Mikaf TV's purpose is to enrich lives through technology. We will only collect, use or share your
                  personally identifiable information for that purpose. And we don't sell (as "sell" is traditionally
                  defined) your personally identifiable information to anyone else.
                </p>
              </div>
  
              <h2 className="text-2xl font-semibold mt-8 mb-4">Personally identifiable information</h2>
              <p>
                We use the term "personally identifiable information" in these highlights to mean information that
                identifies, or that can reasonably be linked to, an actual natural person (that's a real, named human
                being). We use the stand-alone term "information" to include all types of information, including
                personally identifiable information.
              </p>
  
              <h2 className="text-2xl font-semibold mt-8 mb-4">Collection</h2>
              <p>
                We may collect information relevant to you in three ways. First, we may collect information directly from
                you. This could be as part of your interactions with Mikaf TV personnel or when you provide information
                via our digital properties such as websites or mobile apps.
              </p>
              <p>
                Second, we will collect such information by observing behavior — either in the "real world" or through our
                digital properties like websites and mobile apps.
              </p>
              <p>Finally, we may obtain such information from independent third parties, independent of you.</p>
  
              <h3 className="text-xl font-semibold mt-6 mb-3">What we collect:</h3>
              <p>We collect and store information you provide through our digital properties and in our stores.</p>
              <p>The information we collect from you includes things such as:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Name (for inquiries, participation in programs, and contests)</li>
                <li>Address</li>
                <li>Email address (for newsletters, updates, and feedback)</li>
                <li>Phone number (for viewer engagement, show participation, and customer support)</li>
                <li>Viewer Preferences (to recommend relevant programs, shows, and promotions)</li>
                <li>Social Media Interactions (when you engage with Mikaf TV online)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  
      <SiteFooter/>
      </div>
    )
  }
  
  export default PrivacyPolicy
  
  