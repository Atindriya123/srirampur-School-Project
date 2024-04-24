import { Container, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";

export default function Vivekananda() {
  return (
    <Stack
      // minH={'500px'}
      bg={
        "linear-gradient(rgb(7 41 78), rgb(193 78 11 / 81%)),url(http://https://res.cloudinary.com/dlkr9wi2s/image/upload/v1713937954/xsmqxkeuxrpzzvlqpx5d.png)"
      }
      justifyContent={"center"}
      bgAttachment={"fixed"}
      bgPosition={"center"}
      bgSize={"cover"}
      // bgImage={'/img/slider/1.jpeg'}
      mb={"100px"}
    >
      <Stack
        flexDir={["column", "column", "row", "row", "row", "row"]}
        as={Container}
        maxW={"container.xl"}
        color={"wheat"}
        p={"40px"}
      >
        <Stack
          width={["100%", "100%", "70%", "70%", "70%", "70%"]}
          justifyContent={"center"}
        >
          <Heading>Thus Speak - Sri Sri Ramkrishna Dev Paramhansa.</Heading>
          <Text>
            {`The fabled musk deer searches the world over for the source of the scent which comes from itself.`}
          </Text>
          <Text>
            {`Truth can be stated in a thousand different ways, yet each one can be true.`}
          </Text>
          <Text>
            {`The great secret of true success, of true happiness, is this: the man or woman who asks for no return, the perfectly unselfish person, is the most successful.`}
          </Text>
          <Text>
            {`In a day, when you don't come across any problems - you can be sure that you are travelling in a wrong path.`}
          </Text>
          <Text>
            {`Take up one idea. Make that one idea your life; dream of it; think of it; live on that idea. Let the brain, the body, muscles, nerves, every part of your body be full of that idea, and just leave every other idea alone. This is the way to success, and this is the way great spiritual giants are produced.`}
          </Text>
        </Stack>
        <Stack
          mt={"40px"}
          width={["100%", "100%", "30%", "30%", "40%", "40%"]}
        >
          <Image src="https://www.pngkey.com/png/detail/789-7899485_mahakali-maa-png.png" />
        </Stack>
      </Stack>
    </Stack>
  );
}
