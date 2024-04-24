"use client";
import React from "react";
import { Heading, Image, Stack, Text } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import { useDataFetching } from "@/hooks/useDataFetching";

export default function NoticeBoard({ width }) {
  const { data, loading, mutate } = useDataFetching("/api/notice/all-notice");
  const sortedData =
    data && data.length > 0
      ? [...data].sort((a, b) => new Date(b.date) - new Date(a.date))
      : [];

  const extractDayAndMonth = (dateString) => {
    const date = new Date(dateString);

    // Extract day and month
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "short" });

    return { day, month };
  };
  const NoticeData = () => {
    mutate();
    if (!loading) {
      const today = new Date(); // Define today here
      return sortedData.map((item) => {
        const result = extractDayAndMonth(item.date);
        const noticeDate = new Date(item.date);
        const isFutureDate = noticeDate > today;
        const fileUrl = item.file.startsWith("http://")
          ? `https://${item.file.substring("http://".length)}`
          : url;
        return (
          <Stack flexDir={"row"} align={"center"} m={2} key={item.id}>
            <Stack gap={0}>
              <Text color={"#c14e0b"} fontSize={"26px"} fontWeight={"bold"}>
                {result.day}
              </Text>
              <Text mt={"-10px"} color={"#bebebe"} fontSize={"bold"}>
                {result.month}
              </Text>
            </Stack>
            <Link href={fileUrl} isExternal>
              <Text lineHeight={"16px"}>{item.title}</Text>
            </Link>
            {/* image will show if item.date > today */}
            {isFutureDate && <Image src="/new.gif" w={"50px"} />}
            {/* end */}
          </Stack>
        );
      });
    } else {
      return (
        <Stack align={"center"} mt={10}>
          <Image w={"150px"} src="/img/wait.gif" />
        </Stack>
      );
    }
  };
  return (
    <Stack borderWidth={2} width={width} shadow={"md"}>
      <Stack bg={"#026230 "} color={"white"} p={4} w={"100%"} shadow={"lg"}>
        <Heading as={"h2"} size={"md"}>
          NOTICE BOARD
        </Heading>
      </Stack>
      <Stack overflowY={"scroll"} height={"300px"}>
        <NoticeData />
      </Stack>
    </Stack>
  );
}
