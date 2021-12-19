import { DeleteIcon } from '@chakra-ui/icons'
import { Box, Button, Heading, IconButton, Input, SimpleGrid, Table, TableCaption, Tbody, Td, Text, Tfoot, Th, Thead, Tr } from '@chakra-ui/react'
import { ReactElement, useState } from 'react'

interface Props {

}

export default function App({ }: Props): ReactElement {
  const [users, setUsers] = useState([
    { name: 'Fernando', id: '3b1c9af7-050b-4dfb-935a-12a0ccdc5a42' },
    { name: 'Fernando', id: '4f73c9ca-d32d-432e-9834-74ee37105f28' },
    { name: 'Fernando', id: '5b3e15c4-f7eb-4dc1-910e-61953b252d41' },
    { name: 'Fernando', id: '9ba0ab4d-3150-4d03-8a3d-08e2dfa299b5' },
  ])

  const [user, setUser] = useState('')

  const handleCreate = (event: any) => {
    event.preventDefault()

    setUsers([...users, { name: user, id: Math.random().toString() }])
  }

  const handleDelete = (id: string) => {
    setUsers(users.filter((user) => user.id !== id))
  }

  return (
    <>
      <Box p={20}>
        <Heading>React crud web</Heading>
        <Text>Simple crud made with reactjs and chakra-ui</Text>
        <Box mt={5} display={'flex'} flexDir={'row'}>
          <form onSubmit={handleCreate}>

            <Input w={300} placeholder='Insert user name'
              value={user}
              onChange={(e) => setUser(e.target.value)} />
            <Button ml={5} colorScheme='blue' type='submit' >Create User</Button>
          </form>
        </Box>
        <Box mt={5}>
          <SimpleGrid columns={3} spacing={5} minChildWidth='200px'>
            {users.map((user) => {
              return (
                <Box borderRadius="2xl" boxShadow="base" p={5} display='flex' alignItems='center' flexDir='row' justifyContent="space-between">
                  <Text fontSize="lg" textOverflow='ellipsis'>{user?.name}</Text>
                  <IconButton onClick={() => handleDelete(user?.id)} aria-label='Search database' icon={<DeleteIcon />} />
                </Box>
              )

            })}

          </SimpleGrid>
        </Box>
      </Box>

    </>
  )
}
