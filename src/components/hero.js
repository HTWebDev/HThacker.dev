import React from "react"
import Image from "./image"
import styled from "styled-components"

const Hero = () => {
  return (
    <HeroWrapper>
      <div className="mt-12 flex flex-col-reverse lg:flex-row items-center lg:justify-between lg:space-x-6">
        {/* <h1>
        <span class="box"></span>
      </h1> */}
        <h1 className=" mt-12 lg:mt-0 max-w-3xl text-3xl sm:text-4xl text-primary font-semibold sm:text-left md:text-center lg:text-left">
          Hello! I'm Hunter.
          <br className="mb-6 lg:hidden" /> <br></br> <br></br>I am a Front-End
          Web Developer from Louisville KY.
        </h1>
        <div className="relative">
          <div className="h-32 w-32 md:h-40 md:w-40 lg:h-48 lg:w-48">
            <Image />
          </div>
        </div>
      </div>
    </HeroWrapper>
  )
}

const HeroWrapper = styled.section`
  img {
    border-radius: 100%;
    background-color: #4a4e69;
    border: 6px solid #4a4e69;
  }
`

export default Hero
