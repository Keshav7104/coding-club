import React from "react";
import { useState,useEffect,useContext } from 'react';//to hold input,get data from server,and info from other pages
import { db } from "../Config/firebase";// data from server
import { getDocs,collection,deleteDoc,doc,addDoc,updateDoc } from 'firebase/firestore'// functions to mainuplate data on server
import { Info } from "../App";// context to get info from other page
import { useForm } from 'react-hook-form';// to make efficent form to add admin
import "./Admin.css";// stylesheets

export default function Admin(){

    const [master,setMaster] = useState([]);//admins list from server

    const [newpass,setNewpass] = useState("");//new password variable

    const [conpass,setConpass] = useState("");// variable to confirm password

    const [error,setError] = useState("");// messgage to display if newpass and conpass does not match

    const {isadmin,id} = useContext(Info);// useful info taken from other pages

    //getting admins  data from server and checking if user is admin or not
    const masters = collection(db,"Admins");
    const getmasters = async () =>{
        try{
            const data = await getDocs(masters);
            const filterdata = data.docs.map((doc) =>({
                ...doc.data(),
                id : doc.id
            }));
            setMaster(filterdata);
        }
        catch(err){
            console.error(err);
        }
    }

    const help = () =>{
        if(isadmin){
            let ele = document.getElementById("non-admin");
            ele.classList.remove("message");
            ele.classList.add("non-display");
            let ele2 = document.getElementById("new");
            ele2.classList.remove("non-display");
            ele2.classList.add("console");
        }
    }

    useEffect(()=>{
        help();
        getmasters();
    });

    // to remove a admin
    const removeadmin  = async (id) =>{
        const doc1 =doc(db,"Admins",id);
        await deleteDoc(doc1);
    }

    // to add a new admin
    const {register,handleSubmit} = useForm();
    const onsubmit = async (data)=>{
        try{
            await addDoc(masters,{
                Id : data.Name,
                Password : data.pass
            });
        }
        catch(err){
            console.error(err);
        }
    }

    // to change the password of current using admin
    const changePassword = async () =>{
        if(newpass===conpass){
            const user = doc(db,"Admins",id);
            await updateDoc(user,{Password : newpass});
            alert("password changed....");
        }
        else{
            setError("Please enter same passwords");
        }
    }

    return(
        <>
        <div id="non-admin" className="message">
           <h1>Sorry you don't have access</h1>
        </div>    
        <div id="new" className="non-display">
            <div className="Add-admin">
                <h1>New-Admin</h1>
                <form onSubmit={handleSubmit(onsubmit)}>
                <input type="text" placeholder="Name" {...register("Name")}/>
                <input type="password" placeholder="Password" {...register("pass")}/>
                <input type="submit" />
                </form>
            </div>
            <div className="Admin-list">
                <h1>Current Admins are :- </h1>
                {master.map((data) =>{
                return <div><h2>{data.Id}</h2>
                <button onClick={()=>removeadmin(data.id)}>Remove</button></div>
                })}
                
            </div>
            <div className="password">
                <h1>Change Password</h1>
                <input type="password" placeholder="New-password" onChange={(e)=>setNewpass(e.target.value)} />
                <input type="password" placeholder="Confirm-password" onChange={(e)=>setConpass(e.target.value)} />
                <p>{error}</p>
                <button onClick={()=>changePassword()}>Submit</button>
            </div>
        </div>
        </>
    )
}