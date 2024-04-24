"use client"
import { useDataFetching } from '@/hooks/useDataFetching';
import { Button, Image, Input, Link, Stack } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useMemo, useState } from 'react'
import DataTable from 'react-data-table-component';

export default function AdmitDataTable() {
    const { data, loading, mutate } = useDataFetching('/api/admit/all-admit');
    const [filteredData, setFilteredData] = useState(data);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        if (data) { // Check if data is defined
            const filtered = data.filter((item) =>
                item.stdname.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setFilteredData(filtered);
        }
    }, [data, searchQuery]);

    const dateFormator = (item) => {
        // const inputDateString = date;
        const date = new Date(item);

        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
        const year = date.getFullYear();

        const outputDateString = `${day}-${month}-${year}`;
        return outputDateString
    }

    const columns = useMemo(
        () => [
            {
                name: 'Name',
                selector: row => row.stdname,
                sortable: true,
            },
            {
                name: 'Roll No',
                selector: row => row.rollno,
                sortable: true,
            },
            {
                name: 'DOB',
                selector: row => dateFormator(row.dob),
                sortable: true,
            },

            {
                name: 'Class',
                selector: row => row.sclass,
                sortable: true,
            },
            {
                name: 'Admit',
                selector: row => {
                    return (
                        <Link href={row.file} target='_blank'>Download</Link>
                    )
                },
                sortable: true,
            },
            {
                name: 'Actions',
                cell: (row) => (
                    <Stack flexDir={'row'} gap={2}>
                        <Button
                            variant="outline"
                            colorScheme='red'
                            size="sm"
                            onClick={() => {
                                // Handle action for the selected row's title
                                // console.log('Action for Title:', row.title);

                                Delete(row.id);
                                console.log(row.id);

                            }}

                        >
                            Delete
                        </Button>
                    </Stack>
                ),
            },
        ],
        []
    );
    const Delete = async (item) => {
        try {
            const response = await axios.post('/api/admit/add-admit', {
                action: 'delete', // Include a method field to indicate it's a delete operation
                data: {
                    id: item,
                }
            });
            if (response.status === 200) {
                // The test has been successfully deleted
                // updateFetch();
                await mutate();
            } else {
                const data = response.data;
                console.error('Error deleting:', data.message);
            }

        } catch (error) {
            console.log('Error deleting:', error)
        }
    }
    return (
        <Stack>
            <Stack flexDir={'row'}>
                <Input
                    placeholder="Search by Name"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </Stack>
            {loading ? (
                <Stack align={'center'} mt={10}>
                    <Image w={'150px'} src='/img/wait.gif' />
                </Stack>
            ) : (
                <DataTable
                    columns={columns}
                    data={filteredData || []} // Provide an empty array as a fallback
                    pagination
                    highlightOnHover
                />
            )}
        </Stack>
    )
}
