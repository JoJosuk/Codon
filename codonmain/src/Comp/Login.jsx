
import CompanyLogo from '../assets/companylogo.svg'
import CompanyLogoDark from '../assets/companylogo2.svg'
import { useEffect, useState } from 'react'

export default function  Login(){
    const [emailerror,setEmailerror]=useState('')
    const [pass,setPass]=useState('')
    const [cpass,setCpass]=useState('')
    const [name,setName]=useState('') //name used if name is needed to be checked
    const [isChecked, setIsChecked] = useState(false);
    const [theme, setTheme] = useState("light");
    const [page,setPage]=useState('account') //page used to change between login and signup
    const handleCheckboxChange = () => {
        setIsChecked((prev) => !prev);
        
    };
    useEffect(() => {
        if(window.matchMedia('(prefers-color-scheme: dark)').matches){
            setTheme("dark")
        }
    },[])
    useEffect(() => {
        if (theme=="dark"){
            document.body.classList.add("dark")
        }
        else{
            document.body.classList.remove("dark")
        }
    },[theme]);
    const names =(e)=>{
        if (e.target.value.length<1){
            setName("false")
        }
        else{
            setName("true")
        }
    }
    const emailvalidate=(e)=>{
        var pattern= /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
        var email=e.target.value
        console.log(email.length)
        if (email.length<1){
            setEmailerror("Please enter your email address");
        }
        else if (email.match(pattern)){
            setEmailerror("Valid email address");
        }
        else{
            setEmailerror("Invalid email address");
        }
    }
    const passvalidate=(e)=>{
        setPass(e.target.value)
        if(e.target.value.length<1){
            setCpass('');
        }
        else if(e.target.value.length<8){
            setCpass('Password should have min 8 charecters');
        }
        else{
            setCpass('Please Confirm the password')
        }
    }
    const cpassvalidate=(e)=>{
        var cpassnowset=e.target.value
        if(e.target.value<8 || pass.length<8){
            setCpass('Password should have min 8 charecters');
        }
        else if (cpassnowset===pass){
            setCpass("Password matched")
        }
        else{
            setCpass("Password not matched ")
        }
    }
    const pivane=()=>{
        console.log(cpass,emailerror,name,isChecked)
        if( cpass==="Password matched" && emailerror==="Valid email address" && name==="false" && isChecked===true && page==="account"){
            setPage('personal')
            alert("All good")
        }
        else{
            alert("Please fill all the fields correctly")
        }
    }

    return(
        <section className="flex justify-center items-center  font-inter flex-col gap-6 dark:text-white dark:bg-fullblack min-h-screen">
            <div className="text-white sm:p-3 mt-10 my-2 ">
            {
                theme=="light"?<img src={CompanyLogo} alt="Company Logo" className="w-40 h-40"/>:<img src={CompanyLogoDark} alt="Company Logo" className="w-40 h-40"/>
            }

            </div>
            <div className="w-l  mb-10 md:w-auto sm:m-3 border-solid border-2 border-neutral shadow justify-center dark:bg-boxblack rounded-lg dark:border-0">
                <div className="flex justify-between bg-slate-50 p-5 dark:bg-accountblack rounded-t-lg ">
                    <div className="flex flex-col justify-center items-center text-blue-300">
                        {
                            theme=='light'?<div className=" w-10 flex justify-center items-center bg-white dark:bg-inputblack rounded-full  aspect-square dark:border-2 dark:border-blue-300 ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                            </svg>
                            <p></p>
                            </div>:
                            <div className=" w-10 flex justify-center items-center bg-white dark:text-white rounded-full  aspect-square dark:border-2 dark:bg-blue-300 ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                            </div>

                        }
                        <p>Account</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        {
                            (theme=='light')?
                            <div className=" w-10 flex justify-center items-center  dark:bg-inputblack bg-white rounded-full  aspect-square">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>

                            </div>:
                            <div className=" w-10 flex justify-center items-center  dark:bg-inputblack bg-white rounded-full  aspect-square">
                            <p>2</p>    
                            </div>
                        }
                        <p>Personal</p>
                    </div><div className="flex flex-col justify-center items-center">
                        <div className=" w-10 flex justify-center items-center bg-white  dark:bg-inputblack rounded-full  aspect-square">
                        {
                            (theme=='light')?<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>:
                            <p>3</p>
                        }

                        </div>
                        <p>Pricing</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <div className=" w-10 flex justify-center items-center bg-white  dark:bg-inputblack rounded-full  aspect-square">
                        {
                            (theme=='light')?<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                            </svg>:
                            <p>4</p>
    
                        }
                        </div>
                        <p>Done</p>
                    </div>
                </div>
                {
                    (page=='account')?
                    <div className="p-8">
                    <div className="mb-4">
                        <label className="block text-sm mb-2 items-start text-left " htmlFor="username">
                            Name
                        </label>
                        <input
                        onClick={(e)=>names(e)}
                        autoComplete='off' className="dark:border-0 pl-2 shadow appearance-none border rounded w-full py-4 px-3-400 leading-tight focus:outline-none focus:shadow-outline placeholder-black dark:placeholder-white placeholder-opacity-75 dark:bg-inputblack" id="name" type="text" placeholder="Please Enter Your Full Name"></input>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm mb-2 items-start text-left " htmlFor="username">
                            Email*
                        </label>
                        <input autoComplete='off' className="dark:border-0 pl-2 shadow appearance-none border rounded w-full py-4 px-3-400 leading-tight focus:outline-none focus:shadow-outline placeholder-black dark:placeholder-white placeholder-opacity-75 dark:bg-inputblack" id="email" type="text" placeholder="Email Address"
                        onChange={(e) => emailvalidate(e)}></input>
                        <p className="text-fontgray text-sm text-left mt-1 px-1">{emailerror}</p>
                    </div>
                    <div className="">
                        <div className="flex sm:flex-col justify-between gap-4 ">
                            <div className="mb-4 w-1/2 sm:w-auto">
                                <label className="block text-sm mb-2 items-start text-left " htmlFor="username">
                                    Password*
                                </label>
                                <input className=" dark:border-0 pl-2 shadow appearance-none border rounded w-full py-4 px-3-400 leading-tight focus:outline-none focus:shadow-outline placeholder-black dark:placeholder-white placeholder-opacity-75 dark:bg-inputblack" id="pass" type="password" placeholder="Password"
                                onChange={(e)=>passvalidate(e)}></input>
                            </div>
                            <div className="mb-4 w-1/2 sm:w-auto">
                                <label className="block text-sm mb-2 items-start text-left " htmlFor="username">
                                    Confirm Password*
                                </label>
                                <input
                                onChange={(e)=>cpassvalidate(e)}
                                className=" dark:border-0 pl-2 shadow appearance-none border rounded w-full py-4 px-3-400 leading-tight focus:outline-none focus:shadow-outline placeholder-black dark:placeholder-white placeholder-opacity-75 dark:bg-inputblack " id="cpass" type="password" placeholder="Confirm Password"></input>
                            </div>
                        </div>
                        <p className="text-fontgray text-sm text-left mt-1 px-1">{cpass}</p>
                    </div>
                    <div className="flex items-center m-4">
                        <input checked={isChecked} onChange={handleCheckboxChange} id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-675 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="default-checkbox" className="ml-2 text-sm font-bold text-gray-900  dark:text-white dark:font-medium">I accept the Terms and Privacy Policy</label>
                    </div>
                    <div className="flex justify-end mt-5">
                        <button
                        onClick={pivane} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ">Next &nbsp; &#10097;</button>
                    </div>
                </div>:
                <span className='h-screen'>Coming soon</span>}
                
                

            </div>
            
        </section>
        
    )
}