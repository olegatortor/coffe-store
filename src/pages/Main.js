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
      <Header/>
      
      <div className='container'>

        <div className="promo__relative">
            <div className="promo__main">
              <h1>Все, що ви любите в каві</h1>
              <Beans/>
              <p>Ласкаво просимо до Coffee House. Відкривайте для себе нові смаки та аромати, дізнавайтеся більше про кавову культуру та насолоджуйтеся ідеальною кавою вдома.</p>
              <div className='promo__btns'>
                <button>товари</button>
                <button className='promo__btns-signin'>зареєструватися</button>
              </div>
            </div>
            <img src='./res/img/promo.jpg' className='promo__img'/>
        </div>

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
      </div>
    </>
      
  );
}

export default Main;
