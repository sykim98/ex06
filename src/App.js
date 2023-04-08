import './App.css';
import RouterPage from './Components/RouterPage';
import any from './images/any.jpeg'

function App() {
    return (
        <div className="App">
            <img src = {any} width="100%" />
            <RouterPage/>
        </div>
    );
}

export default App;
