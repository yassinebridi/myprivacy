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
  Textarea
} from "@chakra-ui/core";
import addToMailchimp from "gatsby-plugin-mailchimp";

export default function HookForm() {
  const { handleSubmit, errors, register, formState } = useForm();
  const [subMessage, setSubMessage] = React.useState("");
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
      setSubMessage("There seems to be a problem, try again!");
      setErr(true);
    } else if (result.result === "success") {
      setErr(false);
      setSubMessage("Thanks for contacting us, we will be in touch soon!");
    }
    console.log(result.msg);
  }
  return (
    <Flex my={20}>
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
        <Box>
          <Text
            fontWeight="medium"
            fontSize="lg"
            color={err === true ? "red.500" : "green.500"}
            bg={err === true ? "red.100" : err === false ? "green.100" : null}
            border={
              err === true
                ? "1px solid #f7b3b3"
                : err === false
                ? "1px solid #6bd08b"
                : null
            }
            borderRadius={err === true ? "5px" : err === false ? "5px" : null}
            my={err === true ? 4 : err === false ? 4 : null}
            p={err === true ? 2 : err === false ? 2 : null}
          >
            {subMessage && subMessage}
          </Text>
        </Box>
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
        >
          LOGO
        </Text>
        <Text
          as="h1"
          fontSize="2xl"
          fontWeight="medium"
          letterSpacing={"-.1rem"}
          borderBottom="4px solid"
          mb={4}
        >
          Soley Solutions
        </Text>
        <Link
          fontSize="2xl"
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
          fontSize="2xl"
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
          fontSize="2xl"
          fontWeight="normal"
          letterSpacing={"-.1rem"}
          borderBottom="3px solid"
          href="https://goo.gl/maps/drCd11dvGoeoto7z5"
          isExternal
        >
          Ancienne Route de l’Aéroport, Km 10, Ziaten. BP : 416.
        </Link>
      </Box>
    </Flex>
  );
}
