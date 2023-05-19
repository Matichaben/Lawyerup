import "../css/home.css";
import { motion, useAnimation } from "framer-motion";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import EngineeringIcon from '@mui/icons-material/Engineering';
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

function Home(){
    const zoomIn = {
        visible: { scale: 1, transition: {ease: "easeOut", duration: 1.5} },
        hidden: { scale: 0},
    }
    const slideInTop = {
        visible: { y: 0, opacity: 1, transition: {ease: "easeIn", duration: 1.5} },
        hidden: { y: -250, opacity: 0},
    }
    const fadeIn = {
        visible: {opacity: 1, transition: {ease: "easeIn", duration: 1}},
        hidden: {opacity: 0},
    }
    const control = useAnimation()
    const [ref, inView] = useInView({threshold: 0})
    useEffect(() => {
        if (inView) {
          control.start("visible");
        } 
        // else {
        //     control.start("hidden");
        // }      
      }, [control, inView]);
    return(
        <div className="home">
            <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="video">
                <div>
                    <video autoPlay muted loop id="myVideo">
                        <source src="lawyer.mp4" type="video/mp4"/>
                    </video>
                </div>
                <div className="title">
                    <h1 className="heading">Best law firm website</h1>
                </div>
            </motion.div>
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
                    ref={ref}
                    initial="hidden"
                    animate={control}
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
                    ref={ref}
                    initial="hidden"
                    animate={control}
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