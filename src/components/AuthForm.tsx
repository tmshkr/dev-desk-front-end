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

const AuthForm: React.FC<Props> = (props) => {
  const { history, location } = props;
  const {
    register,
    handleSubmit,
    setValue,
    errors,
    getValues,
    unregister,
  } = useForm();

  const isRegistering = /\/register/.test(location.pathname);
  const [isLoading, setLoading] = useState(false);
  const [httpError, setHTTPError] = useState("");
  const rolesRef = useRef([]);
  if (isRegistering) {
    register(
      { name: "roles" },
      {
        validate: (arr) => arr.length > 0 || "Please select a role",
        required: "Please select a role",
      }
    );
    if (!getValues().roles) setValue("roles", rolesRef.current);
  } else {
    const { roles } = getValues();
    if (roles) rolesRef.current = roles;
    unregister(["roles", "name"]);
  }

  const onSubmit = (values: any) => {
    setLoading(true);
    setHTTPError("");
    if (isRegistering) {
      axios
        .post("/api/auth/register", values)
        .then((res) => {
          const { token } = res.data;
          localStorage.setItem("token", token);
          axios.defaults.headers["Authorization"] = `Bearer ${token}`;
          history.push("/dashboard");
        })
        .catch((err) => {
          setLoading(false);
          setHTTPError(err.response.data.message);
        });
    } else {
      axios
        .post("/api/auth/login", values)
        .then((res) => {
          const { token } = res.data;
          localStorage.setItem("token", token);
          axios.defaults.headers["Authorization"] = `Bearer ${token}`;
          history.push("/dashboard");
        })
        .catch((err) => {
          setLoading(false);
          setHTTPError(err.response.data.message);
        });
    }
  };

  return (
    <Box margin="7rem auto 0" padding={3} maxWidth={500}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <FormLabel htmlFor="email">email</FormLabel>
          <Input
            id="email"
            type="email"
            name="email"
            placeholder="you@example.com"
            ref={register({ required: "Please enter your email address" })}
          />
          <Text color="#c62828">{errors.email?.message}</Text>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="password">password</FormLabel>
          <Input
            id="password"
            type="password"
            name="password"
            ref={register({ required: "Please enter a password" })}
          />
          <Text color="#c62828">{errors.password?.message}</Text>
        </FormControl>
        <Collapse isOpen={isRegistering}>
          <FormControl>
            <FormLabel htmlFor="name">name</FormLabel>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Your Name"
              ref={
                isRegistering
                  ? register({ required: "Please enter your name" })
                  : undefined
              }
            />
            <Text color="#c62828">{errors.name?.message}</Text>
          </FormControl>
          <FormControl textAlign="center" marginTop={5}>
            <FormLabel htmlFor="role" padding={3}>
              please select your role(s)
            </FormLabel>
            <CheckboxGroup
              id="role"
              isInline
              variantColor="teal"
              defaultValue={[]}
              onChange={(roles: any[]) => setValue("roles", roles)}
            >
              <Checkbox value="STUDENT" borderColor="#bdbdbd">
                Student
              </Checkbox>
              <Checkbox value="HELPER" borderColor="#bdbdbd">
                Helper
              </Checkbox>
            </CheckboxGroup>
            <Text color="#c62828">{errors.roles?.message}</Text>
          </FormControl>
        </Collapse>
        <Box textAlign="center" marginTop={5}>
          <Text color="#c62828">{httpError || "\xa0"}</Text>
          <Button
            variantColor="blue"
            marginTop={3}
            type="submit"
            isLoading={isLoading}
          >
            {isRegistering ? "Register" : "Login"}
          </Button>
          <FormHelperText>
            {isRegistering ? (
              <Link to="/login">Already registered?</Link>
            ) : (
              <Link to="/register">Not registered yet?</Link>
            )}
          </FormHelperText>
        </Box>
      </form>
    </Box>
  );
};

export default AuthForm;
