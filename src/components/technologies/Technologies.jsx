import { Box, Heading, Flex,  Wrap, WrapItem} from "@chakra-ui/react";
import styles from "./Technology.module.css"

function TechIcon({ id }) {
    return (
        <WrapItem>
        <Box height={"45px"} margin={"5px"}>
            <img height={"100%"} width={"100%"} src={"/icons/technologies/" + id + ".webp"} alt={id + " icon"}/>
        </Box>
        </WrapItem>
    )
}
export default function Technology() {
    return (
        <Box backgroundColor={"purple.900"} marginTop={"20px"} >
            <Box className={styles["page"]}>
            <Box marginTop={"0px"}>
<Heading size={"xl"}>Technology</Heading>
</Box>
<Flex marginTop={"5px"}>
<Wrap>
<TechIcon id={"csharp"} />
<TechIcon id={"electron"} />
<TechIcon id={"graphql"} />
<TechIcon id={"html"} />
<TechIcon id={"java"} />
<TechIcon id={"javascript"} />
<TechIcon id={"mongodb"} />
<TechIcon id={"mysql"} />
<TechIcon id={"nestjs"} />
<TechIcon id={"nginx"} />
<TechIcon id={"nodejs"} />
<TechIcon id={"python"} />
<TechIcon id={"react"} />
<TechIcon id={"redis"} />
<TechIcon id={"relay"} />
<TechIcon id={"typescript"} />
<TechIcon id={"unity"} />
</Wrap>
</Flex>
</Box>
</Box>

    )
}