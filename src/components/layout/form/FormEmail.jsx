import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Box, Button, Text } from "@chakra-ui/react";
import styles from './FormEmail.module.css'
function ContactForm() {
  const [state, handleSubmit] = useForm("mvoyyebw");
  if (state.succeeded) {
      return ( 
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"}>
          <img className={styles["imgSend"]} src="/mail.gif" alt="" />
          <Text fontWeight={"bold"} color={"green"} fontSize={"2rem"}>Thank You</Text>
          
      </Box>
      )
  }
  return (
      <Box className={styles["formStyle"]}>
        <form onSubmit={handleSubmit}>
        <Box className={styles["form-group"]}>
          <label htmlFor="email">
            Your Email
            <input
          id="email"
          name="email"
          placeholder='email'
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
          </label>
        </Box>
        <Box className={styles["form-group"]}>
          <label htmlFor="message">
            Your message
            <textarea
          id="message"
          name="message"
          placeholder="message"
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
          </label>
        </Box>
        <Button bg={"#BCB4B4"} type="submit" disabled={state.submitting}>
          Send
        </Button>
        </form>
      </Box>
    );
  }
  function App() {
    return (
      <ContactForm />
      );
    }
    export default App;