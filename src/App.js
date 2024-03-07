import FeaturesNav from './Components/FeaturesNav/featuresnav';
import Images from './Components/Images/images';
import Navbar from './Components/Navbar/navbar';
import Product from "./Components/Product/product"
import BestSeller from "./Components/bestSeller/bestSeller";
import Sales from "./Components/Sales/sales";
import FeaturedProduct from './Components/featuredProduct/featuredProduct';
import SaleProduct from './Components/saleProduct/saleProduct';
import TopRatedProduct from './Components/topRatedProduct/topRatedProduct';
import Schön from './Components/bottomPart/Schön/schön';
import Twitter from './Components/bottomPart/Twitter/twitter';

function App() {
  return (
    <div>
      <Navbar />
      <Images/>
      <FeaturesNav/>
      <Product/>
      <BestSeller/>
      <div style={{ display: 'flex', marginLeft:"10%",marginRight:"15%", justifyContent:"space-between"}}><Sales/><FeaturedProduct/><SaleProduct/><TopRatedProduct/></div>
      <div style={{ height: "400px",paddingLeft: "5%", paddingRight: "5%",backgroundColor: "rgb(233, 232, 232)",display: 'flex', marginLeft:"10%",marginRight:"15%", justifyContent:"space-between"}}>
      <div style={{ display: "flex", justifyContent: "space-between", width: "90%", margin: "0 auto" }}>
    <div style={{ width: "25%" }}> 
        <Schön/>
    </div>
    <div style={{ width: "25%" }}> 
        <Twitter/>
    </div>
    <div style={{ width: "25%" }}> 
        <Twitter/>
    </div>
    <div style={{ width: "25%" }}> 
        <Twitter/>
    </div>
</div>
</div>
</div>
  );
}

export default App;
