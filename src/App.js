import FeaturesNav from './Components/FeaturesNav/featuresnav';
import Images from './Components/Images/images';
import Navbar from './Components/Navbar/navbar';
import Product from "./Components/Product/product"
import BestSeller from "./Components/bestSeller/bestSeller";
import Sales from "./Components/Sales/sales";

function App() {
  return (
    <div>
      <Navbar />
      <Images/>
      <FeaturesNav/>
      <Product/>
      <BestSeller/>
      <div style={{ display: 'flex', marginLeft:"10%",marginRight:"15%", justifyContent:"space-between"}}><Sales/><Sales/><Sales/><Sales/></div>
    </div>
  );
}

export default App;
