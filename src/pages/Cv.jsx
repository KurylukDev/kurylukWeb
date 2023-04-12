import { Box, Heading, Button } from "@chakra-ui/react";
import '../styles/index.css'

export default function Cv() {
    return (
        <Box>
            <Heading display={"flex"} justifyContent={"space-between"} size={"xl"}>CV
            <Button fontSize={'15px'}
            as="a"
            href="/cv.pdf"
            download="/cv.pdf"
            >Download</Button>
            <Button fontSize={'15px'}
            as="a"
            href="/cv.pdf"
            download="/cv.pdf"
            >Download - Low color printing</Button></Heading>
            <Box marginTop={"10px"} justifyContent={"center"} display={"flex"} boxShadow='dark-lg'>
                <img
                alt="CV"
                src="/kurylukCv.png"
                width={"100%"}
                height={"100%"}
                ></img>
            </Box>
        </Box>
    )
}