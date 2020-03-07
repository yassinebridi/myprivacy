import { useForm } from "react-hook-form";
import React, { useState } from "react";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Box,
  Flex,
  Heading,
  Text,
  Link,
  Grid,
  Textarea,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription
} from "@chakra-ui/core";
import addToMailchimp from "gatsby-plugin-mailchimp";

export default function HookForm() {
  const { handleSubmit, errors, register, formState, reset } = useForm();
  const [err, setErr] = React.useState("");

  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Email is required";
    } else if (
      !/^[a-z0-9\_\.\-]{2,20}\@[a-z0-9\_\-]{2,20}\.[a-z]{2,9}$/.test(value)
    ) {
      error = "Check if your email is written correclty!";
    }
    return error || true;
  }

  function validateMessage(value) {
    let error;
    if (!value) {
      error = "Message is required";
    }
    return error || true;
  }

  function validateName(value) {
    let error;
    if (!value) {
      error = "Name is required";
    }
    return error || true;
  }

  async function onSubmit(values) {
    const result = await addToMailchimp(values.email, {
      NAME: values.name,
      MSG: values.message
    });
    if (result.result === "error") {
      setErr(true);
    } else if (result.result === "success") {
      setErr(false);
      reset();
    }
  }
  return (
    <Grid
      templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
      gap={[0, 0, 0, 8]}
      px={{ xs: 8, sm: 12, md: 12, lg: 32 }}
      py={{ xs: 12, sm: 8, md: 8, lg: 10 }}
    >
      <Box flexGrow={1} flexBasis={0} mr={15}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl isInvalid={errors.email} mb={8}>
            <Input
              name="email"
              placeholder="Your Email"
              ref={register({ validate: validateEmail })}
              size="lg"
              variant="filled"
            />
            <FormErrorMessage>
              {errors.email && errors.email.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.name} my={8}>
            <Input
              name="name"
              placeholder="Your Name"
              ref={register({ validate: validateName })}
              size="lg"
              variant="filled"
            />
            <FormErrorMessage>
              {errors.name && errors.name.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.message} my={8}>
            <Textarea
              name="message"
              placeholder="Your Message"
              height="222px"
              ref={register({ validate: validateMessage })}
              size="lg"
              variant="filled"
            />
            <FormErrorMessage>
              {errors.message && errors.message.message}
            </FormErrorMessage>
          </FormControl>
          <Button
            variantColor="red"
            size="lg"
            isLoading={formState.isSubmitting}
            type="submit"
          >
            Send
          </Button>
        </form>

        {err === true && (
          <Alert status="error" variant="left-accent" mt={8}>
            <AlertIcon />
            There seems to be a problem, try again!
          </Alert>
        )}
        {err === false && (
          <Alert status="success" variant="left-accent" mt={8}>
            <AlertIcon />
            Thanks for contacting us, we will be in touch soon!
          </Alert>
        )}
      </Box>
      <Box
        flexGrow={1}
        flexBasis={0}
        ml={15}
        display="flex"
        flexDirection="column"
      >
        <Text
          as="h1"
          fontSize="5xl"
          fontWeight="bolder"
          letterSpacing={"-.1rem"}
          mb={4}
          textAlign="right"
          display={["none", "none", "block", "block"]}
        >
          LOGO
        </Text>
        <Text
          as="h1"
          fontSize={["md", "lg", "xl", "2xl"]}
          fontWeight="medium"
          letterSpacing={"-.1rem"}
          borderBottom="4px solid"
          mb={4}
        >
          Soley Solutions
        </Text>
        <Link
          fontSize={["md", "lg", "xl", "2xl"]}
          fontWeight="normal"
          letterSpacing={"-.1rem"}
          borderBottom="3px solid"
          href="mailto:support@soley.tech"
          isExternal
          mb={4}
        >
          support@soley.tech
        </Link>
        <Link
          fontSize={["md", "lg", "xl", "2xl"]}
          fontWeight="normal"
          letterSpacing={"-.1rem"}
          borderBottom="3px solid"
          href="tel:+212614630080"
          isExternal
          mb={4}
        >
          +212 614-630080
        </Link>
        <Link
          fontSize={["md", "lg", "xl", "2xl"]}
          fontWeight="normal"
          letterSpacing={"-.1rem"}
          borderBottom="3px solid"
          href="https://goo.gl/maps/drCd11dvGoeoto7z5"
          isExternal
        >
          Ancienne Route de l’Aéroport, Km 10, Ziaten. BP : 416.
        </Link>
      </Box>
    </Grid>
  );
}
