import React from 'react';
import Link from 'next/dist/client/link';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { ContentField, Input, SendButton } from './ContactFormStyle';
import Button from '../../styles/GlobalComponents/Button';


function ContactForm() {
    return (
        <Section id="contact">
            <SectionDivider />
            <SectionTitle main style={{marginBottom: "30px"}} >Contact</SectionTitle>
            <Input placeholder="Full name"/>
            <Input placeholder="Email"/>
            <Input placeholder="Subject"/>
            <ContentField placeholder="Message"/>
            <SendButton style={{margin: "0 auto 40px"}}>Send Mail</SendButton>
        </Section>
    )
}

export default ContactForm
