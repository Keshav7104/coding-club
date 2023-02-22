import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup'

function Register (){
    const onsubmit=(data)=>{
        console.log(data);
        //this should be send to server or club data manager using backend
      }

      // const checkadmin=(data)=>{
      //   if(data.login====)
      // }
    
      const registerschema = yup.object().shape({
        fullname : yup.string("Your should consist only alphabets").required("Please enter your name"),
        email : yup.string().email("Please Provide an Valid email").required("Please Provide an Valid email"),
        branch : yup.string().oneOf(["cse",'ece','ee','me','ce',null]).required(),
        roll : yup.string().max(11).min(8).required("Please enter your Academic Roll-No."),
        year : yup.number("Year should be a no. 1-4").required("Please Enter your year of course").min(1,"Year should be a no. 1-4").max(4,"Year should be a no. 1-4"),
        prolan : yup.string()
      })

      const loginschema = yup.object().shape({
        login : yup.string().required("Please give your login-id"),
        password : yup.string().required("Enter your password to login").min(4).max(8),
        confirmPassword : yup.string().required("Verify Password again").oneOf([yup.ref("password"),null],"password does not match")
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
              <label htmlFor='Name' />
            <input type="text" placeholder="Enter your full name" {...register("fullname")}/>
            <span>{errors.fullname?.message}</span>
            </div>
            <div className="input error">
            <input type="text" placeholder="Enter your email" {...register("email")}/>
            <span>{errors.email?.message}</span>
            </div>
            <div className="input error">
            <input type="text" placeholder="Branch(cse,ece,ee,me,ce)" {...register("branch")}/>
            <span>{errors.branch?.message}</span>
            </div>
            <div className="input error">
            <input type="text" placeholder="Enter your roll-no" {...register("roll")}/>
            <span>{errors.roll?.message}</span>
            </div>
            <div className="input error">
            <input type='number' placeholder="Enter your year of studying" {...register("year")}/>
            <span>{errors.year?.message}</span>
            </div>
            <div className="input error">
            <input type="text" placeholder="Enter any language if you know" {...register("prolan")}/>
            <span>{errors.prolan?.message}</span>
            </div>
            <div className="submit error">
            <input type='submit'/>
            </div>
          </form>
          <form onSubmit={handleSubmit2(onsubmit)}>
            <h2>login</h2>
            <div className='input error'>
            <input type="text" placeholder='Enter your login-id' {...register2("login")}/>
            <span>{errors2.login?.message}</span>
            </div>
            <div className='input error'>
                <input type="password" placeholder='Password' {...register2("password")} />
                <span>{errors2.password?.message}</span>
            </div>
            <div className='input errors'>
                <input type="password" placeholder='Confirm-Password' {...register2("confirmPassword")} />
                <span>{errors2.confirmPassword?.message}</span>
            </div>
            <div className='submit '>
                <input type='submit' />
            </div>
          </form>
          </div>
        )
}

export default Register
