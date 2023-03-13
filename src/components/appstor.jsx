import "./scss/_appstor.scss"

function Appstor(){
    return(
        <div className="contaner">
            <div className="appstor">
                <img className="appstor__pone" src="	https://asaxiy.uz/custom-assets/images/asaxiy-app.png" alt="" />
                <div className="appstor__cart">
                      <img  width={150} height={40} src="https://asaxiy.uz/custom-assets/images/logos/asaxiy-logo-white.svg" alt="/" />
                      <span className="appstor__text">sizni internet do'koniz</span>
                      <div className="appstor__item">
                        <img src="	https://asaxiy.uz/custom-assets/images/app-store.svg" alt="" />
                        <img src="	https://asaxiy.uz/custom-assets/images/google-play.svg" alt="" />
                      </div>
                </div>
            </div>
        </div>
    )

}
export default Appstor