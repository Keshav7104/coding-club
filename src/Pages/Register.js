import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';// to make for functional forms
import { useState,useEffect } from 'react';// to get data from other pages,hold input and extract data from server
// import { Info } from '../App';// context of info passed by main page
import { db } from '../Config/firebase'//server database
import { getDocs,collection,addDoc }  from 'firebase/firestore'//functions to mainuplate server
import './Register.css'//stylesheets

const Register = () => {
  //boolean to determine is admin loged in or not and to store admin id
  // const {setIsadmin,setId}= useContext(Info);

//getting data from server
  const members = collection(db,"Members");
  const [memberlist,setMemberlist] = useState([]);

  const getlist = async () =>{
    try{
        const data = await getDocs(members);
        const filterdata = data.docs.map((doc) => ({
          ...doc.data(),
          id : doc.id
        }));
        setMemberlist(filterdata);
        
    }
    catch(err){
      console.error(err);
    }
  }
      // const Admins = collection(db,"Admins");
      // const [Adminlist,setAdminlist] =useState([]);

  useEffect(()=>{
    getlist();
    // getAdmins();
  });

//adding memeber data to server
    const onsubmit=async(data)=>{
      try{
          for(let i=0;i<memberlist.length;i++){
            if(memberlist[i].Name===data.fullname){
              if(memberlist[i].Email===data.email){
                if(memberlist[i].Roll===data.roll){
                  alert("can't register with same roll-no.");
                  break;
                }
                else{
                  alert("can't register with same email")
                  break;
                }
              }
              else{
                alert("can't register with same username")
                break;
              }
            }
          else{
            await addDoc(members,{
              Name : data.fullname,
              Email : data.email,
              Branch : data.branch,
              Year : data.year,
              Language : data.prolan,
              Roll : data.roll
            })
            alert("Congrats you are registerd");
            break;
          }
          } 
      }
      catch(err){
        console.error(err);
      }
      }

      //admin log-in


      const checkadmin=(data)=>{
        // for(let i=0;i<Adminlist.length;i++){
        //   if(Adminlist[i].Id===data.login){
        //     if(Adminlist[i].Password===data.password){
        //       setIsadmin(1);
        //       setId(Adminlist[i].id);
        //     }
        //     else{
        //       setIsadmin(0);
        //     }
        //    }
        //    else{
        //     setIsadmin(0);
        //    }
        //   }
        }
//get list of current admins from server
        // const getAdmins = async () =>{
        //   try{
        //   const data1 = await getDocs(Admins);
        //   const filterdata1= data1.docs.map((doc)=>({
        //     ...doc.data(),
        //     id : doc.id
        //   }));
        //   // setAdminlist(filterdata1);
        // }
        // catch(err){
        //   console.error(err);
        // }
        // }
    //Register form template
      const registerschema = yup.object().shape({
        fullname : yup.string("Your name should consist only alphabets").required("Please enter your name"),
        email : yup.string().email("Please Provide an Valid email").required("Please Provide an Valid email"),
        branch : yup.string().required("Please enter the branch in which you are studying"),
        year : yup.number("Year should be a no. 1-4").required("Please Enter your year of course").min(1,"Year should be a no. 1-4").max(4,"Year should be a no. 1-4"),
        prolan : yup.string()
      })
      //Login form template
      const loginschema = yup.object().shape({
        login : yup.string().required("Please give your login-id"),
        password : yup.string().required("Enter your password to login").min(4).max(15)
      })
    
      const {register,handleSubmit } = useForm({
        resolver : yupResolver(registerschema),
        mode: "onBlur"
      });
      
      const {register:register2,handleSubmit:handleSubmit2,formState:{errors:errors2}} = useForm({
        resolver: yupResolver(loginschema),
        mode: "onBlur"
      })


    
        return(
          <>
          <div className='body'>
            <div className='main'>
              <input type="checkbox" id='chk' aria-hidden="true" />
              <div className='signup'>
          <form  onSubmit={handleSubmit(onsubmit)}>
          <label htmlFor="chk" aria-hidden="true" id='up'>Register</label>
            <input type="text" placeholder="Name" {...register("fullname")}/>
            <input type="text" placeholder="Email" {...register("email")}/>
            <input type="text" placeholder="Branch" {...register("branch")}/>
            <input type='number' placeholder="Year" {...register("year")}/>
            <input type="text" placeholder="Preferred language" {...register("prolan")}/>
            <input type='submit' className='button'/>
          </form>
          </div>
          <div className='login'>
          <form onSubmit={handleSubmit2(checkadmin)}>
          <label htmlFor="chk" aria-hidden="true">Login</label>
            <input type="text" placeholder='Login-id' {...register2("login")}/>
            <span>{errors2.login?.message}</span>
            <input type="password" placeholder='Password' {...register2("password")} />
            <span>{errors2.password?.message}</span>
            <input type="submit" className='button'/>
            </form>
            </div>
         </div>
         </div>
         </>
        );
}

export default Register
