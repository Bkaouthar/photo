import React from "react"
import { Heading } from "../common/Heading"
import { about } from "../data/dummydata"

export const About = () => {
  return (
    <>
      <section className='about'>
        <div className='container flex'>
          {about.map((val) => (
            <>
              
              <div>
                <Heading title='About Me' />
               
                <p>{val.desc}</p>
                <p>{val.desc1}</p>
              </div>
            </>
          ))}
        </div>
      </section>
    </>
  )
}
