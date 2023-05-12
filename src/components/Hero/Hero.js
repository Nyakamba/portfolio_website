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
        I have a passion for Front-End Software Development, and I am an expert
        in this field by choice. Currently, I reside in Nairobi. <br />
        My preferred technology stack involves React and Tailwind CSS framework
        for developing responsive web applications that cater to user(s) needs.
      </SectionText>
      <Button
        onClick={() =>
          (window.location = "https://www.linkedin.com/in/enockomwega/")
        }
      >
        Learn More
      </Button>
    </LeftSection>
  </section>
);

export default Hero;
