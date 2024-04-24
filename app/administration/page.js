import PageHeader from "@/components/PageHeader";
import {
  Container,
  Stack,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Heading,
} from "@chakra-ui/react";
import React from "react";
export const metadata = {
  title: "Administration || Ghughubesia Junior High School ",
};
export default function Administration() {
  {
    /* const governingBody = [
        {
            designation: 'Nominee of Sabhapati of Panchayat Samity',
            name: 'Tapas Mondal',
            post: 'President',
        },
        {
            designation: 'Nominee of BDO',
            name: 'Bablu Gayen',
            post: 'Member',
        },
        {
            designation: 'A Local person interested in education to be nominated by the Sabhadhiputi of the district',
            name: 'Rammohan Adak',
            post: 'Member',
        },
        {
            designation: 'Sub-Inspector of Schools ',
            name: 'Madhurima Das',
            post: 'Member-Secretary',
        },
        {
            designation: 'Representative of Block Land and Land Reforms Officer',
            name: 'BLO',
            post: 'Permanent Invitee',
        },
        {
            designation: 'A Local medical practitioner to be nominated by BMOH	',
            name: 'Jagadish Mondal',
            post: 'Permanent Invitee',
        },
    ] */
  }
  const teachingStuff = [
    {
      name: "Ujjwal maji(TIC)",
      designation: "Teacher-in-Charge",
      qualification: "M.A.(Bengali (double),B.Ed",
      subject: "Bengali",
    },
    {
      name: "Saroj Kumar Mondal",
      designation: "Assistant Teacher",
      qualification: "M.Sc(Maths),B.Ed",
      subject: "Maths",
    },
    {
      name: "Minakshi Mudi",
      designation: "Assistant Teacher",
      qualification: "B.A(History).B.Ed",
      subject: "History",
    },
    /*{
            name: 'Rakesh Mondal',
            designation: 'Assistant Teacher',
            qualification: 'M.Sc(Zoology),B.Ed',
            subject: 'Biology',
        },*/
  ];
  /*const partTimeteachingStuff = [
        {
            name: 'KEYA DAS',
            designation: 'Assistant Teacher',
            qualification: 'B.A(Hons) English',
            subject: 'English',
        },
        {
            name: 'KABITA KUNWAR',
            designation: 'Assistant Teacher',
            qualification: 'M.A(Hindi)',
            subject: 'Hindi',
        },
        {
            name: 'SAIKAT PATRA',
            designation: 'Assistant Teacher',
            qualification: 'B.A(Hons),Bengali,Diploma in Computer',
            subject: 'Computer',
        },
    ]*/

  return (
    <Stack>
      <Stack>
        <PageHeader pagetitle={"Administration"} />
      </Stack>
      <Stack
        as={Container}
        maxW={"container.xl"}
        pt={"100px"}
        pb={"100px"}
        gap={1}
      >
       {/* <Stack p={4} bg={"#a2010d"} shadow={"lg"}>
          <Heading
            color={"#fff"}
            as={"h2"}
            size={"md"}
            textAlign={"center"}
            textTransform={"uppercase"}
          >
            SCHOOL GOVERNING BODY
          </Heading>
        </Stack>*/}
        {/* <TableContainer borderWidth={0} borderColor={'#000'} shadow={'lg'}>
                    <Table size='lg'>
                        <Thead bg={'#07294e'}>
                            <Tr>
                                <Th color={'white'}>Sl No</Th>
                                <Th color={'white'}></Th>
                                <Th color={'white'}>Name</Th>
                                <Th color={'white'}>Designation</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                             { governingBody.map((item, index) => {
                                return (
                                    <Tr key={index}>
                                        <Td>{index+1}</Td>
                                        <Td>{item.designation}</Td>
                                        <Td>{item.name}</Td>
                                        <Td>{item.post}</Td>
                                    </Tr>
                                )
                            })}

                        </Tbody>
                    </Table>
                </TableContainer> */}
      </Stack>
      <Stack as={Container} maxW={"container.xl"} pb={"100px"} gap={1}>
        <Stack p={4} bg={"#a2010d"} shadow={"lg"}>
          <Heading
            color={"#fff"}
            as={"h2"}
            size={"md"}
            textAlign={"center"}
            textTransform={"uppercase"}
          >
            PERMANENT TEACHING STAFF
          </Heading>
        </Stack>
        <TableContainer borderWidth={0} borderColor={"#000"} shadow={"lg"}>
          <Table size="lg">
            <Thead bg={"#07294e"}>
              <Tr>
                <Th color={"white"}>Sl No</Th>
                <Th color={"white"}>Name of the Emplyees</Th>
                <Th color={"white"}>Designation</Th>
                <Th color={"white"}>Qualification</Th>
                <Th color={"white"}>Subject</Th>
              </Tr>
            </Thead>
            <Tbody>
              {teachingStuff.map((item, index) => {
                return (
                  <Tr key={index}>
                    <Td>{index + 1}</Td>
                    <Td>{item.name}</Td>
                    <Td>{item.designation}</Td>
                    <Td>{item.qualification}</Td>
                    <Td>{item.subject}</Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </Stack>
     < Stack as={Container} maxW={"container.xl"} pb={"100px"} gap={1}>
        <Stack p={4} bg={"#a2010d"} shadow={"lg"}>
          <Heading
            color={"#fff"}
            as={"h2"}
            size={"md"}
            textAlign={"center"}
            textTransform={"uppercase"}
          >
            PART TIME TEACHER
          </Heading>
            </Stack> 
        {/* <TableContainer borderWidth={0} borderColor={'#000'} shadow={'lg'}>
                    <Table size='lg'>
                        <Thead bg={'#07294e'}>
                            <Tr>
                                <Th color={'white'}>Sl No</Th>
                                <Th color={'white'}>Name of the Emplyees</Th>
                                <Th color={'white'}>Designation</Th>
                                <Th color={'white'}>Qualification</Th>
                                <Th color={'white'}>Subject</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {partTimeteachingStuff.map((item, index) => {
                                return (
                                    <Tr key={index}>
                                        <Td>{index+1}</Td>
                                        <Td>{item.name}</Td>
                                        <Td>{item.designation}</Td>
                                        <Td>{item.qualification}</Td>
                                        <Td>{item.subject}</Td>
                                    </Tr>
                                )
                            })}

                        </Tbody>
                    </Table>
                        </TableContainer> */}
      </Stack>
    </Stack>
  );
}
