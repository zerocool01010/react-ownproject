import './nav.css';

const navbarStyle = (props) => {
    const classes = 'nav ' + 'el1 ' + 'el2 ' + 'el3 '+ 'el4';
    return <div className={classes}>{props.children}</div>
}

export default navbarStyle;