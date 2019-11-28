import Link from 'next/Link'
import Layout from '../components/MyLayout'
import fetch from 'isomorphic-unfetch'
// isomorphic-unfetch : 데이터를 가지고 올 때 사용할 라이브러리

const Index = props  => (
    <Layout>
        <h1>Batman TV Shows</h1>
        <ul>
            {props.shows.map(show => (
                <li key={show.id}>
                    <Link href="/p/[id]" as={`/p/${show.id}`}>
                        <a>{show.name}</a>
                    </Link>
                </li>
            ))}
        </ul>
    </Layout>
);

//getInitialProps : 앱의 어느페이지에나 추가할 수 있는 정적인 비동기 함수로 이를 사용해 가지고 온 데이터를 props로 넘겨 줄 수 있다.

Index.getInitialProps = async function(){
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
    const data = await res.json();

    console.log(`Show data fetched. Count: ${data.length}`);

    return{
        shows : data.map(entry => entry.show)
    }
};

export default Index