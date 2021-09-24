import React, {useState} from 'react';
import Link from 'next/dist/client/link';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { ContentField, Input, SendButton, Form } from './ContactFormStyle';
import Button from '../../styles/GlobalComponents/Button';


function ContactForm() {

    const [mail, setMail] = useState("name: '', email: '', subject: '', message: ''");

    const handleNameChange = (event) =>{
        setMail({name: event.target.value})
    }
    const handleMailChange = (event) =>{
        setMail({email: event.target.value})
    }
    const handleSubjectChange = (event) =>{
        setMail({subject: event.target.value})
    }
    const handleMessgaeChange = (event) =>{
        setMail({message: event.target.value})
    }

    const sendMeassage = (e, mail) =>{
        e.preventDefault();
        setMail({name: '', email: '', subject: '', message: ''});
        alert('Your message has been sent. I will get back to you as soon as possible. Thank You!')
    }

    return (
        <Section id="contact">
            <SectionDivider />
            <SectionTitle main style={{marginBottom: "30px"}} >Contact</SectionTitle>
            <Form onSubmit={(event) => sendMeassage(event, mail)} action="submit" method="POST">
            <Input id='Fullname' value={mail.name} onChange={handleNameChange} placeholder="Full name"/>
            <Input id='Email' value={mail.email} placeholder="Email" onChange={handleMailChange} required/>
            <Input id='Subject' value={mail.subject} placeholder="Subject" onChange={handleSubjectChange} required/>
            <ContentField id='Message' value={mail.message} placeholder="Message" onChange={handleMessgaeChange} required/>
            <SendButton style={{margin: "0 auto 40px"}}>Send Mail</SendButton>
            </Form>
        </Section>
    )
}

export default ContactForm
