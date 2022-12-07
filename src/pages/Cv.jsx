import { Box, Heading, Text, Button } from "@chakra-ui/react";

export default function Cv() {
    return (
        <Box>
            <Heading display={"flex"} justifyContent={"space-between"} size={"xl"}>Hire me
            <Button
              as="a"
              href="/cv.pdf"
              download="/cv.pdf"
              >Download</Button></Heading>
            <Text color={"gray.500"}>
                Agregar Curriculum + Boton de descarga
            </Text>
            <Box justifyContent={"center"} display={"flex"}  height={{ base:"70vh", sm:"80vh",md:"80vh"}}>
                <embed
                src="/cv.pdf"
                type="application/pdf"
                width={"100%"}
                height={"100%"}
                ></embed>
            </Box>
        </Box>
    )
}