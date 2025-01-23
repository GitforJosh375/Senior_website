import "./HeroStyles.css"


function Hero (props) {
    return(
        <>
            <div className={props.cName}>
                <div class="image-container">
                  <img className="front-Img" alt="HerpImg" src={props.heroImg}/>
                </div>

                <div className = {props.ccName}>
                    <h1>{props.title}</h1>
                    <p>{props.text}</p>
                    <a href={props.url} className={props.btnClass}>
                        {props.buttonText}
                    </a>
                </div>
            </div>
        </>
    )
}

export default Hero;