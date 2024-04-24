"use client";
import { Button, Image, Stack, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React from "react";

export default function Welcome({ width }) {
  const router = useRouter();
  return (
    <Stack
      width={width}
      borderWidth={1}
      borderColor={"#f0f0f0"}
      boxShadow={"md"}
      rounded={"md"}
    >
      <Image
        src="	http://res.cloudinary.com/dlkr9wi2s/image/upload/v1713943384/uw5jcfynvoox4tonc3rl.jpg"
        roundedTop={"md"}
        shadow={"lg"}
      />
      <Text p={4} textAlign={"justify"}>
        {`
Established in 2008, Srirampur New Setup Upper Primary School in rural Howrah, West Bengal, provides education from grades V to VIII. With recognition received in November 2008, the school offers a government-aided, co-educational environment. Equipped with modern facilities like computer rooms and projectors, it emphasizes quality education and weekly extracurricular activities, aiming to nurture well-rounded students.`}
      </Text>
      <Button
        type="submit"
        size={"lg"}
        bg={"#a2010d"}
        color={"white"}
        shadow={"lg"}
        m={2}
        _hover={{
          bg: "#50050b",
          color: "white",
        }}
        onClick={() => router.push("/about-us")}
      >
        Read More
      </Button>
    </Stack>
  );
}
