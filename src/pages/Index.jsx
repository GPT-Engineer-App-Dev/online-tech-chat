import { Container, Text, VStack, Heading, Box, Input, Button, Textarea } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Index = ({ authenticated }) => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: "", content: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost({ ...newPost, [name]: value });
  };

  const handlePostSubmit = () => {
    if (newPost.title && newPost.content) {
      setPosts([...posts, newPost]);
      setNewPost({ title: "", content: "" });
    }
  };

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={8} width="100%">
        <Heading as="h1" size="xl">Tech Discussions Forum</Heading>
        {!authenticated ? (
          <Box>
            <Text mb={4}>Please <Button onClick={() => navigate("/login")}>Login</Button> or <Button onClick={() => navigate("/register")}>Register</Button> to create and view posts.</Text>
          </Box>
        ) : (
          <>
            <Box width="100%" p={4} borderWidth="1px" borderRadius="lg">
              <Heading as="h2" size="md" mb={4}>Create a New Post</Heading>
              <Input
                placeholder="Title"
                mb={3}
                name="title"
                value={newPost.title}
                onChange={handleInputChange}
              />
              <Textarea
                placeholder="Content"
                mb={3}
                name="content"
                value={newPost.content}
                onChange={handleInputChange}
              />
              <Button colorScheme="blue" onClick={handlePostSubmit}>Submit</Button>
            </Box>
            <VStack spacing={4} width="100%">
              {posts.map((post, index) => (
                <Box key={index} p={4} borderWidth="1px" borderRadius="lg" width="100%">
                  <Heading as="h3" size="md">{post.title}</Heading>
                  <Text mt={2}>{post.content}</Text>
                </Box>
              ))}
            </VStack>
          </>
        )}
      </VStack>
    </Container>
  );
};

export default Index;