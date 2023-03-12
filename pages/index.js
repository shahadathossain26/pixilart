import Head from "next/head";
import Image from "next/image";


const index = () => {
  // if (typeof window !== "undefined") {
  //   const canvas = document.querySelector("canvas");
  //   window.ctx = canvas.getContext("2d");


  // }
  // const drawing = (e) => {
  //   ctx.lineTo(e.offsetX, e.offsetY);
  //   ctx.stroke();
  // }

  return (
    <div className="body">
      <Head>
        <title>Pixilart</title>
        <script src="/script.js" defer></script>
      </Head>
      <div className="container">
        <section className="tools-board">
          <div className="row">
            <label htmlFor="" className="title">Shapes</label>

            <ul className="options">
              <li className="option tool" id="rectangle">
                <Image src='/rectangle.svg' width={15} height={15} alt='rectangle'></Image>
                <span>Rectangle</span>
              </li>

              <li className="option tool" id="circle">
                <Image src='/circle.svg' width={15} height={15} alt='rectangle'></Image>
                <span>Circle</span>
              </li>

              <li className="option tool" id="triangle">
                <Image src='/triangle.svg' width={15} height={15} alt='rectangle'></Image>
                <span>Triangle</span>
              </li>

              <li className="option">
                <input type="checkbox" name="fill-color" id="fill-color" />
                <label htmlFor="fill-color">Fill color</label>
              </li>
            </ul>
          </div>

          <div className="row">
            <label htmlFor="" className="title">Options</label>

            <ul className="options">
              <li className="option active tool" id="brush">
                <Image src='/brush.svg' width={20} height={20} alt='rectangle'></Image>
                <span>Brush</span>
              </li>

              <li className="option tool" id="eraser">
                <Image src='/eraser.svg' width={20} height={20} alt='rectangle'></Image>
                <span>Eraser</span>
              </li>

              <li className="option">
                <input type="range" name="size-slider" id="size-slider" min="1" max="30" />
              </li>
            </ul>
          </div>

          <div className="row colors">
            <label htmlFor="" className="title">Colors</label>

            <ul className="options">
              <li className="option"></li>
              <li className="option selected"></li>
              <li className="option"></li>
              <li className="option"></li>
              <li className="option">
                <input type="color" value='#4A98F7' name="color-picker" id="color-picker" />
              </li>
            </ul>
          </div>

          <div className="row buttons">
            <button className="clear-canvas">Clear Canvas</button>
            <button className="save-img">Save As Image</button>

          </div>
        </section>

        <section className="drawing-board">
          <canvas width={810} height={569}></canvas>
        </section>
      </div>
    </div>
  );
};

export default index;
