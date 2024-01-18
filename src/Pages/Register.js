import { useState, useEffect } from 'react';// to get data from other pages,hold input and extract data from server
import { db } from '../Config/firebase'//server database
import { getDocs, collection, addDoc } from 'firebase/firestore'//functions to mainuplate server
import './Register.scss'//stylesheets

const Register = ({ setIsadmin, setId }) => {
  const members = collection(db, "Members");
  const [data, setdata] = useState({fullname:"",email:"",branch:"",year:0,prolan:""})
  const [adminDat, setadminDat] = useState({id:"",pass:""});
  const [memberlist, setMemberlist] = useState([]);

  const getlist = async () => {
    try {
      const data = await getDocs(members);
      const filterdata = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id
      }));
      setMemberlist(filterdata);

    }
    catch (err) {
      console.error(err);
    }
  }
  const Admins = collection(db, "Admins");
  const [Adminlist, setAdminlist] = useState([]);

  useEffect(() => {
    getlist();
    getAdmins();
    console.log(memberlist);
  },[]);

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

  //admin log-in


  const checkadmin = (e) => {
    e.preventDefault();
    for (let i = 0; i < Adminlist.length; i++) {
      if (Adminlist[i].Id === adminDat.id) {
        if (Adminlist[i].Password === adminDat.pass) {
          setIsadmin(1);
          setId(Adminlist[i].id);
          alert("Logged In Succesfully.");
          console.log("Welcome chief...");
          break;
        }
        else {
          setIsadmin(0);
        }
      }
      else {
        setIsadmin(0);
      }
    }
  }
  //get list of current admins from server
  const getAdmins = async () => {
    try {
      const data1 = await getDocs(Admins);
      const filterdata1 = data1.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id
      }));
      setAdminlist(filterdata1);
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
            <form onSubmit={checkadmin}>
              <label htmlFor="chk" aria-hidden="true">Admin</label>
              <input type="text" placeholder='Login-id' onChange={(e)=>setadminDat((prev)=>({...prev,id:e.target.value}))}  />
              <input type="password" placeholder='Password' onChange={(e)=>setadminDat((prev)=>({...prev,pass:e.target.value}))}  />
              <button type="submit" className='button'>LOG-IN</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register
