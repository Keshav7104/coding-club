import {auth,google,db} from "../config/firebase";
import{signInWithPopup,signOut} from "firebase/auth";
import { useState,useEffect} from "react";
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {getDocs,collection,addDoc} from "firebase/firestore";

export default function Register(){
// non google users sign-in form and its uploading on server
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [pass,setPass] = useState("");

  const nonGoogle = collection(db,"Non-google-users");

  const schema = yup.object().shape({
    username : yup.string().required(),
    email : yup.string().email().required(),
    password : yup.string().min(8).max(15).required(),
    confirmpassword : yup.string().required().oneOf([yup.ref("password"),null])
  });

  const {register} = useForm({
    resolver : yupResolver(schema)
  });

  const onsubmit = async (e) =>{
    try{
      e.preventDefault();
      await addDoc(nonGoogle,{
        Email :email,
        Password : pass,
        Username : name,
      });
      console.log('hogya bhenchod');
    }
    catch(err){
      console.error(err);
    }
  }
//usrname log-in
let [user,setUser] = useState("");
const [userlist,setUserlist] = useState([]);
const [username,setUsername] = useState("");
const [password,setPassword] = useState("");

const getuserlist = async () =>{
  try{
   const data = await getDocs(nonGoogle);
   const filtereddata = data.docs.map((doc) => ({
    ...doc.data(),
    id : doc.id,
   }));
   setUserlist(filtereddata);
  }
  catch(err){
    console.error(err);
  }
}

const onlogin =(e)=>{
  e.preventDefault();
  for(let i=0;i<userlist.length;i++){
    if(userlist[i].Username===username){
        if(userlist[i].Password===password){
          // auth.currentUser=username;
          setUser(username);
          console.log(user);
        }
      }
    }
  }

// current username and userlist

  useEffect(()=>{
    getuserlist();
  })


//google log-in and log out function
const signingoogle = async () => {
  try {
    await signInWithPopup(auth,google);
    setUser(auth.currentUser);
  }
  catch(err){
    console.error(err);
  }
}
const signout = async () =>{
  try {
    await signOut(auth);
    console.log("signed-out");
  }
  catch(err){
    console.error(err);
  }
}
  return(
    <>
    <div className="box">
      <div className="sign-in">
        <form onSubmit={onsubmit}>
        <label>Username</label>
        <input type="text" {...register("username")} onChange={(e) => {setName(e.target.value)}}/>
        <label>E-mail</label>
        <input type="text" {...register("email")} onChange={(e) => {setEmail(e.target.value)}}/>
        <label>password</label>
        <input type="password" {...register("password")} onChange={(e) => {setPass(e.target.value)}}/>
        <label>Confirm-password</label>
        <input type="password" {...register("confirmpassword")} />
        <button  type="submit">submit</button>
        </form>
        <div className="login">
          <p>login via</p>
          <button onClick={()=>signingoogle()}>Google</button><hr />
          <hr /><p>or through Username</p>
          <form onSubmit={onlogin}>
          <label>Username</label>
          <input type="text" onChange={(e) =>{setUsername(e.target.value)}}/>
          <label>Password</label>
          <input type="password"onChange={(e)=>{setPassword(e.target.value)}}/><hr />
          <button type="submit">login</button><hr/><hr/>
          </form>
        </div>
        <div className="logout">
          {user && <p>{user}</p>}
          <button onClick={()=>signout()}>Log-out</button>
        </div>
      </div>
    </div>
    </>
  );
}
