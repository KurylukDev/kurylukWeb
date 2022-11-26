import React from 'react'
import {
	Button,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
    useDisclosure} from "@chakra-ui/react";
import styles from "./modal.module.css";
import {BsSave} from "react-icons/bs"


function CvModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
	return (
		<>
		<Button onClick={onOpen}><BsSave/><p>Cv</p></Button>
  
		<Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
		  <ModalOverlay />
		  <ModalContent>
			<ModalHeader>Create your account</ModalHeader>
			<ModalCloseButton />
			<ModalBody pb={6}>
			</ModalBody>
  
			<ModalFooter>
			  <Button colorScheme='blue' mr={3}>
				Save
			  </Button>
			  <Button onClick={onClose}>Cancel</Button>
			</ModalFooter>
		  </ModalContent>
		</Modal>
	  </>
	)
  }
 
export default CvModal;
