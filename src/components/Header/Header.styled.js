import { styled } from "styled-components";

export const HeaderBlock = styled.header`
  max-width: 1230px;
	width: 90%;
	margin: 50px auto 120px;
	display: flex;
	justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin: 30px auto;
  }
`

export const Logo = styled.img`
  max-width: 100%;
	height: auto;
  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`

export const NavBlock = styled.nav`
  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`

export const NavSecondaryBlock = styled.nav`

`

export const NavList = styled.ul`
  margin: 0;
	padding: 0;
	display: flex;
	list-style: none;
`

export const NavItem = styled.li`
  
`

export const Link = styled.a`
	text-decoration: none;
	cursor: pointer;
  color: #ffffff;
	margin-left: 10px;
	margin-right: 10px;
	font-size: 12px;
	line-height: 14px;
`

export const LinkSecondary = styled.a`
	text-decoration: none;
	cursor: pointer;
  color: #808080;
	margin-left: 10px;
	margin-right: 10px;
	font-size: 12px;
	line-height: 14px;

  // &:last-child {
  //   margin-right: 0;
  // }
`