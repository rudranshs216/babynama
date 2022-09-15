import Head from 'next/head'
import React from 'react'
import FAQComponent from '../components/FAQComponent'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const FAQ = () => {
    return (
        <div>
            <Head>
                <title>BabyNama - FAQ</title>
                <link rel="icon" href="images/ff.webp" type="image/x-icon" />
                <link rel="shortcut icon" type="image/x-icon" href="images/ff.webp" />
            </Head>
            <Navbar />

            <div className='pt-32'>
                <h1 className='text-3xl text-[#242660] lg:text-5xl font-bold mb-12 text-center'>FAQ's</h1>
                <div className='flex flex-col m-4 lg:flex-row justify-center gap-5 pb-24 pt-12'>

                    <div className='flex flex-col gap-2'>
                        <FAQComponent Heading="What is an Online Consultation on Babynama?" Paragraph='The online visit is the process where patients can speak to a doctor via video call/ audio call/ Whatsapp chat and get treatment without visiting the doctor physically within 10 min.' />
                        <FAQComponent Heading="Who can receive services through Online visit?" Paragraph='Everyone can receive services through online consultation but we are serving children from 0-18 years for now.' />
                        <FAQComponent Heading="Why should I use it?" Paragraph='It is convenient, instant, affordable and help you connect to India’s Top Pediatrician. You will get doctor within 10 minutes on your phone.' />
                        <FAQComponent Heading="How can I book an appointment?" Paragraph='You have to just click on “call to a doctor” icon on site and enter your phone number , our doctor will call you in 10 minutes.' />
                        <FAQComponent Heading="Do I have access to a doctor 24x7?" Paragraph='Yes, our doctors are available 24x 7 for consultation.' />
                        <FAQComponent Heading="Will the Doctor have access to my medical records?" Paragraph='No, only a patient can have access to his medical records. Doctor can only open patient medical file only during consultation.' />
                        <FAQComponent Heading="Can a Doctor diagnose my condition through a virtual visit?" Paragraph='Yes, 95% diagnosis can be made via history only and looking at patients only. Only few diagnosis needs physical visit to confirm the diagnosis.' />
                        <FAQComponent Heading="In how much time will I get a call from the doctor after booking an appointment ?" Paragraph='You will get a call from our doctor within 10 minutes after appointment.' />
                        <FAQComponent Heading="Do I need to visit a doctor after online consultation?" Paragraph='No, You do not have to visit a doctor after online consultation. In some cases if the doctor thinks of a need for physical visit, in those cases you need to visit a doctor.' />
                        <FAQComponent Heading="If I need to visit a doctor, will the platform provide that service?" Paragraph='Yes, we have babynama certified clinics where you can visit a doctor.' />
                        <FAQComponent Heading="How can I opt for a subscription plan?" Paragraph='Click on the subscription icon, you will get all the plans. You can choose the plan and pay for it via payment gateway.' />
                        <FAQComponent Heading="What are all services provided in subscription plans?" Paragraph='This will be according to the subscription plan.' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <FAQComponent Heading="Can I gift my friend the subscription plan?" Paragraph='Yes, you can gift this service to all your friends and relatives.' />
                        <FAQComponent Heading="How do I add my friends to the community?" Paragraph='You can share a WhatsApp group link given on site.' />
                        <FAQComponent Heading="How do I join the facebook community of Babynama?" Paragraph='Click on the link given on site and join the community.' />
                        <FAQComponent Heading="What are other services provided by the platform?" Paragraph='We provide tracking of growth, development, milestones, nutritional counselling and diet charts for children. Apart from these we also provide a second opinion consultation and report reviewing.' />
                        <FAQComponent Heading="Can I get an opinion about reports of my baby?" Paragraph='Yes , you can get your reports reviewed with us.' />
                        <FAQComponent Heading="Can I get a second opinion about treatment my child is receiving from another doctor?" Paragraph='Yes, can second opinion about ongoing treatment of your child.' />
                        <FAQComponent Heading="Can I get the same doctor for consultation if I want?" Paragraph='Yes, but you have to book available time slot for the doctor you want.' />
                        <FAQComponent Heading="Will I get a different doctor every time I book consultation?" Paragraph='As we are providing a 24x7 service, we will provide the doctor available at that time. The doctor can be same or different as per availability of doctor.' />
                        <FAQComponent Heading="What will be the total duration of one consultation?" Paragraph='The total duration of consultation will be 5 minutes.' />
                        <FAQComponent Heading="Can I extend my consultation time?" Paragraph='Yes, you can extend the consultation time by paying a fee as per norms.' />
                        <FAQComponent Heading="Can I get a diet chart for my baby?" Paragraph='Yes, you can get a customised diet chart from a nutritionist.' />
                        <FAQComponent Heading="Can I get advice regarding mother health too?" Paragraph='Yes, you can get basic queries resolved by a gynaecologist through our platform.' />

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default FAQ