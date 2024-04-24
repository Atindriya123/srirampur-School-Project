"use client"
import FileUpload from '@/components/FileUpload';
import { useDataFetching } from '@/hooks/useDataFetching';
import { Button, Input, Select, SimpleGrid, Stack, Text, useToast } from '@chakra-ui/react';
import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

export default function MarksheetForm() {
    const [loading, setLoading] = useState(false);
    const [fileurl, setFileUrl] = useState('');
    // const { data, loading, mutate } = useDataFetching('/api/notice/all-notice');
    const toast = useToast();
    const {
        register,
        handleSubmit,
        reset,
        setValue,
        formState: { errors },
    } = useForm();
    const onSubmit = async (data) => {
        try {
            const response = await axios.post("/api/marksheet/add-marksheet", {
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
            setFileUrl('')
            toast({
                title: "Marksheet added",
                description: "Marksheet added successfully.",
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

                <SimpleGrid columns={2} spacing={2}>
                    <Input placeholder='Name' {...register('stdname', { required: true })} />
                    <Input placeholder='Roll No' {...register('rollno', { required: true })} />
                    <Input type='date' placeholder='DOB' {...register('dob', { required: true })} />
                    <Select variant='outline' defaultValue={'5'} errorBorderColor='red.300'  {...register('sclass', { required: true })}>
                        <option value={'5'}>V</option>
                        <option value={'6'}>VI</option>
                        <option value={'7'}>VII</option>
                        <option value={'8'}>VIII</option>
                        <option value={'9'}>IX</option>
                        <option value={'10'}>X</option>
                    </Select>
                    {/* <Input defaultValue={fileurl} placeholder='File' {...register('file', { required: true })} /> */}
                </SimpleGrid>
                <FileUpload
                    imageUrl={fileurl ? '/pdf.png' : null}
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
                    color={'white'}
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
