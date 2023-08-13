import React from "react";
import landingImage from "../../assets/landing.png";
import { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  VStack,
  InputGroup,
  InputRightElement,
  IconButton,
  Text,
} from "@chakra-ui/react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    password: "",
    userType: "",
  });
  const [showPassword, setShowPassword] = useState(false);

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

  const handleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <>
      <main className="h-[100vh] w-[100%]">
        <div className="flex flex-row">
          <section className="w-[50vw] px-28 my-auto">
            <h1>Welcome</h1>
            <p>Enter your details to get started</p>
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
                <FormControl id="name">
                  <FormLabel>Name</FormLabel>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </FormControl>
                <FormControl id="password">
                  <FormLabel>Password</FormLabel>
                  <InputGroup>
                    <Input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                    />
                    <InputRightElement>
                      <IconButton
                        icon={showPassword ? <FaEyeSlash /> : <FaEye />}
                        onClick={handleShowPassword}
                        variant="ghost"
                      />
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                <FormControl id="userType">
                  <FormLabel>User Type</FormLabel>
                  <Select
                    name="userType"
                    value={formData.userType}
                    onChange={handleInputChange}
                  >
                    <option value="donor">Donor</option>
                    <option value="organization">Organization</option>
                  </Select>
                </FormControl>
                <Button type="submit" colorScheme="green" w="100%">
                  Sign up
                </Button>{" "}
              </VStack>
            </form>{" "}
            <div className="h-[5vh]"></div>
            <Text>
              Already have an account?{" "}
              <Link to="/login" className="text-green-500 font-bold">
                Log in
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

export default Register;
