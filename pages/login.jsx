import { useState, useEffect } from "react"
import {useRouter} from "next/router";
import Link from "next/link";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Example() {
    const router = useRouter();
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
    })
    const handleChange = (e) => {
        const { name, value } = e.target
        setUserInfo({
            ...userInfo,
            [name]: value,
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(userInfo)
        fetch("/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Basic ${btoa("junaid:2002")}`,
            },
            body: JSON.stringify(userInfo),
        })
            .then((res) => res.json())
            .then((data) => {
                // console.log(data)
                if (data.success) {
                    // alert("Account Created")
                    toast.success('Login Success', {
                        position: "top-left",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                    if (typeof window !== "undefined") {
                        localStorage.setItem("user", JSON.stringify(data.token))
                    }
                    setTimeout(() => {
                        router.push("/")
                    }, 1000)
                } else {
                    toast.error(data.error, {
                        position: "top-left",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                }
            }
            )
    }
   
    return (
        <>

            <ToastContainer
                position="bottom-left"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            {/* <Navbar /> */}
            <div className="h-max text-center py-20">
                <h1 className="text-3xl font-semibold mt-20">
                    Login to your account
                </h1>
                <div className=" w-full ">
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 w-80 my-10 mx-auto">
                        <input
                            onChange={handleChange}
                            id="email"
                            name="email"
                            required
                            type="email"
                            value={userInfo.email}
                            className="border-2 border-gray-300 p-2 rounded-lg"
                            placeholder="Email address"
                        />
                        <input
                            onChange={handleChange}
                            id="password"
                            name="password"
                            type="password"
                            required
                            minLength={1}
                            value={userInfo.password}
                            className="border-2 border-gray-300 p-2 rounded-lg"
                            placeholder="Password"
                        />
                        <Link href="/forgot"><p className="text-sm text-gray-500 flex justify-end cursor-pointer hover:text-gray-800">forgot password?</p></Link>
                        <button
                            type="submit"
                            className="bg-black text-white p-2 rounded-lg hover:text-gray-300 hover:bg-gray-800"
                        >
                            Login
                        </button>
                    </form>
                    <div>
                        <p className="text-sm text-gray-500">Don&#39;t have an account? <Link href="/signup"><span className="text-black cursor-pointer hover:text-gray-800">Sign up</span></Link></p>
                    </div>

                </div>
            </div>
            {/* <Footer /> */}
        </>
    )
}
