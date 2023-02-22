import React from "react";
import {
  Animator, ScrollContainer,
  ScrollPage, batch,
  Fade, FadeIn,
  FadeOut, Move,
  MoveIn, MoveOut,
  Sticky, StickyIn,
  StickyOut, Zoom,
  ZoomIn, ZoomOut
} from "react-scroll-motion";

import photo from '../../assets/images/portfolio-pic.jpg';


const Portfolio = () => {
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());

  return (
    <>
      <ScrollContainer>
        <ScrollPage>
          <div className="row" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }} >
            <div className="col-7" style={{ fontSize: "40px" }}>
              <Animator animation={batch(Fade(), MoveOut(-250, 0))}>
                Hi, I'm Daniel Bartolini.
              </Animator>
              <Animator animation={batch(Fade(), MoveOut(-250, 0))}>
                I'm a web developer from Asheville, NC.
              </Animator>
            </div>

            <div className="col-5">

              <Animator animation={batch(Fade(), MoveOut(500, 0))}>
                <img style={{ height: "350px" }} src={photo} />
              </Animator>
            </div>
          </div>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={ZoomInScrollOut}>
            <span style={{ fontSize: "40px" }}>Hire my ass!</span>
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={FadeUp}>
            <span style={{ fontSize: "40px" }}>This is a scroll effect</span>
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }} >
            <span style={{ fontSize: "40px" }}>
              <Animator animation={MoveIn(-1000, 0)}>Hello Guys 👋🏻</Animator>
              <Animator animation={MoveIn(1000, 0)}>Nice to meet you 🙋🏻‍♀️</Animator>
              <Animator animation={MoveOut(1000, 0)}>Good bye ✋🏻</Animator>
              <Animator animation={MoveOut(-1000, 0)}>See you 💛</Animator>
            </span>
          </div>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={batch(Fade(), Sticky())}>
            <span style={{ fontSize: "40px" }}>Done</span>
            <br />
            <span style={{ fontSize: "30px" }}>
              There's FadeAnimation, MoveAnimation, StickyAnimation, ZoomAnimation
            </span>
          </Animator>
        </ScrollPage>
      </ScrollContainer>
    </>
  )
};

export default Portfolio;