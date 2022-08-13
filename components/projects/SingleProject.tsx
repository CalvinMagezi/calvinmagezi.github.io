import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  Tag,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { FaGithub, FaLink } from "react-icons/fa";
import { ProjectType } from "typings";

function SingleProject({ project }: { project: ProjectType }) {
  return (
    <Flex
      color="white"
      className="flex-col border-4 border-[#6f7072] bg-[#28292b] bg-opacity-40 w-full rounded-lg shadow-lg shadow-[#28292b] group cursor-pointer transition duration-200"
    >
      <Box className="relative w-full rounded-t-lg h-80 ">
        <Image
          src={project.banner.url}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
        <Box className="absolute z-10 w-full h-full transition duration-300 ease-in-out bg-black rounded-t-lg bg-opacity-40 group-hover:bg-opacity-80"></Box>
        <Flex className="relative z-20 flex-col items-center justify-center w-full h-full space-y-3">
          <a href={project.linkToDemo} target="_blank" rel=" noreferrer">
            <Button
              leftIcon={<FaLink />}
              bg="brand.100"
              color="white"
              _hover={{ bg: "brand.200" }}
            >
              Live Preview
            </Button>
          </a>

          {project.isPrivate === false && (
            <a href={project.linkToRepo} target="_blank" rel=" noreferrer">
              <Button
                leftIcon={<FaGithub />}
                bg="brand.300"
                color="white"
                _hover={{ bg: "brand.200" }}
              >
                Github Repo
              </Button>
            </a>
          )}
        </Flex>
      </Box>
      <Heading size="lg" letterSpacing={2} className="my-4 text-center">
        {project?.title}
      </Heading>
      <hr className="mb-4" />

      <Flex className="flex-wrap items-center justify-center w-full">
        {project?.technologies.map((tech, index) => (
          <Tag color="white" bg="brand.100" key={index} className="m-2">
            {tech}
          </Tag>
        ))}
      </Flex>

      <Flex className="flex-wrap items-center justify-center w-full">
        {project.technologiesLogos.map((tech, index) => (
          <Avatar
            bg="brand.200"
            size="lg"
            key={index}
            src={tech.url}
            className="m-2"
          />
        ))}
      </Flex>

      <hr className="mb-4" />

      <Text className="p-3">{project.description}</Text>
    </Flex>
  );
}

export default SingleProject;
