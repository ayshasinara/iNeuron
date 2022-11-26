import React, { useEffect, useState } from "react";
import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    HStack,
    Input,
    Stack,
    useColorModeValue,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from "react-redux";
import { get_data, post_data } from "../Redux/action";

function Form() {
    const [userData, setUserData] = useState({})


    const dispatch = useDispatch()



    const handleChange = (e) => {
        const { name, value } = e.target
        setUserData({ ...userData, [name]: value })
    }

    const handleSubmit = () => {
        dispatch(post_data(userData))
            .then(() => dispatch(get_data())



            )
    }
    console.log(userData)

    return (
        <Flex
            m="0"
            // minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack
                spacing={4}
                w={'full'}
                maxW={'md'}
                bg={useColorModeValue('white', 'gray.700')}
                rounded={'xl'}
                boxShadow={'lg'}
                p={6}
                my={5}>
                <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
                    Add user
                </Heading>
                <form onSubmit={handleSubmit}>
                    <HStack>
                        <Box>
                            <FormControl id="First_name" isRequired>
                                <FormLabel>First name</FormLabel>
                                <Input
                                    placeholder="Enter first name"
                                    _placeholder={{ color: 'gray.500' }}
                                    type="text"
                                    name="firstName"
                                    onChange={handleChange}
                                />
                            </FormControl>
                        </Box>
                        <Box>
                            <FormControl id="Second_name" isRequired>
                                <FormLabel>Second name</FormLabel>
                                <Input
                                    placeholder="Enter second name"
                                    _placeholder={{ color: 'gray.500' }}
                                    type="text"
                                    name="lastName"
                                    onChange={handleChange}
                                />
                            </FormControl>
                        </Box>
                    </HStack>
                    <HStack>
                        <Box>
                            <FormControl id="Age" isRequired>
                                <FormLabel>Age</FormLabel>
                                <Input
                                    placeholder="Enter age"
                                    _placeholder={{ color: 'gray.500' }}
                                    type="number"
                                    name="age"
                                    onChange={handleChange}
                                />
                            </FormControl>
                        </Box>
                        <Box>
                            <FormControl id="Phone_number" isRequired>
                                <FormLabel>Phone</FormLabel>
                                <Input
                                    placeholder="Enter phone number"
                                    _placeholder={{ color: 'gray.500' }}
                                    type="number"
                                    name="phoneNumber"
                                    onChange={handleChange}
                                />
                            </FormControl>
                        </Box>
                    </HStack>
                    <Stack spacing={6} mt="10">
                        <Button
                            type="submit"
                            bg='rgb(157, 237, 224)'
                            color={'white'}
                            _hover={{
                                bg: 'rgb(195,235,234)',
                            }}>
                            Add
                        </Button>

                    </Stack>
                </form>
            </Stack>
        </Flex >
    );
}


export default Form;
