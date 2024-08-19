class Home extends React.Component {
    render() {
        return <h2>Главная страница</h2>;
    }
}

class About extends React.Component {
    render() {
        return <h2>О нас</h2>;
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 'home'
        };
    }

    navigateTo = (page) => {
        this.setState({ currentPage: page });
    }

    render() {
        let PageComponent;
        if (this.state.currentPage === 'home') {
            PageComponent = Home;
        } else if (this.state.currentPage === 'about') {
            PageComponent = About;
        }

        return (
            <div>
                <nav>
                    <button onClick={() => this.navigateTo('home')}>Главная</button>
                    <button onClick={() => this.navigateTo('about')}>О нас</button>
                </nav>
                <PageComponent />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
