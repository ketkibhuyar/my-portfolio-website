import { useDencrypt } from "use-dencrypt-effect";
import ketkiPic from '../../assets/KetkiImage.jpg';
import "./home.scss";
import { useEffect } from "react";
const greetings = ["नमस्ते", "Hello", "Guten Tag", "こんにちは"];

const HomePage = () => {
  const [greeting, setGreeting] = useDencrypt("🙏🙏");

  useEffect(() => {
    let i = 0;
    let run = true;

    const loop = async () => {
      while (run) {
        await new Promise((resolve) => setTimeout(resolve, 3000));
        await setGreeting(greetings[i]);

        i = i === greetings.length - 1 ? 0 : i + 1;
      }
    };

    if (run) {
      loop();
    }

    return () => {
      run = false;
    };
  }, [setGreeting]);

  return (
    <>
      <div className="intro section">
        <div className="intro-image">
          <div className="image-container">
            <img src={ketkiPic} alt="" />
          </div>
        </div>
        <div className="intro-description">
          <div className="description-container">
            <h2 className="description-title">{greeting}</h2>
            <p className="description-text">
            I am good at developing Full-Stack applications using following technologies.
            </p>
            <div className="description-logos">
              <span>
                <img
                  src="https://cdn.worldvectorlogo.com/logos/react-2.svg"
                  alt=""
                />
              </span>
              <span>
                <img
                  src="https://cdn.worldvectorlogo.com/logos/sass-1.svg"
                  alt=""
                />
              </span>
              <span>
                <img
                  src="https://cdn.worldvectorlogo.com/logos/logo-javascript.svg"
                  alt=""
                />
              </span>
              <span>
                <img
                  src="https://cdn.worldvectorlogo.com/logos/dot-net-core-7.svg"
                  alt=""
                />
              </span>
              <span>
                <img
                  src="https://cdn.worldvectorlogo.com/logos/nodejs-1.svg"
                  alt=""
                />
              </span>
            </div>
            <p className="description-text">
              I am also huge fan of beautifully designed products and hence go
              extra mile to achieve the same.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;