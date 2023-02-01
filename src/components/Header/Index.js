import Navigation from 'components/Header/Navigation';
import { useFilter } from 'context/filter';
import { RxHamburgerMenu } from 'react-icons/rx';
import { GrClose } from 'react-icons/gr';
const Logo = window.location.origin + "/images/logo.png";


function Index() {

  const { navigation,setNavigation } = useFilter();

  const navigationToggle = () => {
    setNavigation(!navigation)
  }

  return (
    <header>
        <div className="container">
            <div className="row align-items-center justify-content-between">
                <div className="col-xl-4 col-lg-3 col-auto">
                  <div className="logo">
                    <a href="/" title="Game Plus">
                      <img src={Logo} alt="Game Plus" />
                    </a>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-7 d-none d-lg-block">
                  <Navigation />
                </div>
                <div className="col-lg-2 d-none d-lg-block">
                  <div className="header-button">
                    <a href="/" title="Lets Play"> LET'S PLAY </a>
                  </div>
                </div>
                <div className="col-auto d-lg-none">
                  <div className="mobile-navigation">
                    <button onClick={navigationToggle}>
                      {navigation ? <GrClose /> : <RxHamburgerMenu /> }
                    </button>
                    {navigation ?  <Navigation /> : false}
                  </div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Index