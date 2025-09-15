import { createBrowserRouter } from "react-router";
import App from'./App.jsx';
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import NotFound from "./pages/NotFound.jsx";
import About from "./pages/About.jsx";
import ProductList from "./pages/admin/products/ProductList.jsx";
import CreateProduct from "./pages/admin/products/CreateProduct.jsx";
import EditProduct from "./pages/admin/products/EditProduct.jsx";


let router = createBrowserRouter([

   { path: "/",  Component: App, 
      
     errorElement:<NotFound />,
   children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "contact", Component:Contact },

      {path:'/admin/products/', 
         children: [
        { index: true, Component:ProductList,},

        {path:'edit/:id', Component:EditProduct},

      {path:'create', Component:CreateProduct},
       ],
      },
      
         
    
         
      
  
  
   
   ]
},
  

]);

export default router
