import './styles/app.scss';
import Home from "./Components/Home"

function App() {

  return (
    <div className="App">
    <div className="circle"/>
      <div className="container">

          <div className="asideLeft"></div>
            <Home />
            <div className="asideLeft"></div>
          </div>    
    </div>
  );
}

export default App;
