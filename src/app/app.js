import Header from '../comps/header';
import Navbar from '../comps/nav';
import News from '../comps/news';
import Sidebar from '../comps/sidebar';
import Container from '../comps/container/container';

const App = () => {
    return <Container>
        <Header></Header>
        <Navbar></Navbar>
        <News></News>
        <Sidebar></Sidebar>
    </Container>;
}

export default App;