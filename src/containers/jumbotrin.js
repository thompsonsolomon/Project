import React, { Fragment } from "react";
import "../components/styles/style.css";
import { JomboData } from "../components/fixtures/Jombo";

export default function Jumbotron() {
  return (
    <>
      {JomboData.map((item, index) => (
        <div
          className="Inner"
          style={{ flexDirection: item.direction }}
          key={index}
        >
          <Fragment>
            <div className="pane">
              <h1 className="title">{item.title}</h1>
              <h2 className="subtitle">{item.subTitle}</h2>
            </div>
            <div className="paneTwo">
              {item.image ? (
                <img className="image" src={item.image} alt={item.alt} />
              ) : (
             <video  className="image" src={item.video} muted autoPlay loop />

              )}
            </div>
          </Fragment>
        </div>
      ))}
    </>
  );
}
