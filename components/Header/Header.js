import Image from "next/image";
import Link from "next/link";


const Header = () => {
    return (
        <div className="navbar px-0 pr-5 lg:px-10 ">
            <div className="navbar-start z-[1001]">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link href='/index.js' className='text-black font-bold text-[18px]' >Home</Link></li>
                        <li><Link href='/index.js' className='text-black font-bold text-[18px]' >My Reviews</Link></li>
                        <li><Link href='/index.js' className='text-black font-bold text-[18px]' >Add Service</Link></li>
                        <li><Link href='/index.js' className='text-black font-bold text-[18px]' >Blog</Link></li>
                    </ul>
                </div>
                <Link href='/index.js'>
                    {/* <img className='w-20 md:w-32 lg:w-52' src='' alt="" /> */}
                    <Image src='/logo.png' width={170} height={150}></Image>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex z-[1001]">
                <ul className="menu menu-horizontal px-1">
                    <li><Link href='/index.js' className='text-black font-bold text-[18px]' >Home</Link></li>
                    <li><Link href='/index.js' className='text-black font-bold text-[18px]' >Works</Link></li>
                    <li><Link href='/index.js' className='text-black font-bold text-[18px]' >Pricing</Link></li>
                    <li><Link href='/index.js' className='text-black font-bold text-[18px]' >Support</Link></li>
                </ul>
            </div>
            <div className="navbar-end z-[1001]">
                <a className='text-white no-underline  border-2 text-[18px] border-[#FF3057] px-5 py-2 rounded-[50px]  text-center bg-[#FF3057]' href="/">LogIn</a>
            </div>
        </div>
    );
};

export default Header;