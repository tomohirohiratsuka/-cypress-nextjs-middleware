import {NextPageWithLayout} from "@pages/_app";
import Layout from "@layouts/Layout";

const Protected: NextPageWithLayout = () => {
    return<div>this is protected.</div>
}
Protected.getLayout = (page) => {
    return(
        <Layout>
            {page}
        </Layout>
    )
}

export default Protected