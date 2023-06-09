

const Contribute = () => {
    return (
        <div className="w-full flex justify-between items-center mt-20 mb-20">
            <div className="w-1/2 px-20" data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine">

                <h2 className="text-5xl font-bold mb-5 text-[#FF3057]">Contribute fluidly from any device</h2>
                <p className="text-2xl mb-5">Use a tablet, desktop, electronic whiteboard, or even mobile phone to join.</p>
                <p className="text-2xl">Pixilart enables effective and efficient creation, review, and organization of any type of content, as fluidly as pen and paper.</p>
            </div>

            <div className="w-1/2" data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine">
                <video src="/contribute.mp4" autoPlay loop muted playsInline></video>
            </div>
        </div>
    );
};

export default Contribute;