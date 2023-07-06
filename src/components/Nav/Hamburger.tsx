
interface HamburgerProps {
  openNav: boolean,
  setOpenNav: (bool: boolean) => void
}

const Hamburger = ({openNav, setOpenNav}:HamburgerProps):JSX.Element => {

    const handleToggle = ():void => {
        setOpenNav(!openNav)
    }
  return (

			<div className={`hamburger m-3 left-[90px] top-3 ${openNav ? 'active' : ''}`} onClick={handleToggle}> 
				<div className="line"></div>
				<div className="line"></div>
				<div className="line"></div>
			</div>

  );
}

export default Hamburger