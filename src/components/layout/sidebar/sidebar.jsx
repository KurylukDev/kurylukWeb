import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";

import styles from "./sidebar.module.css";

function AboutMeSection({ label, value }) {
    return (
        <Flex justifyContent={"space-between"} margin={"10px 0"}>
            <Text fontWeight={"bold"}>{label}</Text>
            <Text>{value}</Text>
        </Flex>
    )
}

export default function Sidebar() {
    return (
        <Box className={styles["sidebar"]}>
            <Box className={styles["content"]} backgroundColor={"purple.900"}>
                <Heading margin={"10px 0"} size={"md"}>👨🏼‍💻​​ About me</Heading>
                <AboutMeSection label={"Age"} value={"22"}/>
                <AboutMeSection label={"Birthday"} value={"Sep, 2"}/>
                <AboutMeSection label={"Country"} value={"Argentina"}/>
                <AboutMeSection label={"State"} value={"Buenos Aires"}/>
            </Box>

            <Box marginTop={"25px"} className={styles["content"]} backgroundColor={"purple.900"}>
                <Heading margin={"10px 0"} size={"md"}>✉️ Contact me </Heading>
                <Text margin={"10px 0"}>
                    If you like the work I do, you can make a donation to motivate me to continue contributing to the open source industry.
                </Text>

                <Button
                    as={"a"}
                    margin={"10px 0"}
                    display={"flex"}
                    justifyContent={"center"}
                    colorScheme={"purple"}
                    href={"mailto:simonfk2000@gmail.com"}
                    target={"_blank"}
                    referrerPolicy={"no-referrer"}
                >Email</Button>
                
                <Button
                    as={"a"}
                    margin={"10px 0"}
                    display={"flex"}
                    justifyContent={"center"}
                    colorScheme={"purple"}
                    href={"https://www.linkedin.com/in/simon-femia-kuryluk/"}
                    target={"_blank"}
                    referrerPolicy={"no-referrer"}
                >Linkedin</Button>
            </Box>
        </Box>
    )
}