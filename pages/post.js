import { useRouter } from 'next/router'
import Layout from '../components/MyLayout'

//방법1
// const Page = () => {
//     const router = useRouter();
//
//     return(
//         <Layout>
//             <h1>{router.query.title}</h1>
//             <p>This is the blog post router</p>
//         </Layout>
//     )
// };
//
// export default Page

//방법2
const Content = () => {
    const router = useRouter();

    return(
        <>
            <h1>{router.query.title}</h1>
            <p><p>This is the blog post router</p></p>
        </>
    )
};
const Page = () => (
    <Layout>
        <Content/>
    </Layout>
);

export default Page