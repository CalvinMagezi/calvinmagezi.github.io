import MainLayout from "@/components/layouts/MainLayout";
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { useForm, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { MakeWebContact } from "@/graphql/mutations";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true);
    toast.loading("Submitting Form", { duration: 3000 });

    try {
      await MakeWebContact(data)
        .then(() => {
          toast.success(
            "Successfully submitted form, I will be contacting you soon!",
            { duration: 4000 }
          );
        })
        .catch((error) => {
          console.log(error);
          toast.error("Oops, something went wrong, please try again", {
            duration: 4000,
          });
        })
        .finally(() => {
          setIsLoading(false);
          reset();
        });
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      toast.error("Form Submission Failed, please try again", {
        duration: 3000,
      });
    }
  };

  return (
    <MainLayout>
      <Flex
        style={{
          backgroundImage: "url(" + "/main-bg.png" + ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        color="brand.500"
        className="flex-col items-center justify-center w-full md:min-h-screen"
      >
        <Box>
          <Heading className="mb-5 text-center">Contact Me</Heading>

          <div className="flex items-center justify-center mb-5 space-x-4 text-lg">
            <a
              href="https://www.facebook.com/profile.php?id=100073695104661"
              target="_blank"
            >
              <BsFacebook className="socialIcon" />
            </a>
            <a href="https://www.instagram.com/calvinmagezi/" target="_blank">
              <BsInstagram className="socialIcon" />
            </a>
            <a href="https://twitter.com/CalvinMagezi" target="_blank">
              <BsTwitter className="socialIcon" />
            </a>
            <a href="https://github.com/CalvinMagezi" target="_blank">
              <BsGithub className="socialIcon" />
            </a>
            <a
              href="https://www.linkedin.com/in/calvin-magezi-639a53228/"
              target="_blank"
            >
              <FaLinkedin className="socialIcon" />
            </a>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            {isSubmitted ? (
              <Box className="flex flex-col items-center justify-center w-64 h-64">
                <Text>Submitted Successfully</Text>
              </Box>
            ) : (
              <Grid className="grid-cols-1 gap-8 md:grid-cols-2">
                <GridItem>
                  <Box>
                    <Text>Name</Text>
                    <Input
                      type="text"
                      {...register("name", {
                        required: "This is required",
                      })}
                    />
                    {errors.name && (
                      <Text className="text-red-600">
                        {errors.name.message}
                      </Text>
                    )}
                  </Box>
                </GridItem>
                <GridItem>
                  <Box>
                    <Text>Email</Text>
                    <Input
                      type="email"
                      {...register("email", {
                        required: "This is required",
                      })}
                    />
                    {errors.email && (
                      <Text className="text-red-600">
                        {errors.email.message}
                      </Text>
                    )}
                  </Box>
                </GridItem>
                <GridItem className="md:col-span-2">
                  <Box>
                    <Text>Message</Text>
                    <Textarea
                      {...register("message", {
                        required: "This is required",
                      })}
                    />
                    {errors.message && (
                      <Text className="text-red-600">
                        {errors.message.message}
                      </Text>
                    )}
                  </Box>
                </GridItem>

                <GridItem className="md:col-span-2">
                  <Flex className="items-center justify-center my-2">
                    <Button
                      type="submit"
                      colorScheme="green"
                      isLoading={isLoading ? true : false}
                      loadingText="Submitting..."
                    >
                      Submit
                    </Button>
                  </Flex>
                </GridItem>
              </Grid>
            )}
          </form>
        </Box>
      </Flex>
    </MainLayout>
  );
}

export default ContactPage;
