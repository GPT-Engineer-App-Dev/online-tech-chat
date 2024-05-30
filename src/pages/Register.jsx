import { useState } from "react";
import { Container, VStack, Heading, Input, Button, Box, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = () => {
    if (username && password) {
      // Save user data to localStorage (for simplicity)
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const userExists = users.some(user => user.username === username);

      if (userExists) {
        setError("Username already exists");
      } else {
        users.push({ username, password });
        localStorage.setItem("users", JSON.stringify(users));
        navigate("/login");
      }
    } else {
      setError("Please fill in all fields");
    }
  };

  return (
    <Container centerContent maxW="container.sm" py={8}>
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl">Register</Heading>
        {error && <Text color="red.500">{error}</Text>}
        <Box width="100%" p={4} borderWidth="1px" borderRadius="lg">
          <Input
            placeholder="Username"
            mb={3}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="Password"
            mb={3}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button colorScheme="blue" onClick={handleRegister}>Register</Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default Register;