import { Box, Heading, Text } from "@chakra-ui/react";
import ContactForm from "../components/layout/form/FormEmail"
import styles from '../components/layout/form/FormEmail.module.css'

export default function HireMe() {
    return (
        <Box className={styles["ContactSectionStyle"]}>
        <Box className={styles["container"]}>
        <Box textAlign={"center"}>
            <p className={styles["h2"]}>get in touch</p>
        <Heading className={["title"]}><p className={styles["title"]}>Contact</p></Heading>
        </Box>
        <Box className={styles["contactSection__wrapper"]}>
        <Box className={styles["left"]}>
        <Text bg={"#1E1E1E"} borderRadius={"8px"} minHeight={"500px"}>

        </Text>
        </Box>
        <Box className={styles["right"]}>
        <ContactForm />
        </Box>
        </Box>
      </Box>
    </Box>
    )
}