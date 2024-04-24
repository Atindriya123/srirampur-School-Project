"use client";
import { Button, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React from "react";

export default function HeadMasterDesk({ width }) {
  const router = useRouter();
  return (
    <Stack borderWidth={2} width={width} shadow={"md"}>
      <Stack bg={"#026230 "} color={"white"} p={4} w={"full"} shadow={"lg"}>
        <Heading as={"h2"} size={"md"}>
          From Head Master Desk
        </Heading>
      </Stack>
      <Stack
        flexDir={["column", "column", "row", "row"]}
        m={4}
        align={"center"}
      >
        <Stack width={["100%", "100%", "40%", "40%"]}>
          <Image src="/img/hodsrirampur.jpg" alt="Head Master Desk" />
        </Stack>
        <Stack width={["100%", "100%", "60%", "60%"]}>
          <Text>{`As Teacher-in-Charge, I, Ujjwal Maji, oversee all aspects of our school's operations. With a background in double M.A. in Bengali and B.Ed., I ensure academic excellence and smooth functioning. My desk serves as the administrative hub, where I manage schedules and address concerns with dedication. Under my guidance, we foster a nurturing environment conducive to learning and growth. From coordinating activities to maintaining efficiency, I strive to uphold the standards of our institution.`}</Text>
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
      </Stack>
    </Stack>
  );
}
