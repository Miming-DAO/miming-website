export function HomeSection() {
  return (
    <section className="min-h-screen pt-52 flex flex-col justify-end p-20 sm:p-10">
      <div
        style={{ backgroundImage: "url('/images/miming-bg-1.png')" }}
        className="-z-10 opacity-75 absolute w-screen h-screen z-10 bg-black left-0 top-0 min-h-screen bg-no-repeat bg-cover bg-center flex flex-col justify-end p-20 sm:p-10"
      ></div>
      {/* <div className="absolute w-screen h-screen z-10 bg-black left-0 top-0"></div> */}
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col sm:flex-row items-center sm:gap-2 justify-center">
          <img
            src="/images/solana-logo.webp"
            className="h-4 hidden sm:block"
            alt=""
          />
          <p>Solana Contract Address:</p>
          <p>TBA</p>
        </div>
        <ul className="flex justify-center items-center mt-2 gap-2">
          <li>
          <a href="https://x.com/mimingcoin"><img src="/images/social/x.png" className="size-6" alt="" /></a>
          </li>
          <li>
            <a href="https://t.me/+l8QZJZ9D1UtjYWI1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                preserveAspectRatio="xMidYMid meet"
                version="1.0"
                viewBox="0.0 0.0 237.4 237.4"
                zoomAndPan="magnify"
                style={{ fill: "rgb(217, 217, 217)" }}
                className="size-6"
              >
                <g id="__id0_sau4wvf2c">
                  <path
                    d="M167,72.9l-20.2,95c-1,4.7-6.6,6.8-10.5,4l-48.1-35.8l53.1-48c0,0,3.6-2.9,2.6-3.8c-1.1-1.1-5,1.3-7.1,2.7 c-2,1.4-65,41.2-65,41.2L40,118.2c-3.6-1.1-3.6-6,1.6-8.2L159,64.8C164,62.3,168.1,68.1,167,72.9z"
                    style={{ fill: "inherit" }}
                  />
                  <path
                    d="M118.7,237.4C53.3,237.4,0,184.2,0,118.7C0,53.3,53.3,0,118.7,0c65.5,0,118.7,53.3,118.7,118.7 C237.4,184.2,184.2,237.4,118.7,237.4z M118.7,6.5C56.8,6.5,6.5,56.8,6.5,118.7c0,61.9,50.3,112.2,112.2,112.2 c61.9,0,112.2-50.3,112.2-112.2C230.9,56.8,180.6,6.5,118.7,6.5z"
                    style={{ fill: "inherit" }}
                  />
                </g>
              </svg>
            </a>
          </li>
          <li>
            <a href="https://github.com/Miming-DAO"><img src="/images/social/github.png" className="size-6" alt="" /></a>
          </li>
          <li>
            <a href="https://drive.google.com/file/d/1m0bjwGnKqHL21GC0izfHvEVQpDExpbFj/view?usp=sharing"><img src="/images/social/copy.png" className="size-6" alt="" /></a>
          </li>
        </ul>
      </div>
    </section>
  );
}
