import { Box, Heading, Flex,  Wrap, WrapItem} from "@chakra-ui/react";
import styles from "./Technology.module.css"

function TechIcon({ id }) {
    return (
        <WrapItem>
        <Box height={"45px"} margin={"5px"}>
            <img height={"100%"} width={"45px"} src={"/icons/technologies/" + id + ".webp"} alt={id + " icon"} title={id}/>
        </Box>
        </WrapItem>
    )
}
export default function Technology() {
    return (
        <Box backgroundColor={"purple.900"} marginTop={"20px"} marginBottom={"10px"} >
            <Box className={styles["page"]}>
            <Box marginTop={"0px"}>
<Heading size={"xl"}>Technology</Heading>
</Box>
<Flex marginTop={"15px"} justify={"start"}>
<Wrap>
<TechIcon id={"html"} />
<TechIcon id={"css"} />
<TechIcon id={"javascript"} />
<TechIcon id={"typescript"} />
<TechIcon id={"react"} />
<TechIcon id={"redux"} />
<TechIcon id={"sass"} />
<TechIcon id={"tailwindcss"} />
<TechIcon id={"nextjs"} />
<TechIcon id={"node"} />
<TechIcon id={"git"} />
<TechIcon id={"github"} />
<TechIcon id={"chakara"} />
</Wrap>
</Flex>
</Box>
</Box>

    )
}