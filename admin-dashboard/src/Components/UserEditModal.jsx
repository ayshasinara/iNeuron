import {
    Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { edit_user_data, get_data } from "../Redux/action";

function UserEditModal({ firstName, lastName, number, age, id }) {
    const [userfirstName, setUserFirstName] = useState("")
    const [userlastName, setUserLastName] = useState("")
    const [userphoneNumber, setUserPhoneNumber] = useState("")
    const [userage, setUserAge] = useState("")
    const dispatch = useDispatch()
    const { isOpen, onOpen, onClose } = useDisclosure()
    useEffect(() => {
        setUserFirstName(firstName)
        setUserLastName(lastName)
        setUserAge(age)
        setUserPhoneNumber(number)
    }, [])
    const handleUpdate = (e) => {
        e.preventDefault()
        const payload = {
            firstName: userfirstName,
            lastName: userlastName,
            age: userage,
            phoneNumber: userphoneNumber
        }
        dispatch(edit_user_data(payload, id)).then(() => dispatch(get_data()))

    }

    return <div>

        <Button bg="blue.400" onClick={onOpen}>Edit</Button>

        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <form onSubmit={(e) => handleUpdate(e)} >
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>

                        <FormControl id="First_name" isRequired>
                            <FormLabel>Edit first name</FormLabel>
                            <Input
                                placeholder="Enter first name"
                                _placeholder={{ color: 'gray.500' }}
                                type="text"
                                name="firstName"
                                value={userfirstName}
                                onChange={(e) => setUserFirstName(e.target.value)}

                            />
                        </FormControl>
                        <FormControl id="Last_name" isRequired>
                            <FormLabel>Edit last name</FormLabel>
                            <Input
                                placeholder="Enter last name"
                                _placeholder={{ color: 'gray.500' }}
                                type="text"
                                name="lastName"
                                value={userlastName}
                                onChange={(e) => setUserLastName(e.target.value)}

                            />
                        </FormControl>
                        <FormControl id="Age" isRequired>
                            <FormLabel>Age</FormLabel>
                            <Input
                                placeholder="Edit age"
                                _placeholder={{ color: 'gray.500' }}
                                type="number"
                                name="age"
                                value={userage}
                                onChange={(e) => setUserAge(e.target.value)}
                            />
                        </FormControl>
                        <FormControl id="Phone_number" isRequired>
                            <FormLabel>Edit Phone</FormLabel>
                            <Input
                                placeholder="Enter phone number"
                                _placeholder={{ color: 'gray.500' }}
                                type="number"
                                name="phoneNumber"
                                value={userphoneNumber}
                                onChange={(e) => setUserPhoneNumber(e.target.value)}
                            />
                        </FormControl>


                    </ModalBody>

                    <ModalFooter>

                        <Button variant='ghost' onClick={onClose} m="3">Close</Button>
                        <Button bg='rgb(157, 237, 224)' variant='ghost' mr={3} type="submit" onClick={onClose}>

                            Save
                        </Button>
                    </ModalFooter>
                </form>
            </ModalContent>
        </Modal>
    </div>;
}

export default UserEditModal;
