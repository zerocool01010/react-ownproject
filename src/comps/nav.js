import Nav from './nav/navStyle';

const nav = (props) => {
    return <Nav>{props.children}
            <div className="el1">Item1</div>
            <div className="el2">Item3</div>
            <div className="el3">Item3</div>
            <div className="el4">Item4</div>
    </Nav>;
}

export default nav;