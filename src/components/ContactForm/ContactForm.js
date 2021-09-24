import React, {useState} from 'react';
import Link from 'next/dist/client/link';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { ContentField, Input, SendButton, Form } from './ContactFormStyle';
import Button from '../../styles/GlobalComponents/Button';


function ContactForm() {

    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [subject, setsubject] = useState("");
    const [message, setmessage] = useState("");

    return (
        <Section id="contact">
            <SectionDivider />
            <SectionTitle main style={{marginBottom: "30px"}} >Contact</SectionTitle>
            <Form action="submit">
            <Input value='' placeholder="Full name"/>
            <Input value='' placeholder="Email" required/>
            <Input value='' placeholder="Subject" required/>
            <ContentField placeholder="Message" required/>
            <SendButton style={{margin: "0 auto 40px"}}>Send Mail</SendButton>
            <h4>{name}</h4>
            </Form>
        </Section>
    )
}

export default ContactForm
