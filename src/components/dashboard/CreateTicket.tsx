import React, { useRef, useState } from "react";
import { RouteComponentProps, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  Box,
  FormControl,
  FormLabel,
  FormHelperText,
  Checkbox,
  CheckboxGroup,
  InputLeftElement,
  Button,
  Collapse,
  Textarea,
  Input,
  Icon,
  InputGroup,
  Text,
  Tag,
  Flex,
  Heading,
} from "@chakra-ui/core";

import axios from "axios";

interface Props extends RouteComponentProps<any> {}

const CreateTicket: React.FC<Props> = (props) => {
  const { history, location } = props;
  const {
    register,
    handleSubmit,
    setValue,
    errors,
    getValues,
    unregister,
    watch,
  } = useForm();

  const [isLoading, setLoading] = useState(false);
  const [httpError, setHTTPError] = useState("");
  const [categories, setCategories] = useState(["javascript", "html", "css"]);

  const onSubmit = (values: any) => {
    setLoading(true);
    setHTTPError("");
    console.log(values);
  };

  return (
    <Box margin="3rem auto 0" padding={3} maxWidth={500}>
      <Heading as="h2" textAlign="center" mb={9}>
        Create a New Ticket
      </Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <FormLabel htmlFor="title">title</FormLabel>
          <Input
            id="title"
            type="title"
            name="title"
            ref={register({ required: "Please enter a title" })}
          />
          <Text color="#c62828">{errors.title?.message}</Text>
          <FormLabel htmlFor="title">description</FormLabel>
          <Textarea
            id="description"
            type="description"
            name="description"
            ref={register({ required: "Please enter a decription" })}
          />
          <Text color="#c62828">{errors.description?.message}</Text>
          <FormLabel htmlFor="title">what I've tried</FormLabel>
          <Textarea
            id="what_ive_tried"
            type="what_ive_tried"
            name="what_ive_tried"
            ref={register({ required: "Please enter a what you've tried" })}
          />
          <Text color="#c62828">{errors.what_ive_tried?.message}</Text>
          <FormLabel htmlFor="title">categories</FormLabel>
          <Input
            id="categories"
            type="categories"
            name="categories"
            mb={3}
            onKeyUp={(e: any) => {
              if (e.code === "Space") {
                const newCategories = [...categories, e.target.value.trim()];
                setCategories(newCategories);
                e.target.value = "";
              }
            }}
            ref={register()}
          />
          {categories.map((cat, i) => (
            <Tag
              key={i}
              backgroundColor="blue.200"
              margin={1}
              p={"0 0.7rem 0 0.3rem"}
            >
              <Icon
                name="small-close"
                onClick={() => {
                  const newCategories = [...categories];
                  newCategories.splice(i, 1);
                  setCategories(newCategories);
                }}
              />

              {cat}
            </Tag>
          ))}
        </FormControl>
        <Flex justifyContent="center">
          <Button
            variantColor="blue"
            type="submit"
            mt={12}
            isLoading={isLoading}
          >
            Submit
          </Button>
        </Flex>
      </form>
    </Box>
  );
};

export default CreateTicket;
