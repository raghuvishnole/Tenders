import './Login.css';
import { useState } from 'react';
import axios from 'axios';
import { __userapiurl } from '../../API_URL';
import { useNavigate } from 'react-router-dom';

function Login() {

  const navigate = useNavigate();
  const [ email , setEmail ] = useState();
  const [ password , setPassword ] = useState();
  const [ output , setOutput ] = useState();

  const handleSubmit=()=>{
    const userDetails={"email":email,"password":password};
    axios.post(__userapiurl+"login",userDetails).then((response)=>{
      //console.log(response.data);
      const users=response.data.userDetails;
      localStorage.setItem("token",response.data.token);
      localStorage.setItem("name",users.name);
      localStorage.setItem("email",users.email);
      localStorage.setItem("mobile",users.mobile);
      localStorage.setItem("address",users.address);
      localStorage.setItem("city",users.city);
      localStorage.setItem("gender",users.gender);
      localStorage.setItem("info",users.info);
      localStorage.setItem("role",users.role);
      (users.role=="admin")?navigate("/admin"):navigate("/user");
    }).catch((error)=>{
      setEmail("");
      setPassword("");
      setOutput("Invalid user or please verify your account....");  
    }); 
   };

  return (
    <>
               {/* About Start */}
               <div class="container-fluid bg-secondary p-0">
        <div class="row g-0">
<div class="col-lg-12 py-6 px-5">
<font color="blue">{output}</font>
<h1 class="display-5 mb-4">Login <span class="text-primary">Here!!!</span></h1>
<form>
  <div class="form-group">
    <label for="email">Email address:</label>
    <input type="email" class="form-control" onChange={e=>setEmail(e.target.value)} value={email} />
  </div>
  <br/>
  <div class="form-group">
    <label for="pwd">Password:</label>
    <input type="password" class="form-control" onChange={e=>setPassword(e.target.value)} value={password} />
  </div>
  <br/>
  <button type="button" class="btn btn-success" onClick={handleSubmit}>Submit</button>
</form>
</div>
        </div>    
    </div>
    {/* About End */}
    </>
  );
}

export default Login;

