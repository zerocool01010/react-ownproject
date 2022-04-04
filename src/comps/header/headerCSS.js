import './header.css';

const header = (props) => {
    const classes = 'logo ' + 'banner';
    return <div className={classes}>{props.children}</div>
}

export default header;