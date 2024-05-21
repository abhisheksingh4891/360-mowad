import React from "react";
import c1 from "../Assets/c2.jpg";
import Navbar from "../Components/Navbar/Navbar";
import Logo from "../Components/Logo";

const Policy = () => {
  return (
    <div
      className="container-fluid p-4"
      style={{
        backgroundImage: `url(${c1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        filter: "brightness(80%)",
        fontFamily: "Raleway",
        height: "100vh",
      }}
    >
      <Logo />
      <Navbar />
      <div className="row d-flex justify-content-center align-items-center mx-1 pt-4 mt-3">
        <div className="col col-xl-5">
          <div
            className=""
            style={{
              borderRadius: "1rem",
              backgroundColor: "rgba(255, 255, 255, 0.7)",
            }}
          >
            <div className="row g-0">
              <div className="card-body p-4 text-black">
                <h1 className="text-center pb-2">
                  <u>Legislations & Policy</u>
                </h1>
                <div className="accordion" id="policyAccordion"  >
                  <div className="accordion-item" style={{ borderRadius: "1rem", backgroundColor: "rgba(255, 255, 255, 0.7)"}}>
                    <h2 className="accordion-header" id="headingOne" >
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        Policy 1: Data Protection
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#policyAccordion"
                    >
                      <div className="accordion-body">
                        <strong>This is the first policy.</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Nunc quis orci odio. Sed posuere consectetur est at lobortis.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item" style={{ borderRadius: "1rem", backgroundColor: "rgba(255, 255, 255, 0.7)"}}>
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Policy 2: Privacy Policy
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#policyAccordion"
                    >
                      <div className="accordion-body">
                        <strong>This is the second policy.</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Nunc quis orci odio. Sed posuere consectetur est at lobortis.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item" style={{ borderRadius: "1rem", backgroundColor: "rgba(255, 255, 255, 0.7)"}}>
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Policy 3: Terms of Service
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#policyAccordion"
                    >
                      <div className="accordion-body">
                        <strong>This is the third policy.</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Nunc quis orci odio. Sed posuere consectetur est at lobortis.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Policy;
