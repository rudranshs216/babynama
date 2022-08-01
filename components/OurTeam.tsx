import React from 'react'
import DoctorProfile from './DoctorProfile'

const OurTeam = () => {
    return (
        <div id='doctor' className='py-12 flex flex-col justify-center items-center bg-[#f5f6fe] '>
            <h1 className='sm:text-5xl text-3xl mb-4 font-semibold'>Our Team</h1>
            <div className='sm:p-4 flex flex-wrap justify-center'>

                <DoctorProfile Name="Dr. Sumitra Meena" Degree="MBBS, MD Paediatrics (Kalawati Hospital)" Para="8 years experience
Ex resident safdarjung hospital" Img="/images/doc/sumitra.webp" />
                <DoctorProfile Name="Dr. Vandna Kasana
" Degree="MBBS, MD Paediatrics(Kalawati Hospital)" Para="8 years experience
Ex resident safdarjung hospital
Consultant paediatrician and newborn specialist
Vandna child clinics, Ghitorni , New Delhi" Img="/images/doc/vandna.webp" />
                <DoctorProfile Name="Dr. Rajat Goswami" Degree="MD Paediatrics (Kalawati Hospital)" Para="10 years experience Consultant paediatrician and newborn specialist Blossoms kids clinics, Rohini, New Delhi" Img="/images/doc/Rajat.webp" />
                <DoctorProfile Name="Dr. Priyanka Tiwari" Degree="MBBS, DNB Paediatrics (Safdarjung Hospital)" Para="10 years experience Consultant paediatrician and newborn specialistJaypee Hospital, Noida" Img="/images/doc/Priyanka.webp" />
                <DoctorProfile Name="Dr. Garima yadav" Degree="MBBS, MD Paediatrics (MAMC)" Para="8 years of experience Consultant paediatrician and newborn specialist Garima Hospital, Gurugram" Img="/images/doc/Garima.webp" />
            </div>

        </div>
    )
}

export default OurTeam
