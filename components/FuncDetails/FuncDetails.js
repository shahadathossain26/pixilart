import Image from "next/image";


const FuncDetails = () => {
    return (
        <div className="grid grid-cols-3 gap-4 mx-10 mt-10" data-aos="fade-down">
            <div className="card  bg-base-100 ">
                <div className="card-body">
                    <Image src='/icons/icon1.png' width={120} height={100} className='mx-auto'></Image>
                    <h2 className="card-title mx-auto text-2xl">Drawing</h2>
                    <p className="text-[14px] opacity-90 text-center">Whether you’re getting started or an experienced designer, Drawing online tool is a powerful vector graphic design solution on web. With online graphic design in various environment, you have everything you need to express your style and creativity.</p>
                    <a href="#" className="text-center text-blue-500"><u>Learn More</u></a>

                </div>
            </div>

            <div className="card bg-base-100 ">
                <div className="card-body">
                    <Image src='/icons/icon2.png' width={120} height={100} className='mx-auto'></Image>
                    <h2 className="card-title mx-auto text-2xl">Logo Creator</h2>
                    <p className="text-[14px] opacity-90 text-center">An Online Logo Maker for creating high quality vector graphics, headings, html5 logos, icons, web site elements and buttons by hundreds of templates and styles. Use the result with various other graphic and text editor and web design programs.</p>
                    <a href="#" className="text-center text-blue-500"><u>Learn More</u></a>

                </div>
            </div>

            <div className="card bg-base-100 ">
                <div className="card-body">
                    <Image src='/icons/icon3.png' width={120} height={100} className='mx-auto'></Image>
                    <h2 className="card-title mx-auto text-2xl">Painter</h2>
                    <p className="text-[14px] opacity-90 text-center">With online Paint tool you'll find many painting tools you need to unlock new artistic possibilities. Work with dozens of customizable brushes, paper textures that look and feel just like the real thing! Painter is totally free now!</p>
                    <a href="#" className="text-center text-blue-500"><u>Learn More</u></a>

                </div>
            </div>
        </div>
    );
};

export default FuncDetails;