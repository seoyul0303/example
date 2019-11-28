import Link from 'next/link'
//Header.js를 pages 디렉토리 안에 넣지 않는 이유? url을 필요로 하지 않기 떄문에!!

const linkStyle = {
    marginRight : 15
};

const Header = () => (
    <div>
        <Link href="/">
            <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/about">
            <a style={linkStyle}>About</a>
        </Link>
    </div>
);

export default Header