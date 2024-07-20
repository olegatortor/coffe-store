import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Info from '../components/info/Info';
import Goods from '../components/goods/Goods';

const Products = () => {


  return (
    <>
      <Header img="./res/img/product.jpg">
        <div className="header__relative header__relative-mini">
          <div className="header__main">
            <h1>Our Coffee</h1>
          </div>
        </div>
      </Header>
      <Info component={'Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.Afraid at highly months do things on at. Situation recommend objection do intention so questions.  As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.'}
            img={'../res/img/promo.jpg'}/>
      <Goods/>
      <Footer/>
    </>
  );
}

export default Products;
