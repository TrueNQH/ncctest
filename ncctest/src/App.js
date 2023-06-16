
import './App.css';
import Menu from './components/Menu'
import Footer from './components/Footer'

function App(props) {
  return (
    <div className="container">
      <Menu/>
      <div>
      {props.children}
        <Footer/>
      </div>
    </div>
  );
}

export default App;
