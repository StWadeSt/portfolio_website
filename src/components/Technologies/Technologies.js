import React from 'react';
import { DiFirebase, DiReact, DiJavascript, DiJava, DiPhp, DiGit, DiMsqlServer, DiAndroid } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TechIcons, TechIconList, List, ListParagraph } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider style={{marginBottom: "30px"}}/>
    <SectionTitle style={{marginBottom: "20px"}}>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies. From Back-end to Front-end.
    </SectionText>
    <List>
      <TechIconList>
        <TechIcons><DiPhp size="10rem"/><ListParagraph>PHP</ListParagraph></TechIcons>
        <TechIcons><DiReact size="10rem"/><ListParagraph>Reactjs</ListParagraph></TechIcons>
        <TechIcons><DiAndroid size="10rem"/><ListParagraph>Android</ListParagraph></TechIcons>
        <TechIcons><DiJava size="10rem"/><ListParagraph>Java</ListParagraph></TechIcons>
        <TechIcons><DiJavascript size="10rem"/><ListParagraph>Javascript</ListParagraph></TechIcons>
        <TechIcons><DiFirebase size="10rem"/><ListParagraph>Firebase</ListParagraph></TechIcons>
        <TechIcons><DiGit size="10rem"/><ListParagraph>Git</ListParagraph></TechIcons>
      </TechIconList>
    </List>
  </Section>
);

export default Technologies;
