# spa

Пример на практике:

Рассмотрим пример простого SPA, созданного с использованием React.

HTML (index.html):
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Пример SPA</title>
</head>
<body>
    <div id="root"></div>
    <script src="https://unpkg.com/react@17/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js" crossorigin></script>
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
    <script type="text/babel" src="app.js"></script>
</body>
</html>
```

JavaScript (app.js):
```javascript
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
```

Объяснение кода:

Компоненты Home и About: Эти компоненты представляют различные "страницы" приложения.
Компонент App: Это основной компонент приложения, который управляет состоянием текущей страницы (currentPage) и переключением между страницами.
Навигация: Кнопки навигации вызывают метод navigateTo, который обновляет состояние currentPage, вызывая рендеринг соответствующего компонента страницы (Home или About).