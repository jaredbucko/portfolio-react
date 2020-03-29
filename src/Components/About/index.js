import React from "react";
import "./style.css";

function About() {
    return (
      <div>
          <h2 className="text-center mt-4 mb-4">About</h2>
          <div className="d-flex justify-content-center">
            <div className="card">
              <img src="..." className="card-img-top" alt="..."></img>
              <div className="card-body">
                <p className="card-text">Teacher, musician, seminarian, barista, husband, father, Uber driver, stay-at-home-parent, code school, operations technician... my journey into world of web and software development has definitely not been a straight line. After graduating from UCLA in 2009 with a BA in Political Science, I wasn't sure what to do next. In 2010 I moved to Oregon to complete a MA in Teaching at George Fox University and from 2011 to 2016, I taught Social Studies at McMinnville High School in McMinnville, OR. Needing a break from the role I was in, from 2016-2019 I became a substitute teacher while pursuing other career and educational opportunities.</p>
                <p className="card-text">After my wife gave birth to our son in 2019, I began to consider whether or not to return to teaching full-time. In the end, I decided instead to sign up for the a 6-month Web Development boot camp through the University of Oregon, and I am so glad that I did! While I greatly value my 8 years as a teacher, I am thrilled to be in a new field, taking on a new challenge. A challenge that better taps into my love for technology and interest in solving complex problems while constantly learning new skills. As I near the end of Bootcamp, I am close to earning my certificate in full-stack web development, and I am also taking my first steps in learning C#.net in my new role as an Operations Technician at Selectron Technologies in Tigard, OR.</p>
              </div>
            </div>
          </div>
      </div>
    );
  }
  
  export default About;
 