import React from "react"
import { ExtLink, Button } from "./atoms"

export const Contact = () => {
  return (
    <div className="mt-32 full-width-container ">
      <div className="container max-w-screen-xl mx-auto pt-16 text-gray-900">
        <h1 className="text-3xl font-semibold text-center text-primary">
          Get in Touch{" "}
        </h1>
        <p className="px-4 mt-4 text-center text-secondary">
          Are you in need of a website? Or do you have any questions or
          feedback?
        </p>
        <p className="px-4 mt-1 text-center text-secondary">
          Feel free to also reach me on :{" "}
          <ExtLink link="https://github.com/HTWebDev" newTab>
            GitHub
          </ExtLink>
          ,{" "}
          <ExtLink link="https://twitter.com/HTWebDev" newTab>
            Twitter
          </ExtLink>
          ,{" or "}
          <ExtLink link="https://www.linkedin.com/in/hunterthacker/" newTab>
            LinkedIn
          </ExtLink>
          ,{" "}
        </p>
        <div className="mx-auto  pt-10 flex justify-center">
          <Button width="widest" link="mailto:hey@jeffjadulco.com">
            <span className=" text-2xl font-semibold text-on-accent">
              Contact Me
            </span>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Contact
