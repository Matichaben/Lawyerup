import "../css/home.css"

function Home(){
    return(
        <div>
            <div>
                <video autoPlay muted loop id="myVideo">
                    <source src="lawyer.mp4" type="video/mp4"/>
                </video>
            </div>
            <div className="title">
                <h1 className="heading">Best law firm website</h1>
            </div>
        </div>
    );
}

export default Home