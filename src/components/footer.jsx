import "./scss/footer.scss";

function Footer() {
  return (
    <div className="body">
      <div className="contaner footer">
        <div className="footer__card ">
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
                <a href="#" className="footer__texts">Muddatli toʻlov shartlari</a><br /><p></p>
                <a href="#" className="footer__texts">Muddatli toʻlov asosida sotib olishning umumiy qoidalari.</a><br /><p></p>
                <a href="#" className="footer__texts">Buyurtma qanday beriladi?</a><br /><p></p>
                <a href="#" className="footer__texts">Ommaviy oferta (Foydalanuvchi bitimi)</a><br /><p></p>
                <a href="#" className="footer__texts">Tovarlarni yetkazib berish va toʻlov turlari.</a><br /><p></p>
                <a href="#" className="footer__texts">Buyurtmani bekor qilish va tovarni qaytarish</a><br /><p></p>
                <a href="#" className="footer__texts">Biz haqimizda</a>
            </div>
            <div className="footer__textCardName">
                <h3 className="footer__textInfo">biz bilan aloqa</h3>
                <a href="#" className="footer__texts"> <img src="https://asaxiy.uz/custom-assets/images/phone.svg" alt="/" /> +998 90 323 68 06</a><br /><p></p>
                <a href="#" className="footer__texts"> <img src="https://asaxiy.uz/custom-assets/images/mail.svg" alt="/" /> Lorem ipsum dolor sit.</a><br /><p></p>
                <a href="#" className="footer__texts"><img src="	https://asaxiy.uz/custom-assets/images/location.svg" alt="/" /> Chilonzor 3, ToshkentChilonzor 3,</a><br /><p></p>
            </div>
            <div className="footer__textCardWeb">
                <h3 className="footer__textInfo">bizni ishtimoviy tarmoqlar</h3>
                <a href="#" className="footer__texts">Lorem ipsum dolor sit.</a><br /><p></p>
            </div>

        </div>
      </div>
    </div>
  );
}
export default Footer;
