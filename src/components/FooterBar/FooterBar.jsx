import './FooterBar.css'
import instaLogo from '../../assets/images/mdi_instagram.png'
import tikTokLogo from '../../assets/images/ic_outline-tiktok.png'
import twitterLogo from '../../assets/images/ri_twitter-x-fill.png'

const FooterBar = () => {
    return (
        <div className="footerBar">

            <a href="https://www.instagram.com/aliexpresses/reels/"><img className='footerBarLogo' src={instaLogo} alt="logo enlace instagram" />
            </a>
            <a href="https://www.tiktok.com/tag/aliexpress/" ><img className='footerBarLogo' src={tikTokLogo} alt="logo enlace TikTok" />
            </a>
            <a href="https://twitter.com/AliExpressES" ><img className='footerBarLogo' src={twitterLogo} alt="logo enlace Twitter" />
            </a>


        </div>
    );
}

export default FooterBar;
