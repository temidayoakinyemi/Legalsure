import React from "react";
import "./Development.css";
import lawyer from "../../assets/lawyer.svg";
import developer from "../../assets/developer.svg";
import profile2 from "../../assets/profile2.svg";
import house from "../../assets/house.png";

const Development = () => {
  return (
    <div className="development">
      <div className="development-content">
        <div className="alldevelop">
          <div className="developmentppp">
            <div className="developmentps2">
              <img src={lawyer} alt="" />
              <div className="developmentps">
                <p className="developmentp">Real estate</p>
                <p className="developmentp2">lawyer</p>
              </div>
            </div>
            <p className="developmetp3">
              It is a long established fact that <br /> a reader will be
              distracted by the <br />
              looking at its layout.
            </p>
          </div>

          <div className="developmentppp">
            <div className="developmentps2">
              <img src={developer} alt="" />
              <div className="developmentps">
                <p className="developmentp">Real estate</p>
                <p className="developmentp2">developer</p>
              </div>
            </div>
            <p className="developmetp3">
              It is a long established fact that <br /> a reader will be
              distracted by the <br />
              looking at its layout.
            </p>
          </div>

          <div className="developmentppp">
            <div className="developmentps2">
              <img src={profile2} alt="" />
              <div className="developmentps">
                <p className="developmentp">Real estate</p>
                <p className="developmentp2">adviceor</p>
              </div>
            </div>
            <p className="developmetp3">
              It is a long established fact that <br /> a reader will be
              distracted by the <br />
              looking at its layout.
            </p>
          </div>
        </div>

        <div className="alldevelopment2">
          <img src={house} className="house" alt="house" />
          <div className="developmeth2lorem">
            <h2 className="developmenth2">
              Development and <br /> adviceory services <br /> for you
            </h2>
            <p className="developmentlorem">
              Lorem Ipsum is simply dummy text of the printing and typesetting{" "}
              <br />
              industry. Lorem Ipsum has been the industry's standard dummy{" "}
              <br /> text ever since the 1500s
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Development;
