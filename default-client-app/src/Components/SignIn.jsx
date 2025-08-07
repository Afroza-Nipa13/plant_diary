import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../Contexts/AuthContext';
import { FaGoogle } from 'react-icons/fa6';
import { Helmet } from 'react-helmet-async';

const SignIn = () => {
    const { logInUser, logInWithGoogle } = useContext(AuthContext)
    // const [error, setError]= useState('')
    // const navigate = useNavigate()
    // const location = useLocation()

    const handleSignIn = (e) => {

        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;



        logInUser(email, password)
            .then(result => {
                const user = result.user;
                // console.log(user)



                //  login to the database
                fetch(`https://backend-server-three-lyart.vercel.app/myplants/${email}`, {
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify({ email })
                }).then(res => res.json()).then(data => {
                    // console.log(data)
                    if (data) {


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
                            title: "Signed in successfully"
                        });

                        navigate(location.state || '/')
                    }

                })



            })
            .catch(error => {
                // console.log(error)
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: `${error.message}`,
                    showConfirmButton: false,
                    timer: 1500
                })









            })

    }

    const handleSignInGoogle = () => {

        logInWithGoogle().then(result => {
            // console.log(result.user)
            // navigate(location.state || '/')

        }).catch(error => {
            // console.log(error.message)

        })

    }
    return (
        <div className='pt-30'>
            <Helmet>
                <title>Sign In</title>
            </Helmet>
            <div className="card bg-base-100 w-full max-w-sm mx-auto my-8 shrink-0 shadow-2xl">
                <h2 className='text-3xl font-bold text-center mt-8'>Sign In</h2>
                <div className="card-body">
                    <form onSubmit={handleSignIn} className="fieldset">

                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" required />
                        <label className="label">Password</label>
                        <input type="password" name='password' className="input" placeholder="Password" required />
                        <button type='submit' className="btn bg-green-400 text-white mt-4">Sign In</button>

                    </form>
                    <button onClick={handleSignInGoogle} className="btn btn-neutral mt-4"><FaGoogle /> Sign In with Google</button>
                    <p className='font-semibold'>New to our page ? pleace <Link to='/signup' className='font-semibold text-red-400'>SignUp</Link></p>
                </div>
            </div>
        </div>
    );
};



export default SignIn;