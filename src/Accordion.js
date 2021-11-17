import React from "react";

function Accordion({ id, title, info }) {
  const [toggleinfo, setToggleinfo] = React.useState(false);

  const Infopara = () => {
    return <p className="question__about-info">{info}</p>;
  };

  const clickHandler = () => {
    if (!toggleinfo) {
      setToggleinfo(true);
    } else {
      setToggleinfo(false);
    }
  };
  const Button1 = () => {
    return (
      <button onClick={clickHandler} className="btn">
        &#43;
      </button>
    );
  };
  const Button2 = () => {
    return (
      <button onClick={clickHandler} className="btn">
        &#8722;
      </button>
    );
  };

  return (
    <>
      <div className="question_about">
        <div className="title">
          <h2 className="question__about-heading">{title}</h2>
          {toggleinfo ? <Button2 /> : <Button1 />}
        </div>
        {toggleinfo && <Infopara />}
      </div>
    </>
  );
}

export default Accordion;
