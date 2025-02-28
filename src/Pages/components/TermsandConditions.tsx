import { NavLink } from "react-router"
import SiteFooter from "./Footer"
import Navbar from "./Navbar"

const TermsAndConditions = () => {
    return (
        <div>

        <Navbar/>
      <div className="bg-gray-50 min-h-screen mt-10 py-12">
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
          <div className="px-6 py-8 sm:px-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Terms and Conditions</h1>
            <p className="text-sm text-gray-600 mb-6">[Last Updated February 27, 2025]</p>
  
            <div className="prose prose-sm sm:prose lg:prose-lg max-w-none text-gray-700">
              <p>
                Welcome to Mikaf TV. The Mikaf TV website, mobile platform, and streaming services (collectively referred
                to as "Mikaf TV Properties") provide businesses, artists, and individuals with the opportunity to
                broadcast live programs, run promotional campaigns, and showcase their brand to a vast audience. By using
                any Mikaf TV Property and its related services, products, or software to (i) advertise your business,
                brand, or content, or (ii) explore available sponsorship or media placement opportunities, you agree to be
                bound by these Terms and Conditions ("Terms"). You also accept these Terms when you create an account,
                purchase advertising space, or engage with any Mikaf TV service.
              </p>
  
              <p>
                Additional terms may apply to specific interactions with Mikaf TV, including sponsorship agreements,
                featured content, and advertising packages. If any additional terms conflict with these Terms, the
                additional terms will govern. References to "Mikaf TV," "our," "we," or "us" refer to Mikaf TV and its
                affiliates, subsidiaries, and media partners. We may update these Terms periodically, and it is your
                responsibility to review them for any changes. If you do not agree with the Terms, you should not use
                Mikaf TV Properties.
              </p>
  
              <h2 className="text-2xl font-semibold mt-8 mb-4">Privacy</h2>
              <p>
                Your use of Mikaf TV Properties is subject to our <NavLink to={"/privacypolicy"} className="text-[#24918D]">Privacy Policy.</NavLink> Please review it to understand how we
                collect, use, and protect your information.
              </p>
  
              <h2 className="text-2xl font-semibold mt-8 mb-4">Information on our site</h2>
              <p>
                At Mikaf TV, we are committed to providing accurate, engaging, and up-to-date content for our viewers,
                advertisers, and partners. Our website, mobile platform, and broadcasting services offer a diverse range
                of programs, live shows, promotional opportunities, and advertising solutions designed to connect
                businesses, artists, and content creators with a wider audience.
              </p>
              <p>
                We strive to ensure that all schedules, program listings, advertising rates, and promotional details
                displayed on our platforms are accurate. However, due to the dynamic nature of television broadcasting,
                changes may occasionally occur in program lineups, air times, and availability of advertising slots.
              </p>
  
              <h3 className="text-xl font-semibold mt-6 mb-3">Program Schedules and Live Broadcasts</h3>
              <p>
                Our program lineup includes news, entertainment, sports, talk shows, music features, and exclusive live
                broadcasts. While we aim to provide a consistent and well-structured schedule, some programs may be
                rescheduled, postponed, or canceled due to breaking news coverage, technical issues, or other unforeseen
                circumstances. We encourage viewers to check our latest schedules and announcements regularly on our
                website and social media pages.
              </p>
  
              <h3 className="text-xl font-semibold mt-6 mb-3">Advertising and Promotional Services</h3>
              <p>Mikaf TV offers a variety of advertising and sponsorship opportunities, including:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>TV Commercials – Promote your business, product, or event with high-quality ad placements.</li>
                <li>Live Mentions and Sponsorships – Get your brand featured during our live programs.</li>
                <li>Music and Entertainment Promotions – Showcase your music, movie, or event to a broad audience.</li>
                <li>On-Screen Tickers and Graphics – Display your message while programs are airing.</li>
              </ul>
              <p>
                All advertising slots and sponsorship packages are subject to availability and may vary based on airtime
                demand, viewership ratings, and promotional campaigns. We encourage businesses and artists to book their
                slots in advance to secure the best placement.
              </p>
  
              <h3 className="text-xl font-semibold mt-6 mb-3">Content Accuracy and Updates</h3>
              <p>
                We work hard to ensure that all information on our platform—including show descriptions, schedules, news
                updates, and promotional offers—is accurate and current. However, there may be instances where details are
                updated, modified, or temporarily unavailable. If you notice any discrepancies or require further
                clarification, feel free to contact our support team.
              </p>
  
              <h2 className="text-2xl font-semibold mt-8 mb-4">Security</h2>
              <p>
                You are responsible for maintaining the confidentiality of your Mikaf TV account credentials and for
                restricting unauthorized access to your account. You must not use Mikaf TV Properties for fraudulent or
                unlawful activities, including but not limited to:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Misrepresenting your identity or impersonating another user.</li>
                <li>Attempting to tamper with or disrupt Mikaf TV's digital platforms.</li>
                <li>
                  Engaging in unauthorized advertising, spamming, or malicious activities such as hacking, phishing, or
                  introducing viruses.
                </li>
              </ul>
              <p>
                Any attempt to violate the security of Mikaf TV Properties may result in legal action and termination of
                your access.
              </p>
            </div>
          </div>
        </div>
      </div>
      <SiteFooter/>
      </div>
    )
  }
  
  export default TermsAndConditions
  
  