import Header from '../components/header/Header';
import Beans from '../components/beans/Beans';
import About from '../components/about/About';
import Best from '../components/best/Best';
import Footer from '../components/footer/Footer';

function App() {

  const bestProducts = [
    {
      id: 1,
      name: 'Solimo Coffee Beans 2 kg',
      src: 'best1',
      price: 10.73,
    },
    {
      id: 2,
      name: 'Presto Coffee Beans 1 kg',
      src: 'best2',
      price: 15.99,
    },
    {
      id: 3,
      name: 'AROMISTICO Coffee 1 kg',
      src: 'best3',
      price: 6.99,
    }
  ]



  return (
    <>
      <Header>
        <div className="header__main">
          <h1>Everything You Love About Coffee</h1>
          <Beans color='white'/>
          <p>We makes every day full of energy and taste</p>
          <p>Want to try our beans?</p>
          <button>More</button>
        </div>
      </Header>
      <About/>
      <Best data={bestProducts}/>
      <Footer/>
    </>
  );
}

export default App;
