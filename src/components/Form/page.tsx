// 'use client'
// import React, { useState } from 'react'
// const page = () => {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [phone, setPhone] = useState('');
//     const [message, setMessage] = useState('');
//     const [outputmsg,setOutputmsg] =useState('')
//     const [loading,setLoading]=useState(false)
//     const submitForm = async () => {
//        if(name&&email&&phone&&message){
//         setLoading(true)
//         const f = await fetch('/api', {
//             method: 'POST',
//             headers:{
//                 'Content-Type':'application/json'

//             },
//             body:JSON.stringify({name,email,phone,message})
//         })
//         const j=await f.json();
//         setOutputmsg(j.msg)
//         console.log(j.msg);
//         setLoading(false)
//        }
//        else alert('Fill all the details.')  
//     }
//     return (
//         <div className='mt-5 mx-8 
//         md:flex md:flex-col
//         '>
//             <input type="text" placeholder='Name'
//                 className='border border-black px-2 py-1 w-[100%] h-[50px] my-5
//                 md:h-[30px]'
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//             />
//             <input type="text" placeholder='Email'
//                 className='border border-black px-2 py-1 w-[100%] h-[50px] my-5
//                  md:h-[30px]'
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//             />
//             <input type="text" placeholder='Phone'
//                 className='border border-black px-2 py-1 w-[100%] h-[50px] my-5
//                  md:h-[30px]'
//                 value={phone}
//                 onChange={(e) => setPhone(e.target.value)}
//             />
//             <textarea name="" id="" placeholder='Message'
//                 className='border border-black  px-2 py-1 w-[100%] h-[120px] resize-none my-5
//                  md:h-[80px]'
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//             ></textarea>
//             <button onClick={submitForm}
//                 className={`w-[90px] h-[90px] ${outputmsg?'bg-green-400':'bg-blue-400'} rounded-full mb-5 text-[white]`}>
//                 {loading?'Submitting':`${outputmsg==='Submitted'?'Submitted':'Submit'}`}
//             </button>

//         </div>
//     )
// }

// export default page

'use client';
import React, { useState } from 'react';
import { submitFormAction } from './actions';
 const page = () => {
    const [outputmsg, setOutputmsg] = useState('');
    const [loading, setLoading] = useState(false);

    return (
        <div className='mt-5 mx-8 md:flex md:flex-col'>
            <form action={async (formData) => {
                setLoading(true);
                const response = await submitFormAction(formData);
                setOutputmsg(response);
                setLoading(false);
            }} className='flex flex-col'>
                <input type='text' name='name' placeholder='Name' 
                className='border rounded px-2 py-1 w-[100%] h-[50px] my-5 md:h-[30px] outline-none'
                required />
                <input type='text' name='email' placeholder='Email' 
                className='border  rounded px-2 py-1 w-[100%] h-[50px] my-5 md:h-[30px] outline-none' 
                required/>
                <input type='text' name='phone' placeholder='Phone' 
                className='border  rounded  px-2 py-1 w-[100%] h-[50px] my-5 md:h-[30px] outline-none' 
                required/>
                <input name='message' placeholder='Message' 
                className='border  rounded  px-2 py-1 w-[100%] h-[120px] resize-none my-5 md:h-[80px] outline-none'
                required></input>
                <button type='submit' className={`w-[90px] h-[90px] ${outputmsg.includes('Submitted') ? 'bg-green-400' : 'bg-blue-400'} rounded-full mb-5 text-white`}>
                    {loading ? 'Submitting' : `${outputmsg.includes('Submitted') ? 'Submitted' : 'Submit'}`}
                </button>
                {outputmsg && <p className='text-green-500'>{outputmsg}</p>}
            </form>
        </div>
    );
};
export default page