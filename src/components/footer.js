import "./footer.scss";

function Footer() {
  return (
    <div className="body">
      <div className="contaner footer">
        <div className="footer__card">
          <a className="footer__href" href="">
            <div className="footer__item">
              <img
                src="	https://asaxiy.uz/custom-assets/images/icons/market.svg"
                alt="/"
              />
              <div>
                <span className="footer__span">
                  bozorga borishni hojati yoq
                </span>
                <p className="footer__text">
                  bizda qulay narxlar va uyga yitkazib berish mavjut
                </p>
              </div>
            </div>
          </a>
          <a className="footer__href" href="">
            <div className="footer__item">
              <img
                src="https://asaxiy.uz/custom-assets/images/icons/fast-delivery.svg"
                alt="/"
              />
              <div>
                <span className="footer__span">tez yetkazib berish</span>
                <p className="footer__text">bizni xizmat sizni ajablantiradi</p>
              </div>
            </div>
          </a>
          <a className="footer__href" href="">
            {" "}
            <div className="footer__item">
              <img
                src="	https://asaxiy.uz/custom-assets/images/icons/return.svg"
                alt="/"
              />
              <div>
                <span className="footer__span">siz uchun qulayliklar</span>
                <p className="footer__text">
                  nosozlik yuzaga kelganda tez rasmiylashtirish va qaytarish
                  kafolot
                </p>
              </div>
            </div>
          </a>
          <a className="footer__href" href="">
            {" "}
            <div className="footer__item">
              <img
                src="https://asaxiy.uz/custom-assets/images/icons/card.svg"
                alt="/"
              />
              <div>
                <span className="footer__span">bo'lib to'lash</span>
                <p className="footer__text">
                  3, 6, 9, va 12 oy davomida oldindan to'lavsiz
                </p>
              </div>
            </div>
          </a>
        </div>
        <div className="footer__info">

            <div className="footer__textCard">
                <h3 className="footer__textInfo">malumotlar</h3>
                <a href="#" className="footer__texts">Lorem ipsum dolor sit.</a><br /><p></p>
                <a href="#" className="footer__texts">Lorem ipsum dolor sit.</a><br /><p></p>
                <a href="#" className="footer__texts">Lorem ipsum dolor sit.</a><br /><p></p>
                <a href="#" className="footer__texts">Lorem ipsum dolor sit.</a><br /><p></p>
                <a href="#" className="footer__texts">Lorem ipsum dolor sit.</a><br /><p></p>
                <a href="#" className="footer__texts">Lorem ipsum dolor sit.</a><br /><p></p>
                <a href="#" className="footer__texts">Lorem ipsum dolor sit.</a>
            </div>
            <div className="footer__textCard">
                <h3 className="footer__textInfo">malumotlar</h3>
                <a href="#" className="footer__texts">Lorem ipsum dolor sit.</a><br /><p></p>
                <a href="#" className="footer__texts">Lorem ipsum dolor sit.</a><br /><p></p>
                <a href="#" className="footer__texts">Lorem ipsum dolor sit.</a><br /><p></p>
            </div>
            <div className="footer__textCard">
                <h3 className="footer__textInfo">malumotlar</h3>
                <a href="#" className="footer__texts">Lorem ipsum dolor sit.</a><br /><p></p>
            </div>

        </div>
      </div>
    </div>
  );
}
export default Footer;
