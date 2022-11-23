import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Box } from "@chakra-ui/react";
import styles from './FormEmail.module.css'
function ContactForm() {
  const [state, handleSubmit] = useForm("mvoyyebw");
  if (state.succeeded) {
      return <p color='#fff'>Thanks for joining!</p>;
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

    /* <Box className={styles["login"]}>
   <h2 className={styles["login-header"]}>Contact Me</h2>
  
   <form className={styles["login-container"]} onSubmit={handleSubmit}>
     <p><input
         id="email"
         name="email"
         placeholder='email'
       />
       <ValidationError 
         prefix="Email" 
         field="email"
         errors={state.errors}
       /></p>
     <p><textarea
         id="message"
         name="message"
         placeholder="message"
       />
       <ValidationError 
         prefix="Message" 
         field="message"
         errors={state.errors}
       /></p>
       <button type="submit" disabled={state.submitting}>
         Submit
       </button>
   </form>
  </Box>*/