import { Box, Heading, Text, Flex } from "@chakra-ui/react";
import PresentationCard from "../components/ui/presentation-card";

function TechIcon({ id }) {
    return (
        <Box height={"45px"} margin={"5px"}>
            <img height={"100%"} width={"450px"} src={"/icons/technologies/" + id + ".webp"} alt={id + " icon"}/>
        </Box>
    )
}
export default function Home() {
    return (
        <>
        <Box>
            <PresentationCard />

            <Box marginTop={"20px"}>
                <Heading size={"xl"}>Who am i?</Heading>
                <Text>
                    My name is Simon, I am a 22yo programmer from Argentina who likes to develop
                    📖 libraries, 💻 APIs, 💜 utilities for People, 🎮 games, 💸 crypto and many more
                    varied things that come from my imagination.
                </Text>

                <Text marginTop={"20px"}>
                    I am very passionate about 💻​ web programming and 📱​ mobile, I am fullstack but I
                    prefer frontend.
                </Text>

                <Text marginTop={"20px"}>
                    I really like ⚛️​ react and 💙​ Typescript. I also like the 🧉 Mate, Dulce de 
                    leche, 🥐 Media lunas and 🍨 Menta Granizada ice cream.
                </Text>
            </Box>
        </Box>

        <Box>

            <Box marginTop={"20px"}>
                <Heading size={"xl"}>Technology</Heading>
            </Box>
            <Flex marginTop={"5px"}>
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
            </Flex>
        </Box>
        </>
    )
}