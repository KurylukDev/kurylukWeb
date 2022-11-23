import { Box, Heading, Text, UnorderedList } from "@chakra-ui/react";
import ContactForm from "../components/form/FormEmail"

export default function HireMe() {
    return (
        <Box>
            <Heading size={"xl"}>Hire me</Heading>
            <Text>
                lorem

            </Text>
            <ContactForm/>
            <Heading color={"gray.500"} margin={"20px 0"} size={"md"}>Project Name</Heading>
            <Text color={"gray.500"}>
                Agregar Curriculum + Boton de descarga
            </Text>
            <UnorderedList color={"gray.500"} margin={"10px"} paddingLeft={"25px"}>
                <li>Info #1</li>
                <li>Info #2</li>
                <li>Info #3</li>
                <li>Info #4</li>
                <li>Info #5</li>
            </UnorderedList>
            <Text color={"gray.500"}>
            Info
            </Text>
            <Text marginTop={"20px"}>
            Info
            </Text>
            <Text color={"orange"}>Info</Text>
            <Text color={"red"}>Info</Text>
        </Box>
    )
}