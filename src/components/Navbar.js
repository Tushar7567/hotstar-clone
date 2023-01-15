import React from 'react'
import styled from '@emotion/styled'
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  return (
    <Nav>
      <Section>
      <Label htmlFor="toggler" className="toggler">
            <MenuIcon  />  
            {/* <div>
                
            </div>     */}
      </Label>
      
      <Logo src='/images/logo.svg' /><LogoText >Hotstar</LogoText>
      <NavMenu>
        <div>
            <span>TV</span>
            <div>
                <a href="/">Mood Mix</a>
                <a href="/">Other Shows</a>
                <a href="/">Hotstar Specials</a>
                <a href="/">Quix</a>
                <a href="/">Star Jalsha</a>
                <a href="/">StarPlus</a>
                <a href="/">Star Vijay</a>
                <a href="/">Star Bharat</a>

            </div>
        </div><div>
            <span>Movies</span>
            <div>
                <a href="/">Odia</a>
                <a href="/">Hindi</a>
                <a href="/">Bengali</a>
                <a href="/">Telugu</a>
                <a href="/">Malayalam</a>
                <a href="/">Tamil</a>
                <a href="/">Marathi</a>
                <a href="/">English</a>
                <a href="/">Kannada</a>
                <a href="/">Korean</a>
                <a href="/">Japanese</a>
            </div>
        </div><div>
            <span>Sports</span>
            <div>
                <a href="/">Cricket</a>
                <a href="/">Football</a>
                <a href="/">Hockey</a>
                <a href="/">Kabaddi</a>
                <a href="/">Martial Arts</a>
                <a href="/">Tennis</a>
                <a href="/">Khelo India</a>
                <a href="/">Formula E</a>
                <a href="/">Athletics</a>
            </div>
        </div>
        <a href='/'>
            Disney+
        </a>
        <a href='/'>
            KiDS
        </a>

      </NavMenu>
      </Section>
      <SectionTwo>
      <Input  type='search' placeholder='Search' autocomplete='off' />
      <div style={{ display: 'flex', justifyContent: 'space-between'}}>
      <Btn> Subscribe </Btn>
      <Login>Login</Login>
      </div>
      </SectionTwo>
    </Nav>
  )
}

export default Navbar

const Nav = styled.div`
    width: 100vw;
    height: 70px;
    background: #090b13;
    display: flex;
    justify-content: space-between;
    align-items: center; 
    padding: 0 36px; 
    position: fixed;
    top:0;
    z-index: 3;

    @media only screen and (max-width: 425px){
        padding: 0; 
    }
`


const Section = styled.section`
    // border: 1px solid white;
    display: flex;
    justify-content: space-between;
    align-items: center
`

const Label = styled.label`
    padding-top: 14px;
`

const SectionTwo = styled.section`
    // border: 1px solid white;
    width: 33rem;
    display: flex;
    justify-content: space-between;
    @media only screen and (max-width: 427px){
       width: 9rem;
    }

`

const Logo = styled.img`
    width: 80px;
`

const LogoText = styled.div`
    padding-top: 17px;
`

 
const NavMenu = styled.div`
    width: 25rem;
    display: flex;
    padding: 11px 12px 0 10px;
    justify-content: space-around;
    
    a{
        text-decoration: none;
        color: white;
    }

    div{
        color: white;
        // display: flex;
        position: relative;

        div{

            display: none;
            // background-color: #1d2026;
            a{
                // width: 7rem;
                height: 2rem;
                padding-left: 10px;
                background-color: #1d2026;

            }
            a:hover{
                background-color: #090b13;
            }
            transition: all 0.5s linear;
            
            @keyframes navDropdown{
                0%{
                    transform: translateY(5%)
                }
                100%{
                    transform: translateY(0%);
                }
            }

        }
        &:hover{
            div{
                position: absolute;
                z-index: 9999;
                // top: 38px;
                left: -17px;
                background-color: #1d2026;
                // border: 1px solid white;
                padding-top: 20px;
                color: black;
                width: 8rem;
                height: auto;
                display: flex;
                justify-content: space-around;
                flex-direction: column;
                align-items: left;
                animation: navDropdown 0.3s linear;
            }
        }
    }

    @media only screen and (max-width: 427px){
        display: none;
    }
    
`

// const SubHoverMenu = styled.div`
    
// `

const Login = styled.div`
    cursor: pointer;
` 

const Input = styled.input`
    width: 100px;
    background: #090b13;
    border: 0;
    color: white;
    border-bottom:1px solid rgba(255,255,255,.5);
    outline: 0;
    transition: all .5s ease-in-out;

    &::placeholder{
        color:rgba(255,255,255,.5);
        text-align: left;
        font-size: 16px;
        letter-spacing: 2px;
        font-weight: 100;
      }

    &:focus{
        width: 300px;
        border-bottom:1px solid rgba(255,255,255,.5);
        transition: all 500ms cubic-bezier(0, 0.110, 0.35, 2);
    }

    @media only screen and (max-width: 427px){
        width: 80px;
        &:focus{
            width: 110px;
        }
    }

`

const Btn = styled.button`
    margin-right: 30px; 
    background-color: #1f80e0;
    color: White;
    font-size: 14px;
    font-weight: bold;
    width: 100px;
    height: 25px; 
    border-radius: 5px;
    text-transform: Uppercase;

    @media only screen and (max-width: 427px){
        display: none;
    }
`
