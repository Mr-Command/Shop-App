import FeaturesNav from './Components/FeaturesNav/featuresnav';
import Images from './Components/Images/images';
import Navbar from './Components/Navbar/navbar';
import Product from "./Components/Product/product"
import BestSeller from "./Components/bestSeller/bestSeller"

function App() {
  return (
    <div>
      <Navbar />
      <Images/>
      <FeaturesNav/>
      <Product/>
      <BestSeller/>
    </div>
  );
}

export default App;
