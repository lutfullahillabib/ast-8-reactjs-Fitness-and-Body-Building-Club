import './App.css';
import Blog from './Components/Blog/Blog';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
      {/* <Blog></Blog> */}
      <Footer></Footer>
    </div>
  );
}

export default App;
