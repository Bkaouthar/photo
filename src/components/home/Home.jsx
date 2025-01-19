import React from "react"
import { About } from "../pages/About"
import { Contact } from "../pages/Contact"
import { Portfolio } from "../pages/Portfolio"
import { Testimonials } from "../pages/Testimonials"
import { Hero } from "./Hero"

export const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Portfolio />
      <Testimonials />
      <Contact />
    </>
  )
}
