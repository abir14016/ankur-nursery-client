import './App.css';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import FloweringPlants from './Pages/FloweringPlants/FloweringPlants';
import FruitSeedlings from './Pages/FruitSeedlings/FruitSeedlings';
import Flowers from './Pages/Flowers/Flowers';
import About from './Pages/About/About';
import Order from './Pages/Order/Order';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import MedicinalPlants from './Pages/MedicinalPlants/MedicinalPlants';
// import MyOrders from './Pages/MyOrders/MyOrders';
import AllProducts from './Pages/AllProducts/AllProducts';
import SingleMedicinalPlant from './Pages/SingleMedicinalPlant/SingleMedicinalPlant';
import RequireAuth from './Pages/Shared/RequireAuth/RequireAuth';
import CheckOut from './Pages/CheckOut/CheckOut';
import { ToastContainer } from "react-toastify";
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders/MyOrders';
import MyReview from './Pages/Dashboard/MyReview/MyReview';
import AllOrders from './Pages/Dashboard/AllOrders/AllOrders';
import Products from './Pages/Dashboard/Products/Products';
import Users from './Pages/Dashboard/Users/Users';
import RequireAdmin from './Pages/Shared/RequireAdmin/RequireAdmin';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/allproducts' element={<AllProducts></AllProducts>}></Route>
        <Route path='/floweringplants' element={<FloweringPlants></FloweringPlants>}></Route>
        <Route path='/fruitseedlings' element={<FruitSeedlings></FruitSeedlings>}></Route>
        <Route path='/flowers' element={<Flowers></Flowers>}></Route>
        <Route path='/medicinalplants' element={<MedicinalPlants></MedicinalPlants>}></Route>
        <Route path='/medicinal/:id' element={<RequireAuth>
          <SingleMedicinalPlant></SingleMedicinalPlant>
        </RequireAuth>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/order' element={<Order></Order>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/checkout' element={<CheckOut></CheckOut>}></Route>
        {/* <Route path='/myorders' element={<MyOrders></MyOrders>}></Route> */}
        <Route path='/dashboard' element={<RequireAuth>
          <Dashboard></Dashboard>
        </RequireAuth>}>
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path='myreview' element={<MyReview></MyReview>}></Route>
          <Route path='allorders' element={<RequireAdmin>
            <AllOrders></AllOrders>
          </RequireAdmin>}></Route>
          <Route path='allproducts' element={<RequireAdmin>
            <Products></Products>
          </RequireAdmin>}></Route>
          <Route path='allusers' element={<RequireAdmin>
            <Users></Users>
          </RequireAdmin>}></Route>
        </Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
