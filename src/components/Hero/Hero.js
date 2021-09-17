import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br/>
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Im an aspiring software dev looking to spread my wings. I always look for exciting new skills to learn and ways to improve on existing ones.
      </SectionText>
      <Button onClick={() => window.scrollTo(0,document.about)}>Get in touch</Button>
    </LeftSection>
  </Section>
);

export default Hero;