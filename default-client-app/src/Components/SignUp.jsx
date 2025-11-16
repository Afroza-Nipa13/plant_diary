import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../Contexts/AuthContext';
import { Helmet } from 'react-helmet-async';

const SignUp = () => {
 const {createUser,setUser,updateUser}= useContext(AuthContext) 
 const navigate = useNavigate()  
 const handleSignUp=(e)=>{
    e.preventDefault();
    const form = e.target;
    
    const formData = new FormData(form);
    // const email =formData.get('email')
    // const password =formData.get('password')
   
    const { name,photo,email, password,...restData}=Object.fromEntries(formData.entries())
     const passPattern =  /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if(passPattern.test(password) == false){
       Swal.fire({
  position: "top-end",
  icon: "error",
  title: "Password must contain uppercase, lowercase letters, and be at least 6 characters long.Try it again..",
  showConfirmButton: false,
  timer: 1500
});
return  
    }
    
    

    createUser(email,password).then(result=>{
        // console.log('data created',result.user)
        const userProfile = {
            name,
            photo, 
            email,
            creationTime:result.user?.metadata?.creationTime,
            lastSignInTime:result.user?.metadata?.lastSignInTime,
        ...restData
    }

        // save data to db
        fetch('https://backend-server-three-lyart.vercel.app/users',{
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(userProfile)
        }).then(res=> res.json()).then(data => {
           if(data.insertedId){

             const Toast = Swal.mixin({
                        toast: true,
                        position: "top-end",
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                            toast.onmouseenter = Swal.stopTimer;
                            toast.onmouseleave = Swal.resumeTimer;
                        }
                    });
                    Toast.fire({
                        icon: "success",
                        title: "Signed up successfully"
                    });

           }


           updateUser({displayName:name, photoURL: photo}).then(()=>{
           setUser({...userProfile,displayName:name, photoURL: photo})
           }).catch(error=>{
            // console.log(error)
           })
           
           navigate('/')
        })



    })
    .catch(error=>{
        // console.log(error.message)
        Swal.fire({
  position: "top-end",
  icon: "error",
  title: `${error.message}`,
  showConfirmButton: false,
  timer: 1500
});
    })



    
 }   
    return (
       <div className='pt-30'>
        <Helmet>
                        <title>Sign Up</title>
                    </Helmet>
         <div className="card glass w-full max-w-sm mx-auto shrink-0 shadow-2xl">
            <h2 className='text-3xl font-bold text-primary text-center mt-8'>Sign Up</h2>
            <div className="card-body">
                <form onSubmit={handleSignUp} className="fieldset">
                    <label className="label">Name</label>
                    <input type="text" name='name' className="input" placeholder="Your name" />
                    <label className="label">Photo</label>
                    <input type="text" name='photo' className="input" placeholder="photoURL" />
                    <label className="label">Email</label>
                    <input type="email" name='email' className="input" placeholder="Email" />
                    <label className="label">Password</label>
                    <input type="password" name='password' className="input" placeholder="Password" />
                    <button className="btn bg-secondary text-base-100 mt-4">Sign Up</button>
                </form>
                <p className='font-semibold'>Already have an account ? pleace <Link to='/signin' className='font-semibold text-blue-700'>Sign in</Link></p>
            </div>
        </div>
       </div>
    );
};

export default SignUp;