import "../css/home.css";
import { motion, useAnimation } from "framer-motion";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import EngineeringIcon from '@mui/icons-material/Engineering';

function Home(){
    const zoomIn = {
        visible: { scale: 1, transition: {ease: "easeOut", duration: 1.5} },
        hidden: { scale: 0},
    }
    const slideInTop = {
        visible: { y:0, transition: {ease: "easeIn", duration: 1.5} },
        hidden: { y: -300},
    }
    return(
        <div className="home">
            <div className="video">
                <div>
                    <video autoPlay muted loop id="myVideo">
                        <source src="lawyer.mp4" type="video/mp4"/>
                    </video>
                </div>
                <div className="title">
                    <h1 className="heading">Best law firm website</h1>
                </div>
            </div>
            <div className="row">
                <motion.div
                    variants={zoomIn}
                    initial="hidden"
                    animate="visible"
                    className="col-md-4 vision">
                    <h2><RemoveRedEyeIcon sx={{ marginBottom: 0.8}} fontSize="large"/> Our Vision</h2>
                    <p>We are committed to building a diverse workforce and 
                        creating an inclusive environment where everyone can thrive. 
                        Our leadership is actively involved in managing our commitment 
                        to diversity and inclusion, and fostering a culture that creates 
                        opportunities for everyone.
                    </p>
                </motion.div>
                <motion.div
                    variants={slideInTop}
                    initial="hidden"
                    animate="visible"
                    className="col-md-4 mission">
                    <h2><TrackChangesIcon sx={{ marginBottom: 0.8}} fontSize="large"/> Our Mission</h2>
                    <p>We are committed to building a diverse workforce and 
                        creating an inclusive environment where everyone can thrive. 
                        Our leadership is actively involved in managing our commitment 
                        to diversity and inclusion, and fostering a culture that creates 
                        opportunities for everyone.
                    </p>
                </motion.div>
                <motion.div
                    variants={zoomIn}
                    initial="hidden"
                    animate="visible"
                    className="col-md-4 services">
                    <h2><EngineeringIcon sx={{ marginBottom: 0.8}} fontSize="large"/> Services</h2>
                    <p>We have a wide range of services including:
                        <ul>
                            <li>Service 1</li>
                            <li>Service 2</li>
                            <li>Service 3</li>
                            <li>Service 4</li>
                        </ul>
                    </p>
                </motion.div>
            </div>
        </div>
    );
}

export default Home