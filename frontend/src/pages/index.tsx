import {Container, Center, Button} from '@chakra-ui/react'
import {useRouter} from 'next/router'

import Layout from "@layouts/Layout";
import {NextPageWithLayout} from "@pages/_app";
import Repository from "@repositories/Repository";


const Home: NextPageWithLayout = () => {
    const router = useRouter()
    const handleClick = async () => {
        await Repository.get('set-cookie')
        router.push('/protected')
    }
    return(
        <Container>
            <Center>
                <Button onClick={handleClick} id="button">
                    Move to protected
                </Button>
            </Center>
        </Container>
    )
};
Home.getLayout = (page) => <Layout>{page}</Layout>;
export default Home;
