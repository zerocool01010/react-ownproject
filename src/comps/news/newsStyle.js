import './newsStyle.css';

const newsCSS = (props) =>{
    const classes = 'centralnews ' + 'secnews1 ' + 'secnews2 ' + 'secnews3';
    return <div className={classes}>{props.children}</div>;
}

export default newsCSS;