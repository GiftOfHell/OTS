import {Button, Center, Container, Input, InputGroup, InputRightElement, Text} from '@chakra-ui/react';
import {ViewIcon, ViewOffIcon} from '@chakra-ui/icons';
import {useState} from "react";

function Signup() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmationPassword, setShowConfirmationPassword] = useState(false);
    const ShowPassword = () => setShowPassword(!showPassword);
    const ShowConfirmationPassword = () => setShowConfirmationPassword(!showConfirmationPassword);

    return (<Center>
            <Container w='20rem' margin='10rem 0 0'>
                <Center>
                    <Text fontSize='40px' as='b'>Registration</Text>
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
                    <Button colorScheme='teal'>
                        Sign Up
                    </Button>
                </Center>
            </Container>
        </Center>
    )
}

export default Signup;