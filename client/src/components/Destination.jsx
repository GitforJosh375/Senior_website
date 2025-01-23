/*import SundayImg from "../assets/SundaySchool.jpg";
import SundayImg1 from "../assets/SundayWorship.jpg";
import SundayImg2 from "../assets/childrenChurch.jpg";
import SundayImg3 from "../assets/BibleStudy.jpg";
import SundayImg4 from "../assets/PatternsMovie.jpg";
import SundayImg5 from "../assets/MarkCal.jpg"; 
import Movie from "../assets/Break.jpg";*/
import DestinationData from "./DestinationData.jsx";
//import OctoberImg from "../assets/October_festival.jpg"
import "./DestinationStyles.css"


import { useState } from "react";

const Destination = () => {
  // State to track the current section being viewed
  const [activeSection, setActiveSection] = useState("about");

  // Sections data
  const sections = {
    about: (
      <div className="about-us">
        <h1>About LotView</h1>
        <p><strong>Transforming the Parking Experience with Real-Time Monitoring</strong></p>
        <p>The goal of the <strong>LotView</strong> project is to create a sophisticated parking lot monitoring system that delivers real-time, accurate updates on available spaces. Our advanced object detection algorithm evaluates parking lot photos every 20 seconds to provide drivers with fast, consistent input on parking availability.</p>
      </div>
    ),
    why: (
      <div className="about-us">
        <h1>Why LotView?</h1>
        <p>Parking is a universal challenge—whether you're trying to find a spot at a busy university, a crowded city, or an event venue. LotView was created to ease the frustration of searching for a parking spot.</p>
        <p>Our solution helps reduce traffic congestion, lowers pollution, and improves parking lot usage efficiency in high-demand areas. The technology gives drivers the ability to quickly find available spaces, cutting down on the time spent searching and improving their overall experience.</p>
      </div>
    ),
    problem: (
      <div className="about-us">
        <h1>The Problem We Solve</h1>
        <p>Parking lot management, particularly at universities, often lacks real-time insights. Universities face critical questions like:</p>
        <ul>
          <li>How many spots do we need?</li>
          <li>Are some lots underused or prone to overflow?</li>
          <li>Are there illegal parking issues in specific areas?</li>
        </ul>
        <p>Currently, these questions require manual, time-consuming processes that can’t be easily scaled. LotView simplifies this by offering real-time monitoring through a single camera, providing data to optimize parking lot management and answer these crucial questions.</p>
      </div>
    ),
    audience: (
      <div className="about-us">
        <h1>Our Target Audience: Large Universities</h1>
        <p>While LotView could benefit business lots, city parking, and event venues, our primary customers are large universities—especially those in bustling urban areas. These schools often face the challenge of managing large, high-traffic parking lots.</p>
        <p>By using LotView, universities gain the ability to monitor parking in real-time, improving their ability to analyze parking lot usage and make data-driven decisions.</p>
        <p>Universities can also increase the attractiveness of their campus to prospective students by offering a more efficient, high-tech parking system.</p>
      </div>
    ),
    monetization: (
      <div className="about-us">
        <h1>Monetizing the Service</h1>
        <p>LotView is not only a solution for parking management, but it also offers universities a new revenue stream. By implementing LotView, universities can sell access to the app, allowing students and staff to easily check parking availability.</p>
      </div>
    ),
    future: (
      <div className="about-us">
        <h1>The Future of LotView</h1>
        <p>While this year’s focus is on parking lot occupancy data, LotView has huge potential for further development. Future capabilities may include:</p>
        <ul>
          <li>License plate recognition</li>
          <li>Traffic monitoring (for drivers, bikers, and pedestrians)</li>
        </ul>
        <p>This continued evolution increases the value LotView brings to universities, making it an even more compelling investment.</p>
      </div>
    ),
    technology: (
      <div className="about-us">
        <h1>Innovative Technology</h1>
        <p>The core innovation of LotView is our advanced object detection model (ODM) paired with a single camera. Traditional parking management systems often rely on individual sensors for each parking space, which leads to high installation costs and complex maintenance.</p>
        <p>LotView simplifies this process with one camera that can monitor an entire parking lot, drastically reducing hardware requirements.</p>
      </div>
    ),
    benefits: (
      <div className="about-us">
        <h1>Why Choose LotView?</h1>
        <p><strong>Cost-Effective</strong>: No need for expensive, complex individual sensors.</p>
        <p><strong>Easy Installation</strong>: Our camera-based solution works with existing parking lot infrastructure.</p>
        <p><strong>Scalable</strong>: LotView adapts easily to parking lots of any size, making it a future-proof investment.</p>
        <p><strong>Flexible</strong>: Room for ongoing development, such as adding traffic analysis and license plate recognition.</p>
      </div>
    ),
  };

  return (
    <div className="destination-container">
      <div className="space"></div>
      {/* Sidebar */}
      <div className="sidebar">
        <h3>Explore More</h3>
        <ul>
          {Object.keys(sections).map((key) => (
            <li key={key} onClick={() => setActiveSection(key)}>
              {key.charAt(0).toUpperCase() + key.slice(1).replace("-", " ")}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="destination">
        {sections[activeSection]}
      </div>
      <div className="space"></div>
    </div>
  );
};

export default Destination;
