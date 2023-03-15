import Image from "next/image";


const Gallary = () => {
    return (
        <div>
            <h2 className="text-center mb-10 mt-16 text-xl font-bold  "><span className="opacity-80">SEE OUR</span> <p className="text-5xl font-bold">Gallary</p></h2>
            <div className="grid grid-cols-4 gap-4 mx-10">
                <div className="card  bg-base-100 shadow-xl border  ">
                    <div className="card-body">
                        <Image src='/gallary_images/1678703273473.jpg' width={400} height={400} className=''></Image>
                    </div>
                </div>

                <div className="card  bg-base-100 shadow-xl border  ">
                    <div className="card-body">
                        <Image src='/gallary_images/1678703635288.jpg' width={400} height={400} className=''></Image>
                    </div>
                </div>

                <div className="card  bg-base-100 shadow-xl border  ">
                    <div className="card-body">
                        <Image src='/gallary_images/1678703749352.jpg' width={400} height={400} className=''></Image>
                    </div>
                </div>

                <div className="card  bg-base-100 shadow-xl border  ">
                    <div className="card-body">
                        <Image src='/gallary_images/1678703779832.jpg' width={400} height={400} className=''></Image>
                    </div>
                </div>

                <div className="card  bg-base-100 shadow-xl border  ">
                    <div className="card-body">
                        <Image src='/gallary_images/1678716083134.jpg' width={400} height={400} className=''></Image>
                    </div>
                </div>

                <div className="card  bg-base-100 shadow-xl border  ">
                    <div className="card-body">
                        <Image src='/gallary_images/1678782457276.jpg' width={400} height={400} className=''></Image>
                    </div>
                </div>

                <div className="card  bg-base-100 shadow-xl border  ">
                    <div className="card-body">
                        <Image src='/gallary_images/1678782467428.jpg' width={400} height={400} className=''></Image>
                    </div>
                </div>

                <div className="card  bg-base-100 shadow-xl border  ">
                    <div className="card-body">
                        <Image src='/gallary_images/1678873116573.jpg' width={400} height={400} className=''></Image>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallary;