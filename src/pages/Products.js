import Header from '../components/header/Header';
import Beans from '../components/beans/Beans';
import Footer from '../components/footer/Footer';
import Info from '../components/info/Info';
import Goods from '../components/goods/Goods';

function App() {


  return (
    <>
      <Header img="product">
        <div className="header__relative header__relative-mini">
          <div className="header__main">
            <h1>Our Coffee</h1>
          </div>
        </div>
      </Header>
      <Info/>
      <Goods/>
      <Footer/>
    </>
  );
}

export default App;
