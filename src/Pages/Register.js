import { useState } from 'react';// to get data from other pages,hold input and extract data from server
import { db } from '../Config/firebase'//server database
import {  collection, addDoc } from 'firebase/firestore'//functions to mainuplate server
import './Register.scss'//stylesheets

const Register = () => {
  const members = collection(db, "Members");
  const [data, setdata] = useState({fullname:"",email:"",branch:"",year:0,prolan:""})

  //adding memeber data to server
  const onsubmit = async  (e) => {
    e.preventDefault();
    try {
      await addDoc(members, {
        Name: data.fullname,
        Email: data.email,
        Branch: data.branch,
        Year: data.year,
        Language: data.prolan
      })
      alert("Congrats you Applied Succesfully for our club.");
    }
    catch (err) {
      console.error(err);
    }
  }


  return (
    <>
      <div className='body'>
        <div className='main'>
          <input type="checkbox" id='chk' aria-hidden="true" />
          <div className='signup'>
            <form onSubmit={onsubmit}>
              <label htmlFor="chk" aria-hidden="true" id='up'>Register</label>
              <input type="text" required  placeholder="Name" onChange={(e)=>setdata((prev)=>({...prev,fullname:e.target.value}))} />
              <input type="email" required placeholder="Email" onChange={(e)=>setdata((prev)=>({...prev,email:e.target.value}))}  />
              <input type="text" placeholder="Branch"  onChange={(e)=>setdata((prev)=>({...prev,branch:e.target.value}))} />
              <input type='number' required placeholder="Year" onChange={(e)=>setdata((prev)=>({...prev,year:e.target.value}))}  />
              <input type="text" placeholder="Preferred language" onChange={(e)=>setdata((prev)=>({...prev,prolan:e.target.value}))} />
              <button type='submit' className='button' >Submit</button>
            </form>
          </div>
          <div className='login'>
            <form >
              <label htmlFor="chk" aria-hidden="true">Admin</label>
              <input type="text" placeholder='Login-id'  />
              <input type="password" placeholder='Password'   />
              <button type="submit" className='button'>LOG-IN</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register
