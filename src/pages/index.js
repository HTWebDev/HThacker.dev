import React from "react"
// import { Link } from "gatsby"

// import { Blob } from "../components/atoms"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostList from "../components/postList"
import ProjectList from "../components/projectList"
import Contact from "../components/contact"
import Hero from "../components/hero"

const IndexPage = () => (
  <Layout activePage="/">
    <SEO />
    <Hero />
    <PostList showHeading />
    <ProjectList showHeading />
    <Contact />
  </Layout>
)

export default IndexPage
