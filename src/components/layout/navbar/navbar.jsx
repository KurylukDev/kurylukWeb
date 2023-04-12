import { Box, Flex } from "@chakra-ui/react";

import { BsHouse, BsFolder, BsPersonBadge, BsSave} from "react-icons/bs"
import { BsDiscord, BsGithub, BsLinkedin, BsTwitter, BsWhatsapp } from "react-icons/bs"

import SocialButton from "./social-button";

import styles from "./navbar.module.css";
import PageButton from "./page-button";

export default function Navbar() {
    return (
        <Box className={styles["navbar"]}>
            <Box className={styles["content"]} backgroundColor={"purple.900"}>
                <Box>
                    <PageButton Icon={BsHouse} link={"/"} alt="home">Me</PageButton>
                    <PageButton Icon={BsFolder} link={"/projects"} alt="projects">Projects</PageButton>
                    <PageButton Icon={BsPersonBadge} link={"/hireme"} alt="hirme">Hire Me</PageButton>
                    <PageButton Icon={BsSave} link={"/Cv"} alt="cv">CV</PageButton>
                </Box>
                <Flex className={styles["social"]}>
                    <SocialButton Icon={BsDiscord} link="https://discord.gg/tUxckJcjtH" scheme="teal" alt="discord"/>
                    <SocialButton Icon={BsTwitter} link="https://twitter.com/SifekTft" scheme="twitter" alt="twitter" />
                    <SocialButton Icon={BsGithub} link="https://github.com/KurylukDev" scheme="gray" alt="github" />
                    <SocialButton Icon={BsLinkedin} link="https://www.linkedin.com/in/simon-femia-kuryluk/" scheme="linkedin"  alt="linkedin"/>
                    <SocialButton Icon={BsWhatsapp} link="https://api.whatsapp.com/send?phone=5491161280034&text=hola" scheme="whatsapp" alt="whatsapp" />
                </Flex>
            </Box>
        </Box>
    )
}