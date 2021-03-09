import React from "react"
import { Button } from "./atoms"

export const Newsletter = () => {
  return (
    <div className="mt-32 full-width-container ">
      <div className="container max-w-screen-xl mx-auto pt-16 text-gray-900">
        <h1 className="px-4 text-3xl font-semibold text-center text-accent">
          Want more?{" "}
        </h1>
        <p className="px-4 mx-auto mt-4 text-center text-secondary break-all">
          Subscribe to get my latest content via email.
          <br className="md:hidden" />
           I won’t send you spam, and you can unsubscribe at any time. 
        </p>
        <p className="mt-0 md:mt-1 text-center text-secondary">
          No spam and feel free to unsubscribe any time.
        </p>
        <div className="mx-auto  pt-10 flex justify-center">
          <Button width="widest" link="https://hthacker.substack.com/welcome">
            <span className=" text-2xl font-semibold text-on-accent">
              Subscribe{" "}
            </span>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Newsletter
