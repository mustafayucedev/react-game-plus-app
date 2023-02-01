const Facebook = window.location.origin + "/images/icon-facebook.svg";
const Twitter = window.location.origin + "/images/icon-twitter.svg";
const Instagram = window.location.origin + "/images/icon-instagram.svg";
const Youtube = window.location.origin + "/images/icon-youtube.svg";

function Index() {
  return (
    <footer>
        <div className="footer-top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="footer-menu">
                            <ul>
                                <li>
                                    <a href="/" title="Games">Games</a>
                                </li>
                                <li>
                                    <a href="/" title="Membership">Membership</a>
                                </li>
                                <li>
                                    <a href="/" title="Download">Download</a>
                                </li>
                                <li>
                                    <a href="/" title="Contact us">Contact us</a>
                                </li>
                                <li>
                                    <a href="/" title="Blog">Blog</a>
                                </li>
                                <li>
                                    <a href="/" title="FAQS">FAQS</a>
                                </li>
                                <li>
                                    <a href="/" title="Services Status">Services Status</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 offset-lg-2">
                        <div className="row">
                            <div className="col-6">
                                <div className="footer-social">
                                    <h3>Follow Us!</h3>
                                    <ul>
                                        <li>
                                            <a href="/" title="Facebook">
                                                <img src={Facebook} alt="Facebook" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/" title="Twitter">
                                                <img src={Twitter} alt="Twitter" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/" title="Instagram">
                                                <img src={Instagram} alt="Instagram" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/" title="Youtube">
                                                <img src={Youtube} alt="Youtube" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="language">
                                    <h3>Site Language</h3>
                                    <select name="language" id="language">
                                        <option value="En">English</option>
                                        <option value="Tr">Turkish</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-bottom">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg mb-3 mb-lg-0">
                        <div className="footer-sub-menu">
                            <ul>
                                <li>
                                    <a href="/" title="Kullanıcı Sözleşmesi">Kullanıcı Sözleşmesi</a>
                                </li>
                                <li>
                                    <a href="/" title="Gizlilik Politikası">Gizlilik Politikası</a>
                                </li>
                                <li>
                                    <a href="/" title="Çerez Politikası">Çerez Politikası</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-auto">
                       <div className="copyright">
                            <p>Tüm Hakları Saklıdır</p>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Index