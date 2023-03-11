import Image from "next/image";


const index = () => {
  return (
    <div className="body">
      <div className="container">
        <section className="tools-board">
          <div className="row">
            <label htmlFor="" className="title">Shapes</label>

            <ul className="options">
              <li className="option">
                <Image src='/rectangle.svg' width={15} height={15}></Image>
                <span>Rectangle</span>
              </li>

              <li className="option">
                <Image src='/circle.svg' width={15} height={15}></Image>
                <span>Circle</span>
              </li>

              <li className="option">
                <Image src='/triangle.svg' width={15} height={15}></Image>
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
              <li className="option active">
                <Image src='/brush.svg' width={20} height={20}></Image>
                <span>Brush</span>
              </li>

              <li className="option">
                <Image src='/eraser.svg' width={20} height={20}></Image>
                <span>Eraser</span>
              </li>

              <li className="option">
                <input type="range" name="size-slider" id="size-slider" />
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
        <section className="drawing-board"></section>
      </div>
    </div>
  );
};

export default index;
