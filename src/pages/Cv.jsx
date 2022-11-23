import { Box, Heading, Text, UnorderedList } from "@chakra-ui/react";
import ContactForm from "../components/layout/form/FormEmail"

export default function Cv() {
    return (
        <Box>
            <Heading size={"xl"}>Hire me</Heading>
            <Text color={"gray.500"}>
                Agregar Curriculum + Boton de descarga
            </Text>
            <Box justifyContent={"center"} display={"flex"}>
                <img
                src="/cv.jpg"
                type="application/pdf"
                width={"80%"}
                height={"80%"}
                ></img>
            </Box>
        </Box>
    )
}