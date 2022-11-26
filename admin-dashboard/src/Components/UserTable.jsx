import {
    Button, Tbody, Td, Th, Thead, Tr, Stack, Table, TableCaption, TableContainer
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { delete_user_data, get_data } from "../Redux/action";
import UserEditModal from "./UserEditModal";

function UserTable() {
    const data = useSelector((state) => state.data)

    const dispatch = useDispatch()

    useEffect(() => {

        dispatch(get_data())

    }, []);

    const handleDelete = (id) => {
        dispatch(delete_user_data(id)).then(() => dispatch(get_data()))

    }

    return <TableContainer m={10}  boxShadow= "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px">
        <Table variant='striped' colorScheme='teal'>

            <Thead>
                <Tr>
                    <Th>First Nmae</Th>
                    <Th>Last Name</Th>
                    <Th isNumeric>Age</Th>
                    <Th isNumeric>Mobile Number</Th>
                    <Th >Edit user</Th>
                    <Th >Delete user</Th>
                </Tr>
            </Thead>
            <Tbody>
                {data.map((e) => {
                    return <Tr key={e._id}>
                        <Td>{e.firstName}</Td>
                        <Td>{e.lastName}</Td>
                        <Td isNumeric>{e.age}</Td>
                        <Td isNumeric>{e.phoneNumber}</Td>
                        <Td ><UserEditModal firstName={e.firstName} lastName={e.lastName} number={e.phoneNumber} age={e.age} id={e._id} /></Td>
                        <Td > <Button bg="red.400" onClick={() => handleDelete(e._id)}>Delete</Button></Td>
                    </Tr>
                })}
            </Tbody>

        </Table>
    </TableContainer>
}

export default UserTable;
