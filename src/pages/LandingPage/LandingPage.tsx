import { Box, Heading, Text, Link, Image, Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {
    const navigate = useNavigate();
    return (
        <Box className="bg-black w-screen h-screen text-white">
            <Box className='flex flex-col h-full justify-center items-center gap-y-2'>
                <Heading className="">
                    What-Bot
                </Heading>
                <Text className="">
                    Never Open {" "}
                    <Link isExternal href="https://chat.openai.com/">ChatGPT <Image className="inline-block" src = "/chatgpt_logo.png" w = "4" h = "4" /></Link> again
                </Text>
                <Button onClick = {() => {
                    navigate('/signup')
                }}>
                    Get Started
                </Button>
            </Box>
        </Box>
    )
}

export default LandingPage