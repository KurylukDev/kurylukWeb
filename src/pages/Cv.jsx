import { Box, Heading, Button } from "@chakra-ui/react";
import '../styles/index.css'

export default function Cv() {
    return (
        <Box>
            <Heading display={"flex"} justifyContent={"space-between"} size={"xl"}>
            <Button fontSize={'0.9rem'}
            as="a"
            href="/kurylukCv.pdf"
            download="/cv.pdf"
            >Download</Button>
                <img
                alt="CV"
                src="/cv2.JPG"
                width={"100%"}
                height={"100%"}
                ></img>
            </Box>
        </Box>
    )
}
