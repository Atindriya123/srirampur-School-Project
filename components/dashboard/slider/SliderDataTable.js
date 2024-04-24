"use client"
import { useDataFetching } from '@/hooks/useDataFetching';
import { Button, Image, Input, Stack } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useMemo, useState } from 'react'
import DataTable from 'react-data-table-component';

export default function SliderDataTable() {
    const { data, loading, mutate } = useDataFetching('/api/slider/all-slider');
    const [filteredData, setFilteredData] = useState(data);
    const [searchQuery, setSearchQuery] = useState('');

    // useEffect(() => {
    //     if (data) { // Check if data is defined
    //         const filtered = data.filter((item) =>
    //             item.title.toLowerCase().includes(searchQuery.toLowerCase())
    //         );
    //         setFilteredData(filtered);
    //     }
    // }, [data, searchQuery]);

    const columns = useMemo(
        () => [
            {
                name: 'Sl No.',
                selector: (row, Index) => Index + 1,
                sortable: true,
            },
            {
                name: 'Image',
                selector: (row, Index) => {
                    return (
                        <Image w={'100px'} maxH={'100px'} m={2} src={row.file} />
                    )
                },
                sortable: false,
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

                                DeletNotice(row.id);
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
    const DeletNotice = async (item) => {
        try {
            const response = await axios.post('/api/slider/add-slider', {
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
            {loading ? (
                <Stack align={'center'} mt={10}>
                    <Image w={'150px'} src='/img/wait.gif' />
                </Stack>
            ) : (
                <DataTable
                    columns={columns}
                    data={data || []} // Provide an empty array as a fallback
                    pagination
                    highlightOnHover
                />
            )}
        </Stack>
    )
}
