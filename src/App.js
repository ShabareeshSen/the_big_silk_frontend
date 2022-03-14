
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import {Header, SecondaryHeader} from './CommonComponents/Header/Header';
import Footer from './CommonComponents/Footer/Footer';
import Cart from './CommonComponents/Cart/Cart';
import {  About, AddProducts, Benifits, 
          Faq, Home, Loyality, 
          NotFound, Press, Product, Shop } from './Pages';
import { useState } from 'react';
import NewUserDisCount from './CommonComponents/NewUserDiscount/NewUserDisCount';
import axios from 'axios';
import SignIn from './Pages/SignIn/Signip';
import SignUp from './Pages/SignUp/SignUp';
import AddCategory from './Pages/AddCategory/AddCategory';

function App() {
  const [showCart, setShowCart] = useState(false);
  const [showDiscountCard, setShowDiscountCard] = useState(true);
  // axios.get("http://localhost:5000/products").then((res)=>{
  //   console.log(res.data);
  // })
  return (
    <BrowserRouter>
      <Header setShowCart={setShowCart} />
      <SecondaryHeader />
      {showCart && <Cart setShowCart={setShowCart} />}
      <div className="bodyHeight">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/about" element={<About />} />
          <Route path="/benifits" element={<Benifits />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/loyality" element={<Loyality />} />
          <Route path="/press" element={<Press />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/addproduct" element={<AddProducts />} />
          <Route path="/addcategory" element={<AddCategory />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      {showDiscountCard && (
        <NewUserDisCount setShowDiscountCard={setShowDiscountCard} />
      )}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
