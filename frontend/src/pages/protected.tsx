import Layout from "@layouts/Layout";
import {NextPageWithLayout} from "@pages/_app";

const Protected: NextPageWithLayout = () => <div>this is protected.</div>
Protected.getLayout = (page) => (
        <Layout>
            {page}
        </Layout>
    )

export default Protected