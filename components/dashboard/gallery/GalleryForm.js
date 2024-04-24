"use client"
import FileUpload from '@/components/FileUpload';
import { useDataFetching } from '@/hooks/useDataFetching';
import { Button, Input, SimpleGrid, Stack, Text, useToast } from '@chakra-ui/react';
import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

export default function GalleryForm() {
    const [loading, setLoading] = useState(false);
    const [fileurl, setFileUrl] = useState('');
    // const { data, loading, mutate } = useDataFetching('/api/notice/all-notice');
    const toast = useToast();
    const {
        register,
        handleSubmit,
        setValue,
        reset,
        formState: { errors },
    } = useForm();
    const onSubmit = async (data) => {
        try {
            const response = await axios.post("/api/gallery/add-gallery", {
                action: 'create',
                data: data
            });
            if (!response.data) {
                toast({
                    title: "Woops!",
                    description: response.error,
                    status: "error",
                    duration: 9000,
                    isClosable: true,
                });
                setLoading(false);
                return;
            }
            reset();
            setFileUrl(null)
            toast({
                title: "Image added",
                description: "Image added successfully.",
                status: "success",
                duration: 9000,
                isClosable: true,
            });
            setLoading(false);
            console.log(response);
            //   await mutate();
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <form onSubmit={handleSubmit((data) => onSubmit(data))}>
            <Stack>
                <FileUpload
                    imageUrl={fileurl ? fileurl : null}
                    setImageUrl={(url) => {
                        // Set the image URL in the form data
                        setValue("file", url);
                        setFileUrl(url)
                    }}
                />
                <Button
                    type='submit'
                    size={'lg'}
                    bg={'#a2010d'}
                    color={'white'}cls
                    shadow={'lg'}
                    _hover={{
                        bg: '#50050b',
                        color: 'white'
                    }}
                >Submit</Button>
            </Stack>
        </form>
    )
}
