import { Link, Outlet, useNavigation } from "react-router-dom"
import Navbar from "../components/Navbar"



const HomeLayout = () => {
const navigation =  useNavigation();
// console.log(navigation);
const isPageLoading=navigation.state==='loading';
const value ='some thing';
  return (
    <>
   <Navbar/>
   <section className="page">
   {isPageLoading?

   (<div className="loading"/>)
   :(
    <Outlet context={{value}} />)
    }
    
   </section>
   
    </>
    
  )
}
export default HomeLayout