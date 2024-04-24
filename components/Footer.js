"use client";
import {
  AspectRatio,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Link,
  Stack,
  Text,
  border,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Image,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import Logo from "./Logo";
import {
  MdFacebook,
  MdMail,
  MdPlace,
  MdPlayCircle,
  MdTimer,
  MdWhatsapp,
  MdYoutubeSearchedFor,
} from "react-icons/md";
import { PhoneIcon } from "@chakra-ui/icons";
import { IoMdGlobe } from "react-icons/io";

export default function Footer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(() => {
    const modalTimer = setTimeout(() => {
      onOpen();
    }, 2000);

    // Cleanup function to clear the timer in case the component is unmounted before the timeout
    return () => clearTimeout(modalTimer);
  }, [onOpen]);

  return (
    <>
      
      <Stack
        pt={"60px"}
        pb={"60px"}
        bgColor={"#026230 "}
        bgImage={"url(/img/pt15.png)"}
        minH={"450px"}
      >
        <Stack
          flexDir={["column", "column,", "row", "row", "row"]}
          as={Container}
          maxW={"container.xl"}
          rowGap={10}
        >
          <Stack width={["100%", "100%", "33.333%", "33.333%", "33.333%"]}>
            <Stack borderBottomWidth={2} pb={2}>
              <Heading as={"h2"} fontSize={"20px"} color={"white"}>
                About Us
              </Heading>
            </Stack>
            <Stack bg={"white"} p={4}>
              <Logo />
            </Stack>
            <Text color={"white"}>{`

"
Established in 2008, Srirampur New Setup Upper Primary School in Howrah, West Bengal, offers education from grades V to VIII. Led by Teacher-in-Charge Ujjwal Maji, our institution prioritizes holistic development and academic excellence, preparing students for a successful future while serving the local community. Join us for a fulfilling educational journey!" 
`}</Text>
          </Stack>
          <Stack width={["100%", "100%", "33.333%", "33.333%", "33.333%"]}>
            <Stack borderBottomWidth={2} pb={2}>
              <Heading as={"h2"} fontSize={"20px"} color={"white"}>
                Facebook Page
              </Heading>
            </Stack>
            <AspectRatio ratio={1 / 1} overflow={"hidden"}>
              <iframe
                src=""
                style={{
                  border: "none",
                  overflow: "hidden",
                  height: "320px",
                  width: "100%",
                }}
                frameBorder={0}
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></iframe>
            </AspectRatio>
          </Stack>
          <Stack
            width={["100%", "100%", "33.333%", "33.333%", "33.333%"]}
            gap={4}
          >
            <Stack borderBottomWidth={2} pb={2}>
              <Heading as={"h2"} fontSize={"20px"} color={"white"}>
                Locate Us{" "}
              </Heading>
            </Stack>
            <Flex gap={4} align={"center"}>
              <Icon as={MdPlace} w={"20px"} h={"20px"} color={"#f5b417"} />
              <Text color={"white"} textTransform={"uppercase"}>
                SRIRAMPUR,P.O-MAHISREKHA,P.S-SHYAMPUR,DIST-HOWRAH,PIN-711312
              </Text>
            </Flex>
            <Flex gap={4} align={"center"}>
              <Icon as={PhoneIcon} w={"20px"} h={"20px"} color={"#f5b417"} />
              <Text color={"white"} textTransform={"uppercase"}>
                9734101465 / 7872320028
              </Text>
            </Flex>
            <Flex gap={4} align={"center"}>
              <Icon as={MdMail} w={"20px"} h={"20px"} color={"#f5b417"} />
              <Text
                as={"a"}
                href="mailto:srirampurnewsetupupperprimary@gmail.com"
                color={"white"}
                textTransform={""}
              >
                srirampurnewsetupupperprimary@gmail.com
              </Text>
            </Flex>
            <Flex gap={4} align={"center"}>
              <Icon as={MdTimer} w={"20px"} h={"20px"} color={"#f5b417"} />
              <Text color={"white"} textTransform={"uppercase"}>
                Mon - Sat 10.30 AM - 4.00 PM
              </Text>
            </Flex>
            <Flex gap={4} align={"center"}>
              <Icon as={IoMdGlobe} w={"20px"} h={"20px"} color={"#f5b417"} />
              <Text color={"white"} textTransform={"lowercase"}>
                www.srirampurnewsetupupperprimaryschool.com
              </Text>
            </Flex>
            <Flex justify={"flex-start"} gap={2}>
              <Link
                href="#"
                target="_blank"
              >
                <Icon
                  as={MdFacebook}
                  boxSize={10}
                  color={"blue"}
                  bg={"white"}
                />
              </Link>
              <Link
                href="#"
                target="_blank"
              >
                <Icon
                  as={MdWhatsapp}
                  boxSize={10}
                  color={"green"}
                  bg={"white"}
                />
              </Link>
              <Link href="#" target="_blank">
                <Icon
                  as={MdPlayCircle}
                  boxSize={10}
                  color={"red"}
                  bg={"white"}
                />
              </Link>
              <Link href="mailto:srirampurnewsetupupperprimary@gmail.com" target="_blank">
                <Icon as={MdMail} boxSize={10} color={"orange"} bg={"white"} />
              </Link>
            </Flex>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}
