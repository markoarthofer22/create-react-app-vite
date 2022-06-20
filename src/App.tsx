import * as React from 'react';
import logo from './logo.svg';
import './App.css';
import ComponentA from './components/component-a/component-a.component';
import ComponentB from './components/component-b/component-b.component';

const App = () => {
    const [count, setCount] = React.useState(0);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Hello Vite + React!</p>
                <p>
                    <button type="button" onClick={() => setCount((_count) => _count + 1)}>
                        count is: {count}
                    </button>
                </p>
                <p>
                    Eiusmod reprehenderit mollit nostrud eiusmod adipisicing aliqua ut anim qui fugiat amet. Occaecat ex
                    minim ipsum amet fugiat veniam ut. Lorem Lorem dolore qui duis pariatur aliqua quis cillum Lorem. In
                    deserunt velit enim ullamco ad deserunt ullamco ipsum. Sit laborum consectetur ipsum occaecat veniam
                    et nostrud elit enim excepteur.
                </p>
                {/* test comp */}
                <ComponentA />
                <ComponentB />
            </header>
        </div>
    );
};

export default App;
