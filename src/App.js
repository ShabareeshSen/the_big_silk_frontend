import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./CommonComponents/Header/Header";
import AddProducts from "./Pages/AddProducts/AddProducts";
import AddCategory from "./Pages/AddCategory/AddCategory";
import AddPromoCode from "./Pages/AddPromoCode/AddPromoCode";
import SignIn from "./Pages/SignIn/Signip";
import SignUp from "./Pages/SignUp/SignUp";

function App() {
  return (
    <div>
      <Header />
      {/* <AddProducts/> */}
      {/* <AddCategory /> */}
      {/* <AddPromoCode /> */}
      <SignIn />
      {/* <SignUp/> */}
    </div>
  );
}

export default App;
