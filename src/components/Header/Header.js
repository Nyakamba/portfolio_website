import Link from "next/link";
import React from "react";
import {
  AiFillGithub,
  AiFillFacebook,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link legacyBehavior href="/">
        <a
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
            marginBottom: "10px",
          }}
        >
          <DiCssdeck size="3rem" /> <Span>ENOCK.</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link legacyBehavior href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link legacyBehavior href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link legacyBehavior href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/Nyakamba">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/enockomwega/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.facebook.com/nyakamba.omwe">
        <AiFillFacebook size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://twitter.com/OmwegaEnock">
        <AiFillTwitterCircle size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
