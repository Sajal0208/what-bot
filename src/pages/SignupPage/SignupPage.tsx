import { Box, Heading, Text } from '@chakra-ui/react'
import SignupForm from '../../components/SignupForm'

const SignupPage = () => {
  return (
    <Box className="bg-black w-screen h-screen flex flex-col text-white justify-center items-center">
        <Heading className = "text-3xl">Register</Heading>
        <SignupForm />
    </Box>  
  )
}

export default SignupPage