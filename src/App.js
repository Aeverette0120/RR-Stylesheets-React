import './App.css';
import TextComponent from './Components/TextComponents';

const stylesheet = {
  fontSize: '30px',
  textAlign: 'center',
  fontWeight: 'Bold',
  color: 'purple',
}
function App() {
  return (
    <div className="App">
      <h1>Welcome to Galaxy</h1>
      <TextComponent stylesheet={ stylesheet } />
    </div>
  );
}

export default App;
