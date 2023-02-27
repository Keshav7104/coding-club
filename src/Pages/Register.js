import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import { useContext,useState,useEffect } from 'react';
import { Admin } from '../App';
import { db } from '../Config/firebase'
import {getDocs,collection,addDoc} from 'firebase/firestore'
// import './Register.css'

const Register = () => {
  //boolean to determine is admin loged in or not
  const {setIsadmin}= useContext(Admin);

//adding a member in database
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
      const Admins = collection(db,"Admins");
      const [Adminlist,setAdminlist] =useState([]);
  const getAdmins = async () =>{
    try{
    const data1 = await getDocs(Admins);
    const filterdata1= data1.docs.map((doc)=>({
      ...doc.data(),
      id : doc.id
    }));
    setAdminlist(filterdata1);
  }
  catch(err){
    console.error(err);
  }
  }
  useEffect(()=>{
    getlist();
    getAdmins();
  });


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
        for(let i=0;i<Adminlist.length;i++){
          if(Adminlist[i].Id===data.login){
            if(Adminlist[i].Password===data.password){
              setIsadmin(1);
              console.log("hello!");
            }
           }
          }
        }


      // if(isadmin===1){
      //   let ele =document.getElementById('Admin');
      //   ele.classList.remove('Admins');
      //   let ele2 =document.getElementById('Admin2');
      //   ele2.classList.remove('Admins');
      // }
      // const Addadmin =() =>{
      //   let name =document.getElementById("adminname").value;
      //   let pass1 =document.getElementById("adminpass").value;
      //   let newadmin ={ id : name,pass : pass1};
      //   SetAdmins([...Admins,newadmin]);
      // }
    
      const registerschema = yup.object().shape({
        fullname : yup.string("Your name should consist only alphabets").required("Please enter your name"),
        email : yup.string().email("Please Provide an Valid email").required("Please Provide an Valid email"),
        branch : yup.string().required("Please enter the branch in which you are studying"),
        roll : yup.string().max(11,"please give correct Roll-No.").min(8,"please give correct Roll-No.").required("Please enter your Academic Roll-No."),
        year : yup.number("Year should be a no. 1-4").required("Please Enter your year of course").min(1,"Year should be a no. 1-4").max(4,"Year should be a no. 1-4"),
        prolan : yup.string()
      })

      const loginschema = yup.object().shape({
        login : yup.string().required("Please give your login-id"),
        password : yup.string().required("Enter your password to login").min(4).max(15)
      })
    
      const {register,handleSubmit,formState : {errors} } = useForm({
        resolver : yupResolver(registerschema),
        mode: "onBlur"
      });
      
      const {register:register2,handleSubmit:handleSubmit2,formState:{errors:errors2}} = useForm({
        resolver: yupResolver(loginschema),
        mode: "onBlur"
      })

    
    
        return(
            <div>
          <form  onSubmit={handleSubmit(onsubmit)}>
            <h2>Register Here</h2>
            <div className="input error">
              <p>Name</p>
            <input type="text" placeholder="Enter your full name" {...register("fullname")}/>
            <span>{errors.fullname?.message}</span>
            </div>
            <div className="input error">
              <p>Email</p>
            <input type="text" placeholder="Enter your email" {...register("email")}/>
            <span>{errors.email?.message}</span>
            </div>
            {/* <div className='input error'>
              <p>Course</p>
              <input type="radio" name="Course" value="UG" />
              <label for="UG">UG</label>
              <input type="radio" name="Course" value="PG" />
              <label for="PG">PG</label>
              <input type="radio" name="Course" value="Phd" />
              <label for="Phd">Phd</label>
            </div> */}
            <div className="input error">
              <p>Branch</p>
            <input type="text" placeholder="Branch" {...register("branch")}/>
            <span>{errors.branch?.message}</span>
            </div>
            <div className="input error">
              <p>Roll-no.</p>
            <input type="text" placeholder="Enter your roll-no" {...register("roll")}/>
            <span>{errors.roll?.message}</span>
            </div>
            <div className="input error">
              <p>Year</p>
            <input type='number' placeholder="Enter your year of studying" {...register("year")}/>
            <span>{errors.year?.message}</span>
            </div>
            <div className="input error">
              <p>Preferred Coding language</p>
            <input type="text" placeholder="Enter any language if you know" {...register("prolan")}/>
            <span>{errors.prolan?.message}</span>
            </div>
            <div className="submit error">
            <input type='submit'/>
            </div>
          </form>
          <form onSubmit={handleSubmit2(checkadmin)}>
            <h2>login</h2>
            <div className='input error'>
              <p>Login-id</p>
            <input type="text" placeholder='Enter your login-id' {...register2("login")}/>
            <span>{errors2.login?.message}</span>
            </div>
            <div className='input error'>
              <p>Password</p>
                <input type="password" placeholder='Password' {...register2("password")} />
                <span>{errors2.password?.message}</span>
            </div>
            <div>
              <input type="submit" />
            </div>
            </form>
         </div>
        );
}

export default Register
