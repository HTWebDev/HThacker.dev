import "./src/assets/css/index.css"
import React from "react"
import { AnimatePresence } from "framer-motion"

require("./src/assets/css/code.css")

export const wrapPageElement = ({ element }) => (
  <AnimatePresence exitBeforeEnter>{element}</AnimatePresence>
)
