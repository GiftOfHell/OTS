import {Container, ListItem, UnorderedList} from '@chakra-ui/react';
import Header from "@/components/Header";

function ManageQuizzes() {

    return <>
        <Header/>
        <Container margin='10rem 0 0'>
            <UnorderedList fontSize='25px'>
                <ListItem>Create quiz</ListItem>
                <ListItem>Create question</ListItem>
                <ListItem>Create theme</ListItem>
                <ListItem>Add quizzes to applicants</ListItem>
            </UnorderedList>
        </Container>
    </>
}

export default ManageQuizzes;