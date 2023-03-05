import {Button, Center, Container, Input, InputGroup, InputRightElement, Text} from '@chakra-ui/react';
import {ViewIcon, ViewOffIcon} from '@chakra-ui/icons';
import axios from "axios";
import {useState} from "react";

function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const ShowPassword = () => setShowPassword(!showPassword);

    const makeRequest = async () => {
        const {data} = await axios.get("http://localhost:8080/quiz", {withCredentials: true})
        console.log(data);
    }

    return (<Center>
            <Container w='20rem' margin='10rem 0 0'>
                <Center>
                    <Text fontSize='40px' as='b'>Log In</Text>
                </Center>
                <Input placeholder='Enter login' margin='1rem 0'/>
                <InputGroup margin='0 0 1rem'>
                    <Input
                        pr='4.5rem'
                        type={showPassword ? 'text' : 'password'}
                        placeholder='Enter password'
                    />
                    <InputRightElement width='4.5rem'>
                        <Button h='1.75rem' size='sm' onClick={ShowPassword}>
                            {showPassword ? <ViewOffIcon/> : <ViewIcon/>}
                        </Button>
                    </InputRightElement>
                </InputGroup>
                <Center margin='1rem 0'>
                    <Button onClick={makeRequest} colorScheme='teal'>
                        Sign In
                    </Button>
                </Center>
            </Container>
        </Center>
    )
}

export default Login;