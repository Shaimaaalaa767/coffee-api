import { Form ,redirect,useNavigation} from "react-router-dom";
import axios, { Axios } from "axios";
import {toast} from 'react-toastify';

const newsletterUrl= 'https://www.course-api.com/cocktails-newsletter';
export const action =async({request})=>{
const formData=await request.formData();
const  data =Object.fromEntries(formData);

try {
  const response =await axios.post(newsletterUrl, data);


toast.success(response.data.msg);
return redirect('/');

} catch (error) {
  console.log(error);
  
  toast.error(error?.response?.data?.msg);
return error
}

};
const Newsletter = () => {
  const navigation =useNavigation();
  const isSubmiting= navigation.state==='submitting';
  return (
    <Form className="form" method="POST">
      <h4 style={{textAlign : 'center' , marginBottom :'2rem'}}>
        Our newsletter
      </h4>
      {/* name */}
      <div className="form-row" >
      <label htmlFor="name" className="form-label">name</label>

<input type="text" className="form-input" name="name" id="name" 
required />

      </div>

{/* lastname */}
 <div className="form-row">
      <label htmlFor="lastName" className="form-label">lastName</label>
<input type="text" className="form-input" name="lastName" id="lastName" 
required />
      </div>

      {/*email */}
 <div className="form-row">
      <label htmlFor="email" className="form-label">email</label>
<input type="text" className="form-input" name="email" id="email" 
required />
      </div>

       <button
        type='submit'
        className='btn btn-block'
        style={{ marginTop: '0.5rem' }}
        disabled={isSubmiting}
      >
        {isSubmiting? 'submiting...': 'submit'}
      </button>

    </Form>
  )
}
export default Newsletter