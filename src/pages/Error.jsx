import { Link,useRouteError } from "react-router-dom"
import Wrapper from "../assets/wrappers/ErrorPage"
import img from '../assets/not-found.svg'
const Error = () => { 
  const error= useRouteError();
    console.log(error);
    if(error.status === 404){
      return <Wrapper> 
       <div>
        <img src={img} alt="not found " />
        <h3>ohh!</h3>
        <p>we can't seem to find page you are looking for</p>
        <Link to='/'>Back home</Link>
      </div>
      </Wrapper>
    
    }
  return (
<Wrapper>
  <div>
    <h3>something wrong </h3>
  </div>
</Wrapper>
  )
}
export default Error