import {Button, Center, Container, Input, InputGroup, InputRightElement, Text} from '@chakra-ui/react';
import {ViewIcon, ViewOffIcon} from '@chakra-ui/icons';
import {useState} from "react";
import api from "@/api/api";

function Signup() {
    const [username, setUsername] = useState(null as null | string);
    const [password, setPassword] = useState(null as null | string);

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmationPassword, setShowConfirmationPassword] = useState(false);

    const ShowPassword = () => setShowPassword(!showPassword);
    const ShowConfirmationPassword = () => setShowConfirmationPassword(!showConfirmationPassword);

    const signup = async () => {
        if (!username || !password) {
            return;
        }

        await api.signup(username, password)
    }

    return (<Center>
            <Container w='20rem' margin='10rem 0 0'>
                <Center>
                    <Text fontSize='40px' as='b'>Registration</Text>
                </Center>
                <Input onInput={(event) => setUsername(((event.target as HTMLInputElement)).value)}
                       placeholder='Enter login'
                       margin='1rem 0'/>
                <InputGroup margin='0 0 1rem'>
                    <Input
                        pr='4.5rem'
                        type={showPassword ? 'text' : 'password'}
                        placeholder='Enter password'
                        onInput={(event) => setPassword(((event.target as HTMLInputElement)).value)}
                    />
                    <InputRightElement width='4.5rem'>
                        <Button h='1.75rem' size='sm' onClick={ShowPassword}>
                            {showPassword ? <ViewOffIcon/> : <ViewIcon/>}
                        </Button>
                    </InputRightElement>
                </InputGroup>
                <InputGroup>
                    <Input
                        pr='4.5rem'
                        type={showConfirmationPassword ? 'text' : 'password'}
                        placeholder='Confirm password'
                    />
                    <InputRightElement width='4.5rem'>
                        <Button h='1.75rem' size='sm' onClick={ShowConfirmationPassword}>
                            {showConfirmationPassword ? <ViewOffIcon/> : <ViewIcon/>}
                        </Button>
                    </InputRightElement>
                </InputGroup>
                <Center margin='1rem 0'>
                    <Button onClick={signup} colorScheme='teal'>
                        Sign Up
                    </Button>
                </Center>
            </Container>
        </Center>
    )
}

export default Signup;