import React, {useState} from 'react';
import { Link, useLocation} from 'react-router-dom';

function Signup(props) {
    const location = useLocation()
    const {itemName, itemPrice} = location.state ||  { itemName:" ", itemPrice:0 };
    const handleSubmit = ()=>{
        alert(JSON.stringify(email, firstName, phoneNumber, lastName, items, address, amount, mobile, delivery))
    }
    const [email, setEmail] = useState("")
    const [firstName, setFirstName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [lastName, setLastName] = useState("")
    const [items, setItems] = useState(null)
    const [address, setAddress] = useState("")
    const [amount, setAmount] = useState(0)
    const [mobile, setMobile] = useState("")
    const [delivery, setDelivery] = useState("")

  return (
    <form onSubmit={handleSubmit} className='bg-[#f8f6f6]'>
        <div className='container m-auto px-6 md:px-4 '>
            <p className="text-2xl font-bold text-center uppercase pt-12 mb-6">To Confirm Your Order, Please Complete the Following Details.</p>
            <p className="bg-[#EB1D36] h-[2px] w-20 mx-auto mt-2 mb-12"></p>
            <div className='grid grid-cols-2 gap-10 mt-6'>
                {/* First Name */}
                <div>
                    <label className='text-sm'>FIRST NAME</label> <br />
                    <input 
                        className='w-full text-sm rounded-lg p-2 border-solid border border-slate-400' 
                        placeholder='first name'
                        type='text'
                        name='firstName'
                        value={firstName}
                        onChange={(e)=>setFirstName(e.target.value)}
                        required
                    />
                </div>

                {/* Last Name */}
                <div>
                    <label className='text-sm'>LAST NAME</label> <br />
                    <input 
                        className='w-full rounded-lg p-2 text-sm border-solid border border-slate-400' 
                        placeholder='last name'
                        type='text'
                        name='lastName'
                        value={lastName}
                        onChange={(e)=>setLastName(e.target.value)}
                        required
                    />
                </div>
            </div>
            <div className='grid grid-cols-2 gap-10 mt-6'>
                {/* Email */}
                <div>
                    <label className='text-sm'>EMAIL</label> <br />
                    <input 
                        className='w-full text-sm rounded-lg p-2 border-solid border border-slate-400' 
                        placeholder='example@gmail.com'
                        type='email'
                        name='email'
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        required
                    />
                </div>

                {/* Phone Number */}
                <div>
                    <label className='text-sm'>PHONE NUMBER</label> <br />
                    <input 
                        className='w-full rounded-lg p-2 text-sm border-solid border border-slate-400' 
                        placeholder='Phone number'
                        type='tel'
                        name='phoneNumber'
                        value={phoneNumber}
                        onChange={(e)=>setPhoneNumber(e.target.value)}
                        required
                    />
                </div>
            </div>
            <div className='grid grid-cols-2 gap-10 mt-6'>
                {/* Items */}
                <div>
                    <label className='text-sm uppercase'>
                    HOW MANY {itemName} (s) WOULD YOU LIKE TO BUY @ UGShs. {itemPrice}
                    </label> <br />
                    <input 
                        className='w-full text-sm rounded-lg p-2 border-solid border border-slate-400' 
                        placeholder="0"
                        type='number'
                        name='item'
                        value={items}
                        onChange={(e)=>setItems(e.target.value)}
                        required
                    />
                </div>

                {/* Address */}
                <div>
                    <label className='text-sm'>ADDRESS</label> <br />
                    <input 
                        className='w-full rounded-lg p-2 text-sm border-solid border border-slate-400' 
                        placeholder='address'
                        type='text'
                        name='address'
                        value={address}
                        onChange={(e)=>setAddress(e.target.value)}
                        required
                    />
                </div>
            </div>
            <div className='grid grid-cols-2 gap-10 mt-6'>

                {/* Amount */}
                <div>
                    <label className='text-sm'>TOTAL AMOUNT TO PAY</label> <br />
                    <input 
                        className='w-full rounded-lg p-2 text-sm border-solid border border-slate-400' 
                        value={itemPrice * items}
                        placeholder={amount}
                        name='amount'
                        type='number'
                        onChange={(e)=>setAmount(e.target.value)}
                        disabled
                    />
                </div>
                {/* Payment Mode */}
                <div>
                    <p className='text-sm uppercase'>Select your payment method.</p>
                    <input type="radio" id="mobile" name="payment" value={mobile} onChange={(e)=>setMobile(e.target.value)}/>
                    <label className='text-sm'>Mobile Money</label><br/>
                    <input type="radio" id="delivery" name="payment" value={delivery} onChange={(e)=>setDelivery(e.target.value)}/>
                    <label className='text-sm'>Pay On Delivery</label><br/>
                </div>

            </div>
            <div className='flex justify-center items-center py-12 space-x-7'>
                {/* Cancel button */}
                <button 
                    className='bg-[#EB1D36] hover:bg-[#C31228] transition duration-300 ease-in-out text-white font-bold py-2 px-8 rounded-full uppercase'
                >
                    <Link to='/'> cancel</Link>
                 
                </button>

                {/* Submit button */}
                <button 
                    className='bg-[#459c6e] hover:bg-[#116D6E] transition duration-300 ease-in-out text-white font-bold py-2 px-8 rounded-full uppercase'
                    type="submit"
                >
                    submit
                </button>
            </div>


        </div>



    </form>
  )
}
 

export default Signup