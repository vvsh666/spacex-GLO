import logo from '../../assets/images/logo.svg'
import { HeaderBlock, Logo, NavBlock, NavSecondaryBlock, NavList, NavItem, Link, LinkSecondary } from './Header.styled'

export const Header = () => {
  return (
    <HeaderBlock>
      <Logo src={logo} alt="Logo Space X" />
      <NavBlock>
        <NavList>
          <NavItem>
            <Link href="/">Falcon 1</Link>
          </NavItem>
          <NavItem>
            <Link href="/">Falcon 9</Link>
          </NavItem>
          <NavItem>
            <Link href="/">Falcon Heavy</Link>
          </NavItem>
          <NavItem>
            <Link href="/">Updates</Link>
          </NavItem>
        </NavList>
      </NavBlock>
      <NavSecondaryBlock>
        <NavList>
          <NavItem>
            <LinkSecondary href="/">Home</LinkSecondary>
          </NavItem>
          <NavItem>
            <LinkSecondary href="calendar.html">Calendar</LinkSecondary>
          </NavItem>
        </NavList>
      </NavSecondaryBlock>
    </HeaderBlock>
  )
}