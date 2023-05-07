import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <section row="true" nopadding="true">
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        I'm a Front-End Software Developer by passion and an expert by choice
        living now in Nairobi.
        <br />I use react with Tailwind CSS framework to develop user responsive
        web applications.
      </SectionText>
      <Button onClick={() => (window.location = "https:google.com")}>
        Learn More
      </Button>
    </LeftSection>
  </section>
);

export default Hero;
