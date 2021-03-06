import React, { useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  Box,
  FormControl,
  FormLabel,
  Button,
  Textarea,
  Input,
  Icon,
  Text,
  Tag,
  Flex,
  Heading,
} from "@chakra-ui/core";

import axios from "axios";

interface Props extends RouteComponentProps<any> {}

const CreateTicket: React.FC<Props> = (props) => {
  const { history } = props;
  const { register, handleSubmit, errors } = useForm();

  const [isLoading, setLoading] = useState(false);
  const [httpError, setHTTPError] = useState("");
  const [categories, setCategories] = useState(["javascript", "html", "css"]);

  const onSubmit = (values: any) => {
    setLoading(true);
    setHTTPError("");
    values.categories = categories;
    console.log(values);
    axios
      .post("/api/tickets", values)
      .then((res) => history.push("/dashboard"))
      .catch((err) => {
        setLoading(false);
        setHTTPError(err.response.data.message);
      });
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
          <Text color="#c62828">{errors.title?.message || "\xa0"}</Text>
          <FormLabel htmlFor="title">description</FormLabel>
          <Textarea
            id="description"
            type="description"
            name="description"
            ref={register({ required: "Please enter a decription" })}
          />
          <Text color="#c62828">{errors.description?.message || "\xa0"}</Text>
          <FormLabel htmlFor="title">what I've tried</FormLabel>
          <Textarea
            id="what_ive_tried"
            type="what_ive_tried"
            name="what_ive_tried"
            ref={register({
              required: "Please describe the steps you've already tried",
            })}
          />
          <Text color="#c62828">
            {errors.what_ive_tried?.message || "\xa0"}
          </Text>
          <FormLabel htmlFor="title">categories</FormLabel>
          <Input
            id="categories"
            type="categories"
            name="categories"
            mb={3}
            onKeyDown={(e: any) => {
              if (["Enter", "Space"].includes(e.code)) {
                e.preventDefault();
                const cat = e.target.value.trim();
                if (cat) setCategories([...categories, cat]);
                e.target.value = "";
              }
            }}
          />
          {categories.map((cat, i) => (
            <Tag
              key={i}
              backgroundColor="blue.200"
              margin={1}
              p={"0 0.7rem 0 0.3rem"}
              cursor="pointer"
              onClick={() => {
                const newCategories = [...categories];
                newCategories.splice(i, 1);
                setCategories(newCategories);
              }}
            >
              <Icon name="small-close" />

              {cat}
            </Tag>
          ))}
        </FormControl>
        <Flex justifyContent="center">
          <Text color="#c62828">{httpError || "\xa0"}</Text>
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
