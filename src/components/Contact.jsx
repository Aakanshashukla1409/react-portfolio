import {contactData} from "../data/contactData"

function Contact() {
  return (
    <section id="contact">
      <h2>{contactData.title}</h2>
      <p><a href={`mailto:${contactData.Email}`}>
    {contactData.Email}
  </a>
  </p>

  <p>
    <a 
      href ={contactData.LinkedIn}
      target="_blank"     
      >Linkedin
      </a>
  </p>

    </section>
  )
}

export default Contact
