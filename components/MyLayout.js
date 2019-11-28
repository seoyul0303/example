import Header from './Header'
//{props.children}은 Layout의 하위컴포넌트를 랜더링해주게 해준다.

const layoutStyle = {
  margin:20,
  padding:20,
  border:'1px solid #ddd'
};

const Layout = (props) => (
    <div style={layoutStyle}>
        <Header />
        {props.children}
    </div>
);

export default Layout