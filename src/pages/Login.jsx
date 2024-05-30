import { useState } from "react";
import { Container, VStack, Heading, Input, Button, Box, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Login = ({ setAuthenticated }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username && password) {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const user = users.find(user => user.username === username && user.password === password);

      if (user) {
        setAuthenticated(true);
        navigate("/");
      } else {
        setError("Invalid username or password");
      }
    } else {
      setError("Please fill in all fields");
    }
  };

  return (
    <Container centerContent maxW="container.sm" py={8}>
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl">Login</Heading>
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
          <Button colorScheme="blue" onClick={handleLogin}>Login</Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default Login;