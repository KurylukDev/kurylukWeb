import {
  Box,
  Flex,
  Heading,
  Image,
  Input,
  SimpleGrid,
  Tag,
  TagLabel,
  Text,
  Button,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
    useDisclosure,
} from "@chakra-ui/react";
import React from 'react'

import { useEffect, useState } from "react";

var setCategory;
var category;

function CategoryButton({ data }) {
  const { label, id, projects } = data;
  return (
    <Tag
      size={"md"}
      borderRadius="full"
      variant="solid"
      bg={id === category ? "#7099" : "gray.700"}
      color={id === category ? "#fff" : "white"}
      cursor={"pointer"}
      margin={"5px 0"}
      marginRight={"10px"}
      onClick={() => {
        setCategory(id);
      }}
    >
      <TagLabel>{label}</TagLabel>
      <TagLabel marginLeft={"3px"}>({projects})</TagLabel>
    </Tag>
  );
}

function ProjectCard({ link, name, description, categories, thumb }) {
      {/* FUNCION MODAL OPEN AND CLOSE */}
  const { isOpen, onOpen, onClose } = useDisclosure()


    return (
      <>
      <Box
      onClick={onOpen}
        target="_blank"
        referrerPolicy="no-referrer"
        cursor="pointer"
        transition=".1s all ease-in-out"
        _hover={{
          transform: "scale(1.02)",
        }}
      >
        <Image src={thumb} borderRadius={"10px 10px 0 0"} width={"450px"} height={"150px"} margin={"auto"} alt={name}/>
        <Box
          backgroundColor={"purple.800"}
          padding={"10px"}
          borderRadius={"0 0 10px 10px"}
        >
          <Heading size={"sm"}>{name}</Heading>
          <Text color={"gray.300"} fontSize={"15px"}>
            {description}
          </Text>
  
          {categories.map((item, index) => (
            <Tag
            key={index}
            marginTop={"10px"}
            marginRight={"2px"}
            size={"md"}
            borderRadius="full"
            variant="solid"
            bg={"#7099"}
            color={"#fff"}
            >
              <TagLabel>{item}</TagLabel>
            </Tag>
          ))}
        </Box>
      </Box>
  
      {/*MODAL DEL PROYECTO*/}
  
        <Modal closeOnOverlayClick={true} isOpen={isOpen} onClose={onClose} closeOnEsc={true} size={"6xl"}  motionPreset='slideInBottom'>
        <ModalOverlay />
        <ModalContent >
        <ModalHeader><p>{name} - {categories[2]}</p></ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6} >
            <Flex flexDirection={{ base:"column", sm:"column", md:"row"}}>
        <Box
          backgroundColor={"purple.800"}
          padding={"10px"}
          borderRadius={{base:"10px 10px 0 0",md:"10px 0 0 10px"}}
          minWidth={{base:"100%", md:"50%"}}
          width={{ base:"100%", sm:"250px",md:"50%"}}
          >
          <Heading size={"xl"}>{name}</Heading>
          <Text color={"gray.300"} fontSize={"15px"}>
            {description}
          </Text>
  
          {categories.map((item, index) => (
            <Tag
            key={index}
            marginTop={"10px"}
            marginRight={"2px"}
            size={"md"}
            borderRadius="full"
            variant="solid"
            bg={"#7099"}
            color={"#fff"}
            >
              <TagLabel>{item}</TagLabel>
            </Tag>
          ))}
        </Box>
          <Image src={thumb} borderRadius={{base:"0px 0px 10px 10px", md:"0px 10px 10px 0"}} width={{ base:"100%", md:"50%"}} alt={name} />
          </Flex>
        </ModalBody>
    
        <ModalFooter>
          <Button colorScheme='blue' mr={3}
          as="a"
          href={link}
          target="_blank"
          referrerPolicy="no-referrer"
          cursor="pointer"
          transition=".1s all ease-in-out"
          _hover={{
            transform: "scale(1.05)",
          }}>
          Live
          </Button>
          <Button
              as="a"
              href={link}
              target="_blank"
              referrerPolicy="no-referrer"
              cursor="pointer"
              transition=".1s all ease-in-out"
              _hover={{
                transform: "scale(1.05)",
              }}
          >Github</Button>
        </ModalFooter>
        </ModalContent>
      </Modal>
      </>
    );
  }


function ProjectDeck({ projects, categories }) {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Box>
      <Box>
        <Box>
          <Input
            placeholder="Search anything"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
            />
        </Box>
        <Box marginTop={"10px"}>
          <CategoryButton
            data={{ label: "All", projects: projects.length, id: "*" }}
            />
          {categories.map((item, index) => (
            <CategoryButton data={item} key={index} />
            ))}
        </Box>
      </Box>

      <Box marginTop={"30px"}>
        <SimpleGrid minChildWidth={"180px"} spacing={10}>
          {projects.filter((item) => {
            const term = searchTerm.toLowerCase();
            const name = item.name.toLowerCase();
            const desc = item.description.toLowerCase();
            
            return name.includes(term) || desc.includes(term);
          })
          .filter((item) => {
            return category === "*"
            ? true
            : item.categories.includes(category);
          })
          .map((item, index) => (
            <ProjectCard
            key={index}
            name={item.name}
            description={item.description}
            categories={item.categories}
            thumb={item.thumbnail}
            link={item.link}
            />
            ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default function Projects() {
  const [categories, setCategories] = useState([]);
  const [projects, setProjects] = useState([]);
  [category, setCategory] = useState("*");

  useEffect(() => {
    async function fetchData() {
      const req = await fetch("/projects.json");
      const json = await req.json();
      const { projects, categories } = json;

      for (const project of projects) {
        for (const category of categories) {
          if (project.categories.includes(category.id)) {
            if (!category.projects) {
              category.projects = 1;
            } else {
              category.projects++;
            }
          }
        }
      }

      setProjects(projects);
      setCategories(categories);
    }

    fetchData();
  }, []);

  return (
    <>
      {projects && categories && (
        <ProjectDeck projects={projects} categories={categories} />
      )}
    </>
  );
}
