import Header from '../components/header/Header';
import Beans from '../components/beans/Beans';
import About from '../components/about/About';
import Best from '../components/best/Best';
import Footer from '../components/footer/Footer';

function App() {


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
      <Footer/>
    </>
  );
}

export default App;
