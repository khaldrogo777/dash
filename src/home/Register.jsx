import React from "react";
const subTitle = "save the day";
const desc = "Limited time offer! Hurry up";
const title = (
  <h2 className="title">
    {" "}
    Join on a long day workshop for{" "}
    <b>
      {" "}
      Advance<span>mastering</span>
    </b>
    on sales{" "}
  </h2>
);
const Register = () => {
  return (
    <section className="register-section padding-tb  pb-0">
      <div className="container">
        <div className="row g-4 row-cols-lg-2 row-cols-1 align-items-center">
          <div className="col">
            <div className="section-header">
              <span className="subtitle">{subTitle}</span> {title}
              <p>{desc}</p>
            </div>
          </div>
          <div className="col">
            <div className="section-wrapper">
              <h4>Register Now</h4>
              <form action="register-form">
                <input
                  type="text"
                  name="name"
                  placeholder="username"
                  className="reg-input"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="reg-input"
                />
                <input
                  type="number"
                  name="number"
                  placeholder="phone"
                  className="reg-input"
                />
                <button type="submit" className="lab-btn">
                  Register Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
