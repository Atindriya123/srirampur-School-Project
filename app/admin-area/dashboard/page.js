import PageHeader from "@/components/PageHeader";
import Sidebar from "@/components/Sidebar";
import { Container, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";

export default function Dashboard() {
  return (
    <Stack>
      <Stack>
        <PageHeader pagetitle={"Dashboard"} />
      </Stack>
      <Stack
        flexDir={["column", "column", "column", "row", "row"]}
        as={Container}
        maxW={"container.xl"}
        pt={"100px"}
        pb={"100px"}
        gap={4}
      >
        <Sidebar>
          <Stack
            borderWidth={2}
            shadow={"lg"}
            rounded={"lg"}
            width={"full"}
            p={4}
            align={"center"}
            justify={"center"}
          >
            <Image src="/LOGOFinal.png" w={"250px"} />
          </Stack>
        </Sidebar>
      </Stack>
    </Stack>
  );
}
