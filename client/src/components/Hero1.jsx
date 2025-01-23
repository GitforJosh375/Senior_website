import "./HeroStyles1.css"


function Hero (props) {
    return(
        <>
            <div className={props.cName}>
                <img className="front-Img" alt="HerpImg" src={props.heroImg}/>

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