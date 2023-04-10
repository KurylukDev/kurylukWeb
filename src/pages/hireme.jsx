import { Box, Heading } from "@chakra-ui/react";
import ContactForm from "../components/layout/form/FormEmail"
import styles from '../components/layout/form/FormEmail.module.css'

export default function HireMe() {
    return (
        <Box className={styles["ContactSectionStyle"]}>
        <Box className={styles["container"]}>
        <Box textAlign={"center"}>
        <Heading className={["title"]}><p className={styles["title"]}>Contact</p></Heading>
        </Box>
        <Box className={styles["contactSection__wrapper"]}>
        <ContactForm />
        </Box>
      </Box>
    </Box>
    )
}