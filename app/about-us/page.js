import PageHeader from "@/components/PageHeader";
import { Container, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";

export const metadata = {
  title: "About Us || Ghughubesia Junior High School ",
};
export default function AboutUs() {
  return (
    <Stack>
      <Stack>
        <PageHeader pagetitle={"About Us"} />
        <Stack
          flexDir={["column", "column", "column", "row", "row"]}
          as={Container}
          maxW={"container.xl"}
          pt={"100px"}
          pb={"100px"}
          gap={4}
        >
          <Stack
            width={["100%", "100%", "100%", "50%", "50%"]}
            borderWidth={2}
            borderColor={"#e6e2e280"}
            p={8}
            rowGap={4}
            borderRadius={"md"}
            shadow={"md"}
          >
            <Heading as={"h1"} textTransform={"uppercase"} fontSize={"24px"}>
              SRIRAMPUR NEW SET UP UPPER PRIMARY SCHOOL
            </Heading>
            <Stack
              borderWidth={2}
              borderColor={"#a2010Srirampur New set up upper primary schoold"}
            />
            <Text textAlign={"justify"}>
              {`Established in 2008 and situated amidst the serene rural landscape of Howrah, West Bengal, our school is dedicated to providing quality education to students from grades V to VIII. With a commitment to academic excellence and holistic development, we strive to nurture young minds and prepare them for a bright future.`}
              
            </Text>
            <Text textAlign={"justify"}>
              {`At Srirampur New Setup Upper Primary School, we believe in fostering a supportive and inclusive learning environment. Our team of experienced educators, led by our dedicated Teacher-in-Charge, Ujjwal Maji, is committed to providing personalized attention to each student, ensuring that they reach their full potential.`}
              
            </Text>
            <Text textAlign={"justify"}>
              {`Equipped with modern facilities such as computer rooms, projectors, and a well-stocked library, we offer a comprehensive learning experience that goes beyond the classroom. Our curriculum is designed to not only impart knowledge but also to instill critical thinking, creativity, and values that will serve our students well in their future endeavors.`}
            </Text>
            <Text textAlign={"justify"}>
              {`In addition to academic excellence, we place great emphasis on extracurricular activities and holistic development. Weekly drawing and recitation classes, along with opportunities for sports and cultural events, enrich the overall educational experience for our students.`}
            </Text>
          </Stack>
          <Stack
            width={["100%", "100%", "100%", "50%", "50%"]}
            minH={"400px"}
            bgImage={
              "	http://res.cloudinary.com/dlkr9wi2s/image/upload/v1713944388/chkil922x4nhivsw7eza.jpg"
            }
            bgPos={"center"}
            shadow={"xl"}
            rounded={"md"}
          ></Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
