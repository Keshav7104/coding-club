import React from "react";
import './Intro.css';
function Intro(){
    return (     <>
                <div>
                  <link rel="stylesheet" href="Intro.css" />
                  <meta charSet="UTF-8" />
                  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossOrigin="anonymous" />
                  <title>Intro</title>
                  <div className="letter-image">
                    <div className="animated-mail">
                      <div className="back-fold" />
                      <div className="letter">
                        <div className="letter-border" />
                        <div className="letter-title">
                          <h1 className="display-6 text-center ">Coding Pundits</h1>
                        </div>
                        <div className="letter-context" />
                        <div className="letter-stamp">
                          <div className="letter-stamp-inner" />
                        </div>
                      </div>
                      <div className="top-fold" />
                      <div className="body" />
                      <div className="left-fold" />
                    </div>
                    <div className="shadow" />
                  </div>
                </div>



              

                </>
              );
            }
export default Intro;