import paystacklogo from '../images/paystacklogo.svg'
import bgimage from '../images/bgimage.svg'


export default function Home( ) {
    

    return (
        <main>
            <header className="bg-[#0d273c] text-white font-semibold">
                New Docs
            </header>
            <nav className='bg-white border flex text-[#011b33] justify-between p-[0.7rem] items-center font-medium'>
                <div className='flex gap-x-3'>
                    <img className='h-[22px]' src={paystacklogo} alt="paystacklogo" />
                    <div>
                        <p>Why stack?</p>
                    </div>
                    <div>
                        <p>Customers</p>
                    </div>
                    <div>
                        <p>Pricing</p>
                    </div>
                    <div>
                        <p>Learn</p>
                    </div>
                </div>
                <div className='flex gap-x-3 items-center'>
                    <div>
                        <p>Developers</p>
                    </div>
                    <div>
                        <p>Support</p>
                    </div>
                    <div>
                        <p>Login</p>
                    </div>
                    <button className='bg-[#3bb75e] text-white p-2 rounded hover:-translate-y-1 duration-700'>
                       <a href="https://dashboard.paystack.com/#/signup?_id=df47e727-0c05-45b2-895c-4f97ed96b382R">Create Free Account</a>
                    </button>
                    <div>
                        Nigerian Flag
                    </div>
                </div>
            </nav>
            <body className='mx-[5rem]'>
                <body1 className='flex' >
                    <div>
                        <div>
                            <h2 className='text-[#011b33] font-bold text-[3rem]'>Modern online and offline payments for Africa</h2>
                        </div>
                        <div>
                            <h4 className='text-[#011b33] font-small text-[1.6rem]'>Paystack helps businesses in Africa get paid by anyone, anywhere in the world</h4>
                        </div>
                        <div className='flex gap-x-4 items-center mt-[1.2rem]'>
                            <button className='bg-[#3bb75e] text-white p-2 rounded'><a href="https://dashboard.paystack.com/#/signup?_id=df47e727-0c05-45b2-895c-4f97ed96b382R">Create A Free Account</a></button>
                            <div className='text-[#3bb75e] font-medium'><a href="https://paystack.com/contact/sales#form">or Contact Sale</a></div>
                        </div>
                    </div>
                    <img className='w-[45rem]' src={bgimage} alt="Bg" />
                                       
                </body1>
            </body>
      </main>   
    )
}