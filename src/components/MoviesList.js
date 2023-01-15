import React from "react";
import styled from "@emotion/styled";
import { Add } from "@mui/icons-material";

const MoviesList = () => {

    // const CardDetails = () =>{
    //     return
    // }

  return (
    <Container>
      <h4>Recommended For You</h4>
      <Content>
        <Wrap>
          <img
            src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8254/1448254-v-423c38530432"
            alt=""
          />
          <section>
            <span className="font-14"  >Mukundan Uni Associa..</span>
            <span className="font-10"  >
              2hr 6min,
              <br /> Crime,Comedy,2022
            </span>
            <div>
              <Add className="font-18" />
              <span className="font-10" >ADD TO WATCHLIST</span>
            </div>
          </section>
        </Wrap>
        <Wrap>
          <img
            src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5002/1445002-v-29ff9172fed9"
            alt=""
          />
          <section>
            <span  className="font-14">Mukundan Uni Associa..</span>
            <span className="font-10">
              2hr 6min,
              <br /> Crime,Comedy,2022
            </span>
            <div>
              <Add className="font-18" />
              <span className="font-10">ADD TO WATCHLIST</span>
            </div>
          </section>
        </Wrap>
        <Wrap>
          <img
            src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3749/1443749-v-325db485edca"
            alt=""
          />
          <section>
            <span  className="font-14">Mukundan Uni Associa..</span>
            <span className="font-10">
              2hr 6min,
              <br /> Crime,Comedy,2022
            </span>
            <div>
              <Add className="font-18" />
              <span className="font-10">ADD TO WATCHLIST</span>
            </div>
          </section>
        </Wrap>
        <Wrap>
          <img
            src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6479/1436479-v-3bd70e9e2b4d"
            alt=""
          />
          <section>
            <span  className="font-14">Mukundan Uni Associa..</span>
            <span className="font-10">
              2hr 6min,
              <br /> Crime,Comedy,2022
            </span>
            <div>
              <Add className="font-18" />
              <span className="font-10">ADD TO WATCHLIST</span>
            </div>
          </section>
        </Wrap>
        <Wrap>
          <img
            src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4789/1434789-v-1452aa371a60"
            alt=""
          />
          <section>
            <span  className="font-14">Mukundan Uni Associa..</span>
            <span className="font-10">
              2hr 6min,
              <br /> Crime,Comedy,2022
            </span>
            <div>
              <Add className="font-18" />
              <span className="font-10">ADD TO WATCHLIST</span>
            </div>
          </section>
        </Wrap>
        <Wrap>
          <img
            src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1208/1431208-v-895cd0d6b37f"
            alt=""
          />
          <section>
            <span  className="font-14">Mukundan Uni Associa..</span>
            <span className="font-10">
              2hr 6min,
              <br /> Crime,Comedy,2022
            </span>
            <div>
              <Add className="font-18" />
              <span className="font-10">ADD TO WATCHLIST</span>
            </div>
          </section>
        </Wrap>
        <Wrap>
          <img
            src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9477/1429477-v-4c6f37f48b10"
            alt=""
          />
          <section>
            <span  className="font-14">Mukundan Uni Associa..</span>
            <span className="font-10">
              2hr 6min,
              <br /> Crime,Comedy,2022
            </span>
            <div>
              <Add className="font-18" />
              <span className="font-10">ADD TO WATCHLIST</span>
            </div>
          </section>
        </Wrap>
        {/* <Wrap>
            <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5613/1425613-v-75e4bceee4f9" alt="" />
        </Wrap> */}
      </Content>
    </Container>
  );
};

export default MoviesList;

const Container = styled.div`
  margin-top: -52px; 
  padding: 0 25px;
  height: 25rem;
  padding-top: 40px;
  background-color: #0c0d10;

  @media only screen and (max-width: 427px){
    width: 100vw;
    margin-top: 20px; 
    
  }
`;

const Content = styled.div`
  display: flex;
  gap: 23px;

  @media only screen and (max-width: 427px){
    width: fit-content;
    gap:16px;
    scroll-behavior: smooth;
    overflow-x: auto;
    // overflow: visi;
    // overscroll-behavior-x: contain;
    scroll-snap-type: x mandatory;
    scrollbar-width: none;

}
`;

const Wrap = styled.div`
    width: 160px;
    height: 210px;
    border-radius: 10px;
    overflow-y: hidden;
    position: relative;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    
    

    &:hover{
        transition: all 0.7s ease;
        transform: translateX(5px) scale(1.3);
        z-index: 1;
        
        section{
            height: 50%;
            padding: 4px;
            display: grid;
            grid-template-column: 1fr;
            justify-content: center;
            // border: 1px solid white;
            background-image: linear-gradient(to bottom,  #141b29 50%, #0c111b 70%);
            opacity: 0.98;
            // filter: blur(0.4px);
            position: absolute;
            z-index: 1;
            top: 50%;
            left: 0;
            right: 0;
            bottom 0;
          
    
            div{
                padding: 0 4px;
                height: auto;
                display: flex;
                flex-direction: row;
                align-items: center;

                span{
                  font-size: 10px;
                }

                &:hover{
                    background-color: #1e1e1e;
                }
            }
        
        }
        
    }
  @media only screen and (max-width: 427px){
    width: 120px;
    height: 160px;
      
  }

  
`;


