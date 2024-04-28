import React from 'react'

export default function Login() {
  return (
    <div className='container-fluid  d-flex justify-content-center align-items-center vh-100 '>
        <div className='container p-0 w-75 h-75 shadow-sm rounded-4  d-flex align-items-center'>
            
        <form style={{boxShadow:"1px 1px 10px black,-1px -1px 10px black,1px -1px 10px black,-1px 1px 10px black"}} className='py-5 rounded-4 px-3 m-0 w-100 bg-light text-dark'>
  <div class="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
            
        </div>
    </div>
  );
}
