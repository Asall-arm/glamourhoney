import Index from "./Pages/Index/Index";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Products from "./Pages/Products/Products";
import Articles from "./Pages/Articles/Articles";
import AllProducts from "./Pages/AllProducts/AllProducts";
import SingleArticle from "./Pages/SingleArticle/SingleArticle";
import SingleProduct from "./Pages/SingleProduct/SingleProduct";
import Dashboard from "./Components/Dashboard/Pages/DashboardHome/DashboardHome";
import AmountProducts from "./Components/Dashboard/Pages/AmountProducts/AmountProducts";
import Comments from "./Components/Dashboard/Pages/Comments/Comments";
import Users from "./Components/Dashboard/Pages/Users/Users";
import Orders from "./Components/Dashboard/Pages/Orders/Orders";
import Error from "./Components/Error/Error";
import Profile from "./Pages/Profile/Profile";
import Cart from "./Pages/Cart/Cart";
import Checkout from "./Pages/Checkout/Checkout";
// import ThemeCustomizer from "./Components/Dashboard/Components/ThemeCustomizer";

const routes = [
  { path: "/", element: <Index /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/products", element: <Products /> },
  { path: "/products/allwomenproduct", element: <AllProducts /> },
  { path: "/products/allmenproduct", element: <AllProducts /> },
  { path: "/products/allkidsproduct", element: <AllProducts /> },
  { path: "/Articles", element: <Articles /> },
  { path: "/Articles/singlearticle", element: <SingleArticle /> },
  { path: "/singleproduct/:id", element: <SingleProduct /> },
  { path: "/profile", element: <Profile /> },
  { path: "/cart", element: <Cart /> },
  { path: "/checkout", element: <Checkout /> },
  { path: "/dashboard", element: <Dashboard /> },

  { path: "/products/allaccessoryproduct", element: <AllProducts /> },
  { path: "/products/allaccessoryproduct", element: <AllProducts /> },

  { path: "/dashboard/amountproducts", element: <AmountProducts /> },
  { path: "/dashboard/comments", element: <Comments /> },
  { path: "/dashboard/users", element: <Users /> },
  { path: "/dashboard/orders", element: <Orders /> },
  // { path: "/dashboard/theme", element: <ThemeCustomizer /> },

  { path: "*", element: <Error /> },
];

export default routes;
