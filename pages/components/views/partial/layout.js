const Layout = (props) => {
    return <div className="layout layout--green">{props.children}</div>;
};

const Header = (props) => {
    return <header className="layout__header">{props.children}</header>;
};

const Body = (props) => {
    return <div className="layout__body">{props.children}</div>;
};

const Footer = (props) => {
    return <footer className="layout__footer">{props.children}</footer>;
};

Layout.Header = Header;
Layout.Body = Body;
Layout.Footer = Footer;

export default Layout;