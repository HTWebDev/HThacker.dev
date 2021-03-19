import React from "react"
import PropTypes from "prop-types"

import { motion } from "framer-motion"
import { ThemeProvider } from "../context/themeContext"
import Header from "./header"
import MobileNav from "./mobileNav"
import Footer from "./footer"

const Layout = ({ children, activePage, footer = true }) => {
  return (
    <>
      <ThemeProvider>
        <MobileNav />
        <Header activePage={activePage} />
        <motion.main
          className="container m-auto px-5 mt-16 sm:px-12 md:px-20 max-w-screen-xl"
          initial={{
            opacity: 0,
            x: -200,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          exit={{
            opacity: 0,
            x: 200,
          }}
          transition={{
            type: "spring",
            mass: 0.35,
            stiffness: 100,
            duration: 0.3,
          }}
        >
          {children}
        </motion.main>
        {/* <main className="container m-auto px-5 mt-16 sm:px-12 md:px-20 max-w-screen-xl">
          {children}
        </main> */}
        {footer && <Footer />}
      </ThemeProvider>
    </>
  )
}
//

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
