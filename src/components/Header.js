import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: sajaddaneshmand79@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/saji2000",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/sajad-danesh/",
  },
  // {
  //   icon: faMedium,
  //   url: "https://medium.com",
  // },
  // {
  //   icon: faStackOverflow,
  //   url: "https://stackoverflow.com",
  // },
];

const internals = [
  {
    description: "Certificates",
    id: "certificates",
  },
  {
    description: "Projects",
    id: "projects",
  },
  {
    description: "Contact Me",
    id: "contactme",
  },
];

const Header = () => {
  const handleClick = (anchor) => (event) => {
    event.preventDefault();
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={4}>
              {socials.map(({ icon, url }) => (
                <a key={url} href={url} target="_blank">
                  <FontAwesomeIcon icon={icon} size="2x" />
                </a>
              ))}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              {internals.map(({ description, id }) => (
                <a key={id} href={`/#${id}`} onClick={handleClick(id)}>
                  {description}
                </a>
              ))}
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
