"use client";
import { Icon, PhoneIcon, WarningIcon } from "@chakra-ui/icons";
import {
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import {
  MdArrowCircleRight,
  MdArrowForward,
  MdLineAxis,
  MdMail,
  MdMenu,
  MdPin,
  MdPlace,
  MdSettings,
  MdTimer,
} from "react-icons/md";
import { IoMdMore } from "react-icons/io";

import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const session = useSession();
  const router = useRouter();
  const menuItem = [
    {
      menuName: "Home",
      menuLink: "/",
    },
    {
      menuName: "About Us",
      menuLink: "/about-us",
    },
    {
      menuName: "Administration",
      menuLink: "/administration",
    },
    // {
    //   menuName: 'ACHIEVEMENT',
    //   menuLink: '/achievement'
    // },
    {
      menuName: "Gallery",
      menuLink: "/gallery",
    },
    {
      menuName: "Notice",
      menuLink: "/notice",
    },
    {
      menuName: "Contact Us",
      menuLink: "/contact-us",
    },
  ];
  const MobileMenu = () => {
    return (
      <Drawer placement={"left"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">
            <Logo />
            <DrawerCloseButton />
          </DrawerHeader>
          <DrawerBody>
            {menuItem.map((item, index) => (
              <Stack key={index} borderBottomWidth={2} borderColor={"#f0f0f0"}>
                <Link href={item.menuLink} onClick={onClose}>
                  <Stack
                    fontWeight={"bold"}
                    // m={4}
                    flexDir={"row"}
                    h={10}
                    justify={"space-between"}
                    align={"center"}
                    _hover={{
                      color: "#f5b417",
                      borderBottomWidth: 4,
                      borderColor: "#f5b417",
                    }}
                  >
                    <Text>{item.menuName}</Text>
                    <Icon
                      as={MdArrowCircleRight}
                      w={8}
                      h={8}
                      color={"#f5b417"}
                    />
                  </Stack>
                </Link>
              </Stack>
            ))}
            {session?.status === "authenticated" ? (
              // <Button onClick={signOut}>Logout</Button>
              <Stack borderBottomWidth={2} borderColor={"#f0f0f0"}>
                <Link href={"/admin-area/dashboard"} onClick={onClose}>
                  <Stack
                    fontWeight={"bold"}
                    // m={4}
                    flexDir={"row"}
                    h={10}
                    justify={"space-between"}
                    align={"center"}
                    _hover={{
                      color: "#f5b417",
                      borderBottomWidth: 4,
                      borderColor: "#f5b417",
                    }}
                  >
                    <Text>Dashboard</Text>
                    <Icon
                      as={MdArrowCircleRight}
                      w={8}
                      h={8}
                      color={"#f5b417"}
                    />
                  </Stack>
                </Link>
              </Stack>
            ) : (
              <Stack
                borderBottomWidth={2}
                borderColor={"#f0f0f0"}
                onClick={signIn}
              >
                <Link href={"#"} onClick={onClose}>
                  <Stack
                    fontWeight={"bold"}
                    // m={4}
                    flexDir={"row"}
                    h={10}
                    justify={"space-between"}
                    align={"center"}
                    _hover={{
                      color: "#f5b417",
                      borderBottomWidth: 4,
                      borderColor: "#f5b417",
                    }}
                  >
                    <Text>Log In</Text>
                    <Icon
                      as={MdArrowCircleRight}
                      w={8}
                      h={8}
                      color={"#f5b417"}
                    />
                  </Stack>
                </Link>
              </Stack>
            )}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    );
  };
  const DesktopMenu = ({ display }) => {
    return (
      <Flex
        gap={4}
        textTransform={"uppercase"}
        // display={display}
        align={"center"}
      >
        {menuItem.map((item, index) => (
          <Stack display={display} key={index}>
            <Link href={item.menuLink}>
              <Stack
                fontWeight={"bold"}
                // m={4}
                h={14}
                justify={"center"}
                _hover={{
                  color: "#a2010d",
                  borderBottomWidth: 4,
                  borderColor: "#a2010d",
                }}
              >
                <Text>{item.menuName}</Text>
              </Stack>
            </Link>
          </Stack>
        ))}
        {session?.status === "authenticated" ? (
          <Stack display={display}>
            <Link href={"/admin-area/dashboard"}>
              <Stack
                fontWeight={"bold"}
                // m={4}
                h={14}
                justify={"center"}
                _hover={{
                  color: "#a2010d",
                  borderBottomWidth: 4,
                  borderColor: "#a2010d",
                }}
              >
                <Text>Dashboard</Text>
              </Stack>
            </Link>
          </Stack>
        ) : (
          <Stack display={display}>
            <Link href={"#"} onClick={signIn}>
              <Stack
                fontWeight={"bold"}
                // m={4}
                h={14}
                justify={"center"}
                _hover={{
                  color: "#a2010d",
                  borderBottomWidth: 4,
                  borderColor: "#a2010d",
                }}
              >
                <Text>Log In</Text>
              </Stack>
            </Link>
          </Stack>
        )}
        <Icon
          as={MdMenu}
          w={8}
          h={8}
          onClick={onOpen}
          cursor={"pointer"}
          display={["flex", "flex", "flex", "none", "none"]}
        />
      </Flex>
    );
  };
  return (
    <>
      <Stack
        bg={"#026230 "}
        height={"40px"}
        justify={"center"}
        // as={Container}
        // maxW={'container.xl'}
        display={["none", "none", "none", "flex", "flex"]}
      >
        <Flex
          as={Container}
          maxW={"container.xl"}
          justify={"space-between"}
          align={"center"}
        >
          <Stack flexDir={"row"} color={"white"}>
            <Flex gap={2} align={"center"}>
              <Icon as={PhoneIcon} color={"#f5b417"} />
              <Text>9734101465 / 7872320028</Text>
              <Icon as={IoMdMore} />
              <Icon as={MdPlace} color={"#f5b417"} />
              <Text textTransform={"uppercase"}>
                MAHISREKHA, Rajapur, Howrah, West Bengal
              </Text>
            </Flex>
          </Stack>
          <Stack flexDir={"row"} color={"white"}>
            <Flex gap={2} align={"center"}>
              <Icon as={MdTimer} color={"#f5b417"} />
              <Text>Mon - Sat 10.30 AM - 4.00 PM</Text>
              <Icon as={IoMdMore} />
              <Icon as={MdMail} color={"#f5b417"} />
              <Text>srirampurnewsetupupperprimary@gmail.com</Text>
            </Flex>
          </Stack>
        </Flex>
      </Stack>
      <Stack
        height={"100px"}
        flexDir={"row"}
        // bg={'pink'}
        as={Container}
        maxW={"container.xl"}
        justify={"space-between"}
        align={"center"}
        pt={4}
        pb={4}
      >
        <Logo />
        <DesktopMenu display={["none", "none", "none", "flex", "flex"]} />
      </Stack>
      <MobileMenu />
    </>
  );
}
