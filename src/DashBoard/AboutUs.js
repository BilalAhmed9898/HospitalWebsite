import React from 'react'
import '../App.css';
import Hospital from '../Assests/hospital.jpg';
function AboutUs() {

  document.title = "About Us | Al-Shams Hospital";
  return (

    <div className='container-fluid p-2 '>
      <div className='container' >
        <h1>About Us</h1>
        <p>
          Al Shams hospital has been servicing the local community since 1999.  Watsonia Road Medical Centre, a new purpose-built clinic opened in 2019 to cater for the growing needs of our patients.  The doctors from both clinics have always endeavoured to provide the highest quality of service with professionalism and compassion.  With the wide range of special areas of interest, expertise and skills among the medical staff at the two clinics, you will find all your healthcare needs will be well managed.  All the staff believe in holistic management of each individual, encompassing mental, physical and emotional health.
          We look after patients from all age groups from a diversity of backgrounds.  All our medical staff participate in ongoing education to provide the best evidence base, up-to-date health advice and management.  Both clinics are RACGP accredited teaching practices which are involved in the ongoing education of the next generation of doctors and medical staff.
          New and existing patients are welcome to visit us at either clinic.  We continue to provide the trustworthy, reliable and friendly medical service we have always been proud of.
        </p>
        <img src={Hospital} width={'80%'} alt="My Image" />
      </div>
    </div>
  )
}

export default AboutUs