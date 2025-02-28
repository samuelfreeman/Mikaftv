
import { useState, useEffect } from "react"
import Navbar from "./components/Navbar"
import { Typewriter } from "react-simple-typewriter"
import { Tv, Mail, Bell, ArrowRight } from "lucide-react"

const ComingSoon = () => {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [days, setDays] = useState(30)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1)
      } else if (minutes > 0) {
        setMinutes(minutes - 1)
        setSeconds(59)
      } else if (hours > 0) {
        setHours(hours - 1)
        setMinutes(59)
        setSeconds(59)
      } else if (days > 0) {
        setDays(days - 1)
        setHours(23)
        setMinutes(59)
        setSeconds(59)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [days, hours, minutes, seconds])

  const handleSubmit = (e:any) => {
    e.preventDefault()
    // Here you would typically send the email to your backend
    console.log("Notification email:", email)
    setIsSubmitted(true)
    setEmail("")

    // Reset submission state after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
    }, 3000)
  }

  return (
    <div className="bg-gradient-to-b from-black to-gray-900 mt-10 min-h-screen text-white">
      <Navbar />

      <div className="container mx-auto px-4 pt-16 pb-20">
        <div className="flex flex-col items-center justify-center">
          {/* TV Icon with Animation */}
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-full shadow-lg">
              <Tv size={64} className="text-white" />
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            Live TV Stream
          </h1>

          {/* Typewriter Effect */}
          <div className="text-xl md:text-2xl lg:text-3xl text-center mb-12 h-20">
            <span className="font-medium">
              <Typewriter
                words={[
                  "Coming soon to your screens...",
                  "Embracing diversity in language, culture, and perspectives.",
                  "Upholding truth, fairness, and accuracy in all content.",
                  "Get ready for a new streaming experience.",
                ]}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </div>

          {/* Countdown Timer */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-12">
            <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm p-4 rounded-lg text-center min-w-[100px]">
              <div className="text-3xl md:text-4xl font-bold text-blue-400">{days}</div>
              <div className="text-xs md:text-sm uppercase tracking-wider">Days</div>
            </div>
            <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm p-4 rounded-lg text-center min-w-[100px]">
              <div className="text-3xl md:text-4xl font-bold text-purple-400">{hours}</div>
              <div className="text-xs md:text-sm uppercase tracking-wider">Hours</div>
            </div>
            <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm p-4 rounded-lg text-center min-w-[100px]">
              <div className="text-3xl md:text-4xl font-bold text-pink-400">{minutes}</div>
              <div className="text-xs md:text-sm uppercase tracking-wider">Minutes</div>
            </div>
            <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm p-4 rounded-lg text-center min-w-[100px]">
              <div className="text-3xl md:text-4xl font-bold text-red-400">{seconds}</div>
              <div className="text-xs md:text-sm uppercase tracking-wider">Seconds</div>
            </div>
          </div>

          {/* Notification Form */}
          <div className="w-full max-w-md">
            <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Bell className="mr-2 text-yellow-400" size={20} />
                Get Notified When We Launch
              </h3>

              {isSubmitted ? (
                <div className="bg-green-500 bg-opacity-20 border border-green-500 text-green-300 px-4 py-3 rounded">
                  Thank you! We'll notify you when we launch.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex">
                    <div className="relative flex-grow">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                        className="w-full pl-10 pr-4 py-3 bg-gray-700 bg-opacity-50 border border-gray-600 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <button
                      type="submit"
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-2  rounded-r-md transition duration-300 flex items-center"
                    >
                      Notify Me
                      <ArrowRight className="ml-2" size={18} />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Features Preview */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
            <div className="bg-gray-800 bg-opacity-30 p-5 rounded-lg text-center hover:bg-opacity-40 transition duration-300">
              <div className="bg-gradient-to-br from-blue-500 to-blue-700 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Live Streaming</h3>
              <p className="text-gray-300 text-sm">Watch your favorite shows and events as they happen in real-time.</p>
            </div>

            <div className="bg-gray-800 bg-opacity-30 p-5 rounded-lg text-center hover:bg-opacity-40 transition duration-300">
              <div className="bg-gradient-to-br from-purple-500 to-purple-700 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">HD Quality</h3>
              <p className="text-gray-300 text-sm">
                Experience crystal clear streaming with our high-definition video quality.
              </p>
            </div>

            <div className="bg-gray-800 bg-opacity-30 p-5 rounded-lg text-center hover:bg-opacity-40 transition duration-300">
              <div className="bg-gradient-to-br from-pink-500 to-pink-700 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Multi-device</h3>
              <p className="text-gray-300 text-sm">
                Watch on your TV, computer, tablet, or smartphone - anywhere, anytime.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black bg-opacity-60 py-6 mt-auto">
        <div className="container mx-auto px-4 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Live TV Stream. All rights reserved.</p>
          <p className="mt-2">Stay tuned for our official launch!</p>
        </div>
      </footer>
    </div>
  )
}

export default ComingSoon

