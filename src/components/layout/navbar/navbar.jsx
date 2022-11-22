import { Box, Flex } from "@chakra-ui/react";

import { BsHouse, BsFolder, BsHammer } from "react-icons/bs"
import { BsDiscord, BsGithub, BsTwitch, BsTwitter, BsYoutube } from "react-icons/bs"

import SocialButton from "./social-button";

import styles from "./navbar.module.css";
import PageButton from "./page-button";

export default function Navbar() {
    return (
        <Box className={styles["navbar"]}>
            <Box className={styles["content"]} backgroundColor={"purple.900"}>
                <Box>
                    <PageButton Icon={BsHouse} link={"/"}>Me</PageButton>
                    <PageButton Icon={BsFolder} link={"/projects"}>Projects</PageButton>
                    <PageButton Icon={BsHammer} link={"/hireme"}>Hire Me</PageButton>
                </Box>
                <Flex className={styles["social"]}>
                    <SocialButton Icon={BsDiscord} link="https://www.youtube.com/watch?v=hPr-Yc92qaY&ab_channel=A2ZHighlights" scheme="teal" />
                    <SocialButton Icon={BsGithub} link="https://www.youtube.com/watch?v=hPr-Yc92qaY&ab_channel=A2ZHighlights" scheme="gray" />
                    <SocialButton Icon={BsTwitch} link="https://www.youtube.com/watch?v=hPr-Yc92qaY&ab_channel=A2ZHighlights" scheme="purple" />
                    <SocialButton Icon={BsTwitter} link="https://www.youtube.com/watch?v=hPr-Yc92qaY&ab_channel=A2ZHighlights" scheme="twitter" />
                    <SocialButton Icon={BsYoutube} link="https://www.youtube.com/watch?v=hPr-Yc92qaY&ab_channel=A2ZHighlights" scheme="red" />
                </Flex>
            </Box>
        </Box>
    )
}