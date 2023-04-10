import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Box } from "@chakra-ui/react";
import styles from './FormEmail.module.css'
function ContactForm() {
  const [state, handleSubmit] = useForm("mvoyyebw");
  if (state.succeeded) {
      return <p color='#fff'>Thanks for contact me!</p>;
  }
  return (
      <Box className={styles["formStyle"]}>
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
        <button type="submit" disabled={state.submitting}>
         Submit
       </button>
      </Box>
    );
  }
  function App() {
    return (
      <ContactForm />
      );
    }
    export default App;