import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { ExtLink, InlinePageLink } from "../components/atoms"
import Contact from "../components/contact"

const About = _ => {
  return (
    <Layout activePage="about">
      <SEO title="About" />
      <div className="container">
        <article className="prose">
          <h2>About Me</h2>
          <p>
            I'm Hunter, I am a Front-End web developer from Louisville Ky. I
            started learning how to code a little over a year ago in early 2020
            at the start of quarantine. I'm passionate about Art, Technology,
            and Design.
            <br></br>
            <br></br>I started building websites when I was 12 years old;
            websites and blogs. I used website builders like Freewebs and
            WordPress. Usually completely based on my interests at the time. I
            carried this passion for the Internet of things into my teens and
            adult years.
          </p>
          <h2>My Interests</h2>
          <p>
            I love to travel and explore. Most of my long-term goals outside of
            work revolve around planning some sort of trip. Camping, Hiking,
            Road Tripping, Rock Climbing. Time is flying and there's a lot I
            need to do and see.
            <br></br>
            <br></br>
            When I'm not coding. I enjoy listening to music: Jazz, Classical,
            Ambient Electronica, Folk, and indie to name only a few. Cooking is
            also an important part of my life and daily routine. I cook a lot of
            Asian-style rice dishes. All Plant-Based.
          </p>
        </article>
      </div>
      <Contact />
    </Layout>
  )
}

export default About
