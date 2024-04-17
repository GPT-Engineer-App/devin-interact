import { Box, Button, Flex, Heading, Icon, Image, Link, Text, VStack } from "@chakra-ui/react";
import { FaGithub, FaDocker, FaMapMarkedAlt, FaBug, FaUserCircle, FaCommentDots } from "react-icons/fa";

const Index = () => {
  return (
    <VStack spacing={10} p={5} align="stretch" bg="gray.800" color="white" minHeight="100vh">
      <Flex justify="space-between" align="center" p={5}>
        <Box>
          <Icon as={FaUserCircle} w={10} h={10} />
          <Text fontSize="lg">Devin</Text>
        </Box>
        <Flex gap={4}>
          <Button colorScheme="teal">Home</Button>
          <Button colorScheme="teal">Projects</Button>
          <Button colorScheme="teal">Contact</Button>
        </Flex>
      </Flex>

      <VStack flex="1" justify="center">
        <Heading as="h1" size="2xl" textAlign="center">
          Welcome to Devin's Portfolio
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Hi, I'm Devin, a software engineer ready to tackle your coding tasks!
        </Text>
      </VStack>

      <Flex justify="space-around" p={5}>
        <Button leftIcon={<FaGithub />} colorScheme="purple">
          Run my Github repo
        </Button>
        <Button leftIcon={<FaBug />} colorScheme="red">
          Debug & fix the tests in this codebase
        </Button>
        <Button leftIcon={<FaDocker />} colorScheme="blue">
          Setup an LLM inside a Docker Container
        </Button>
        <Button leftIcon={<FaMapMarkedAlt />} colorScheme="orange">
          Create a map of CA wildfires in 2023
        </Button>
      </Flex>

      <Flex justify="space-between" p={5}>
        <Button colorScheme="green">Request access</Button>
        <Button colorScheme="yellow">About us</Button>
      </Flex>

      <Box bg="gray.700" p={5}>
        <Flex align="center">
          <Icon as={FaCommentDots} w={8} h={8} mr={2} />
          <Text fontSize="lg">
            Need help creating an interactive map of California wildfires? Check out the data{" "}
            <Link href="#" color="teal.300">
              here
            </Link>
            .
          </Text>
        </Flex>
      </Box>
    </VStack>
  );
};

export default Index;
