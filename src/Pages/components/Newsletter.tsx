
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const Newsletter = () => {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e:any) => {
    e.preventDefault()
    // Here you would typically send the email to your backend
    console.log("Newsletter email:", email)
    setIsSubmitted(true)
    setEmail("")

    // Reset submission state after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
    }, 3000)
  }

  return (
    <div className="bg-newsletter bg-cover mt-10 rounded-md min-h-[50vh] md:mb-7 relative md:flex justify-around items-center mx-7 p-10 ">
      <h1 className="text-white font-bold md:text-4xl text-center ">Subscribe to our news letter</h1>
      <div className="p-4 md:w-1/3">
        <h1 className="text-white font-bold text-sm py-4 text-center ">
          Subscribe to our newsletter and never miss an update on trending stories, exclusive interviews, and upcoming
          programs.
        </h1>

        {isSubmitted ? (
          <div className="bg-green-500 bg-opacity-20 border border-green-500 text-green-300 px-4 py-3 rounded mb-4">
            Thank you! You'll now receive our newsletter updates.
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="flex items-center space-x-2">
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button className="bg-[#27BBA4]" type="submit">
                Subscribe
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}

export default Newsletter

