import { aboutData } from "../data/aboutData"

function About() {
  return (
    <section id="about">
      <h2>{aboutData.title}</h2>
      <p>{aboutData.description1}</p>
      <p>{aboutData.description2}</p>
    </section>
  )
}

export default About
