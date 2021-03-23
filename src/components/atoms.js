import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

export const NavLink = ({ to, children, title = "Link", selected = false }) => {
  const textColor = selected ? "text-accent" : "text-secondary"
  const style = `font-normal text-base hover:text-accent transition duration-150 ${textColor}`
  return (
    <Link to={to} title={title}>
      <span className={style}>{children}</span>
    </Link>
  )
}

export const BlogTitle = ({ children }) => {
  return (
    <h1
      id="introduction"
      className="text-4xl font-bold text-accent tracking-tight"
    >
      {children}
    </h1>
  )
}

export const BlogTitleInfo = ({ timeToRead, date, datetime }) => {
  return (
    <div className="mb-2 text-sm text-tertiary tracking-normal">
      <span>
        <time dateTime={datetime}>{date}</time>
      </span>
      <span> • </span>
      <span>{timeToRead} minute read</span>
    </div>
  )
}

export const Heading = ({ children }) => {
  return (
    <h2 className="relative mt-12 mb-3 text-3xl font-bold text-accent">
      {children}
    </h2>
  )
}

export const SubHeading = ({ children }) => {
  return (
    <h2 className="relative mt-6 mb-2 text-lg font-semibold text-primary">
      {children}
    </h2>
  )
}

export const Paragraph = ({ children }) => {
  return (
    <p className=" max-w-screen-md mb-4 font-normal text-base leading-relaxed md:leading-normal text-tertiary">
      {children}
    </p>
  )
}

export const InlinePageLink = ({ to, children, title = "Link" }) => {
  return (
    <Link to={to} title={title}>
      <a className="font-medium text-base text-accent hover:text-accent hover:underline">
        {children}
      </a>
    </Link>
  )
}

export const Strong = ({ children }) => {
  return <strong className="font-semibold text-accent">{children}</strong>
}

export const ExtLink = ({ children, link, newTab }) => {
  if (newTab) {
    return (
      <a
        href={link}
        className="font-medium text-accent hover:text-accent hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    )
  } else {
    return (
      <a
        href={link}
        className="font-medium text-accent hover:text-accent hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    )
  }
}

export const ProjectLink = ({ label, url }) => {
  return (
    <span className="font-medium text-tertiary hover:text-accent">
      <a href={url} target="_blank" rel="noopener noreferrer">
        {label}
        <svg
          viewBox="0 0 20 20"
          fill="currentColor"
          className="inline-block w-4 h-4 mb-1"
        >
          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
        </svg>
      </a>
    </span>
  )
}

export const Button = ({ children, link, width }) => {
  let padding = "px-4 py-2"

  if (width === "wide") {
    padding = "px-8 py-2"
  } else if (width === "wider") {
    padding = "px-16 py-2"
  } else if (width === "widest") {
    padding = "px-20 py-2"
  }

  const className = `${padding} rounded bg-accent text-on-accent`

  return (
    <a
      className={className}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  )
}

export const Callout = ({ children }) => {
  return (
    <aside className="bg-secondary border-l-2 border-accent pl-5 pr-3 py-2 rounded-r text-base">
      {children}
    </aside>
  )
}
