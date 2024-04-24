import { Image, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <Link href={"/"}>
      <Stack flexDir={"row"} m={5}>
        <Image src="/LOGOFinal.png" h={20} w={20} alt="Logo" />
        <Stack gap={0} justify={"center"}>
          <Text
            as={"h1"}
            fontSize={["18px", "18px", "20px", "20px", "20px"]}
            textShadow={"1px 1px 2px #450106"}
            color={"#a2010d"}
            textTransform={"uppercase"}
            lineHeight={"22px"}
            fontWeight={"bold"}
          >
            SRIRAMPUR NEW SET UP
          </Text>
          <Text
            as={"h1"}
            fontSize={["18px", "18px", "20px", "20px", "20px"]}
            textShadow={"1px 1px 2px #450106"}
            color={"#a2010d"}
            textTransform={"uppercase"}
            lineHeight={"22px"}
            fontWeight={"bold"}
          >
            UPPER PRIMARY SCHOOL
          </Text>
          {/* <Text as={'h1'} fontSize={'16px'}>JUNIOR HIGH SCHOOL</Text> */}
        </Stack>
      </Stack>
    </Link>
  );
}
