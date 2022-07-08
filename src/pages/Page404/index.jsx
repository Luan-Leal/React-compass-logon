import React from "react";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ScareCrow from "../../assets/scarecrow.png";
import "./index.css";

function Page404() {
  const nav = useNavigate();
  const [counter, setCounter] = React.useState(60);

  React.useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);
  if (counter === 0) {
    nav("/");
  }
  return (
    <section className="page-404">
      <header className="title-404">
        <div className="erro404">
          <p>404 not found</p>
        </div>
      </header>
      <main className="main-404">
        <div className="left-404">
          <img src={ScareCrow} alt="" />
        </div>
        <div className="right-404">
          <h1>
            I have bad news <br></br> for you
          </h1>
          <p>
            The page you are looking <br></br> for might be removed or is
            <br></br>
            temporarily unavailable
          </p>

          <Link to="/">
            <Button className="button404" text="Back to homepage" />
          </Link>
        </div>
      </main>
    </section>
  );
}

export default Page404;
