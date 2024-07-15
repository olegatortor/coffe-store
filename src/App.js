import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Products from './pages/Products';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/info" element={<Products/>}/>
      </Routes>
    </Router>
  );
}

export default App;
