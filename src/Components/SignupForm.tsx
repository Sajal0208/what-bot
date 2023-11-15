import { Box, FormControl, FormLabel, Input, FormErrorMessage } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'

const SignupForm = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [mobile, setMobile] = useState("")
  const [name, setName] = useState("")

  return (
    <Box className="p-4 flex flex-col items-center justify-center border-2 rounded">
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
          }} />
        <FormErrorMessage></FormErrorMessage>
        <FormLabel>Password</FormLabel>
        <Input type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
          }} />
        <FormErrorMessage></FormErrorMessage>
        <FormLabel>Name</FormLabel>
        <Input type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value)
          }} />
        <FormErrorMessage></FormErrorMessage>
        <FormLabel>Whatsapp Mobile Number</FormLabel>
        <Input type="text"
          value={mobile}
          onChange={(e) => {
            setMobile(e.target.value)
          }} />
        <FormErrorMessage></FormErrorMessage>
      </FormControl>
    </Box>
  )
}

export default SignupForm