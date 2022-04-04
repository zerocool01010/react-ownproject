import Header from './header/headerCSS';

const header = (props) => {
    return <Header>{props.children}
        <div className="logo">Logo</div>
        <div className="banner">Banner</div>
    </Header>;
}

export default header;