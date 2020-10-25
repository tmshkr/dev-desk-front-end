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
  Button,
  Collapse,
  Input,
  Text,
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
  } = useForm();

  const [isLoading, setLoading] = useState(false);
  const [httpError, setHTTPError] = useState("");

  const onSubmit = (values: any) => {
    setLoading(true);
    setHTTPError("");
  };

  return (
    <Box margin="7rem auto 0" padding={3} maxWidth={500}>
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
        </FormControl>
      </form>
    </Box>
  );
};

export default CreateTicket;
