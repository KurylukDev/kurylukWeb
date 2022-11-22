import { Avatar, Badge, Box, Flex, Heading, Text } from "@chakra-ui/react";


export default function PresentationCard() {
    return (
        <Flex>
        <Box>
            <Box>
                <Avatar size="2xl" src="/favicon.jpg" />
            </Box>
            <Box textAlign={"center"}>
                <Badge colorScheme={"green"}>Available to Email</Badge>
            </Box>
        </Box>
        <Box marginLeft={"20px"}>
            <Heading size={"xl"}>Simon Femia Kuryluk</Heading>
            <Text>⚛️ React frontend dev, backend on Python.</Text>
            <Text>☕ Web dev and Mobile dev with 1 years of experience.</Text>
            <Text>💖 Coding solutions for people.</Text>

            <Flex paddingBottom={"5px"} borderBottom={"2px"} width={"100%"}>
                <Text>
                📖 Autodidacta.
                </Text>
            </Flex>
        </Box>
    </Flex>
    )
}