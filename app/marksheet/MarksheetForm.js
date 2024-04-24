"use client"
import { Button, FormControl, FormLabel, Heading, Image, Input, Select, Stack, useToast } from '@chakra-ui/react'
import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

export default function MarksheetForm() {
    const [loading, setLoading] = useState(false);
    const [fileurl, setFileUrl] = useState('');
    const [stdName, setStdName] = useState('');
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
                action: 'search',
                data: data
            });
            if (!response.data) {
                // toast({
                //     title: "Woops!",
                //     description: response.error,
                //     status: "error",
                //     duration: 9000,
                //     isClosable: true,
                // });
                setLoading(false);
                setFileUrl(null)
                setStdName('404');
                return;
            }
            // reset();

            // toast({
            //     title: "Marksheet added",
            //     description: "Marksheet added successfully.",
            //     status: "success",
            //     duration: 9000,
            //     isClosable: true,
            // });
            setLoading(false);
            setFileUrl(response.data.file)
            setStdName(response.data.stdname);
            console.log(response.data)
            //   await mutate();
        } catch (error) {
            console.log(error)
        }
    }
    const handleDownload = async (url, name) => {
        const fileUrl = url.startsWith('http://')
            ? `https://${url.substring('http://'.length)}`
            : url;
        try {
            const response = await fetch(fileUrl);
            const contentType = response.headers.get('content-type');
            const extension = contentType.split('/')[1];
            const fileName = `${name}.${extension}`;

            const blob = await response.blob();

            // Create a link element and trigger the download
            const a = document.createElement('a');
            a.href = URL.createObjectURL(blob);
            a.download = fileName;
            a.click();
        } catch (error) {
            console.error('Error downloading file:', error);
        }
    };
    return (
        <Stack gap={4}>
            <form onSubmit={handleSubmit((data) => onSubmit(data))}>
                <Stack>
                    <Stack flexDir={['column', 'column', 'column', 'row', 'row']} shadow={'lg'} p={10} rounded={'lg'} borderWidth={2} mb={6}>
                        <FormControl>
                            <FormLabel>Roll No</FormLabel>
                            <Input
                                placeholder='Enter Roll No'
                                // isInvalid
                                errorBorderColor='red.300'
                                {...register('rollno', { required: true })}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Class</FormLabel>
                            <Select
                                variant='outline'
                                placeholder='Select Class'
                                // isInvalid 
                                errorBorderColor='red.300'
                                {...register('sclass', { required: true })}
                            >
                                <option value={'5'}>V</option>
                                <option value={'6'}>VI</option>
                                <option value={'7'}>VII</option>
                                <option value={'8'}>VIII</option>
                                <option value={'9'}>IX</option>
                                <option value={'10'}>X</option>
                            </Select>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Date Of Birth</FormLabel>
                            <Input
                                // isInvalid
                                color={'#000'}
                                errorBorderColor='red.300'
                                type='date'
                                {...register('dob', { required: true })}
                            />
                        </FormControl>
                    </Stack>
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
            {loading === true ?
                <Stack align={'center'} mt={10}>
                    <Image w={'150px'} src='/img/wait.gif' />
                </Stack>
                : null}
            {fileurl ?
                <Stack align={'center'} mt={10} shadow={'lg'} p={10} rounded={'lg'}>
                    {/* <Image src='/logo.jpeg' w={'200px'} /> */}
                    <Image src='/img/attachment.png' w={'200px'} />
                    <Heading>{stdName}</Heading>
                    <Button colorScheme={'blue'} onClick={() => handleDownload(fileurl, stdName)}>
                        Download Marksheet
                    </Button>
                </Stack>
                : null}

            {stdName === '404' ?
                <Stack align={'center'} mt={10} shadow={'lg'} p={10} rounded={'lg'}>
                    <Image src='/img/sad.png' w={'200px'} />
                    <Heading textAlign={'center'}>Marksheet Not Found!!</Heading>
                    <Heading size={'sm'} textAlign={'center'}>Verify given details</Heading>
                </Stack>
                : null}

        </Stack>
    )
}
