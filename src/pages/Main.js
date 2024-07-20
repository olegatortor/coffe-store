import Header from '../components/header/Header';
import Beans from '../components/beans/Beans';
import About from '../components/about/About';
import Best from '../components/best/Best';
import Footer from '../components/footer/Footer';

const Main = () => {

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
      <Header img='./res/img/promo.jpg'>
        <div className="header__relative">
          <div className="header__main">
            <h1>Everything You Love About Coffee</h1>
            <Beans color='white'/>
            <p>We makes every day full of energy and taste</p>
            <p>Want to try our beans?</p>
            <button>More</button>
          </div>
        </div>
      </Header>
      <About width="590" title="Abiut us">
          Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
          Afraid at highly months do things on at. Situation recommend objection do intention
          so questions. As greatly removed calling pleased improve an. Last ask him cold feel
          met spot shy want. Children me laughing we prospect answered followed. At it went
          is song that held help face.

          Now residence dashwoods she excellent you. Shade being under his bed her, Much
          read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
          horrible but confined day end marriage. Eagerness furniture set preserved far
          recommend. Did even but nor are most gave hope. Secure active living depend son
          repair day ladies now.
      </About>
      <Best data={bestProducts}/>
      <Footer/>
    </>
  );
}

export default Main;
