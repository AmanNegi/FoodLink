import React, { useState } from "react";
import landingImage from "../../assets/landing.png";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <>
      <main className="h-[100vh] w-[100%]">
        <div className="flex flex-row">
          <section className="w-[50vw] px-28 my-auto">
            <h1>Welcome back!</h1>
            <p>Log in to your account</p>
            <div className="h-[5vh]"></div>
            <form onSubmit={handleSubmit}>
              <VStack spacing={4}>
                <FormControl id="email">
                  <FormLabel>Email address</FormLabel>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </FormControl>
                <FormControl id="password">
                  <FormLabel>Password</FormLabel>
                  <Input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                </FormControl>
                <Button type="submit" colorScheme="green" w="100%">
                  Log in
                </Button>
              </VStack>
            </form>
            <div className="h-[5vh]"></div>
            <Text>
              Don't have an account?{" "}
              <Link to="/register" className="text-green-500 font-bold">
                Sign up
              </Link>
            </Text>
          </section>
           <img
            src={landingImage}
            alt=""
            className={"h-[100vh] w-[50vw] object-cover"}
          />
        </div>
      </main>
    </>
  );
};

export default Login;
