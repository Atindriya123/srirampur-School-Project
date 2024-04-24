"use client";
import { Button, Image, Input, Stack, useToast } from "@chakra-ui/react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function LoginFrm() {
  const [loading, setLoading] = useState(false);
  // const { data, loading, mutate } = useDataFetching('/api/notice/all-notice');
  const toast = useToast();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const login = async (data) => {
    setLoading(true);
    try {
      const response = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });
      if (!response.ok) {
        toast({
          title: "Login failed",
          description: response.error,
          status: "error",
          duration: 9000,
          isClosable: true,
        });
        setLoading(false);
        return;
      }
      toast({
        title: "Login Success",
        description: "You've have been logged in successfully.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      setLoading(false);
      router.push("/admin-area/dashboard");
    } catch (error) {
      toast({
        title: "Login failed",
        description: "Woops! Something is wrong",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
      setLoading(false);
    }
  };
  return (
    <form onSubmit={handleSubmit((data) => login(data))}>
      <Stack
        borderWidth={2}
        shadow={"lg"}
        p={10}
        w={["", "", "", "400px"]}
        rounded={"lg"}
        justify={"center"}
        minH={"450px"}
        gap={4}
      >
        <Stack align={"center"} m={4}>
          <Image src="/LogoFinal.png" w={"150px"} />
        </Stack>
        <Input
          placeholder="username"
          {...register("email", { required: true })}
        />
        <Input
          placeholder="password"
          type="password"
          {...register("password", { required: true })}
        />
        <Button
          type="submit"
          colorScheme={"orange"}
          textTransform={"uppercase"}
        >
          Login
        </Button>
      </Stack>
    </form>
  );
}
