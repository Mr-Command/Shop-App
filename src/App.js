import FeaturesNav from './Components/FeaturesNav/featuresnav';
import Images from './Components/Images/images';
import Navbar from './Components/Navbar/navbar';
import Product from "./Components/Product/product"
import BestSeller from "./Components/bestSeller/bestSeller";
import Sales from "./Components/Sales/sales";
import FeaturedProduct from './Components/featuredProduct/featuredProduct';
import SaleProduct from './Components/saleProduct/saleProduct';
import TopRatedProduct from './Components/topRatedProduct/topRatedProduct';

function App() {
  return (
    <div>
      <Navbar />
      <Images/>
      <FeaturesNav/>
      <Product/>
      <BestSeller/>
      <div style={{ display: 'flex', marginLeft:"10%",marginRight:"15%", justifyContent:"space-between"}}><Sales/><FeaturedProduct/><SaleProduct/><TopRatedProduct/></div>
    </div>
  );
}

export default App;
