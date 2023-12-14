import { Box, Heading, Text } from "@chakra-ui/react";
import PresentationCard from "../components/ui/presentation-card";
import Technology from "../components/technologies/Technologies"

export default function Home() {
    return (
        <>
        <Box>
            <PresentationCard />

            <Box marginTop={"20px"} marginBottom={"20px"}>
                <Heading size={"xl"}>Who am I?</Heading>
                <Text>
                    My name is Simon, I am a 23yo programmer from Argentina who likes to develop
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
            <Technology/>
        </Box>
        </>
    )
}
