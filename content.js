// Edit your name, bio, skills, resume URL, and case studies here.
window.PORTFOLIO = {
  "name": "Wenzhen Zhang",
  "role": "Engineering portfolio",
  "headline": "From idea to prototype.",
  "intro": "I’m Wenzhen, an engineering student exploring design, testing, and the people engineering serves.",
  "bio": "I’m studying mechanical engineering in Carnegie Mellon University. I enjoy turning open-ended problems into prototypes and using evidence to improve them. I’m interested in control and robotics, especially projects that make technology more reliable or accessible in interdisciplinary fields.",
  "skills": [
    "CAD",
    "Control",
    "AI/ML",
    "SLAM",
    "Computer Vision",
    "System Integration"
  ],
  "email": "Wenzhen_Zhang_work@outlook.com",
  "resumeIntro": "A one-page overview of my education, technical skills, and project experience.",
  "resumeUrl": "resume.pdf",
  "projects": [
    {
      "id": "wooden-bike",
      "title": "Wooden-Frame Balance Bike",
      "category": "Mechanical design · CNC fabrication",
      "summary": "Designed, built, and evaluated a full-scale, foot-propelled wooden balance bike for adults.",
      "description": "To make a bike easier for adults to transport and store,I led my team designed and built a foot-propelled balance bike with a CNC-cut plywood frame, a reused steering column, and 26-inch wheels. I led the team with frame concept design, assembly and validation. We evaluated the prototype against a 200 lb rider load, with factor of safety of 3, and it can be fit in a 50 × 32 × 9 in. travel bag.",
      "image": "images/wooden-bike1.jpg",
      "imageAlt": "Front view of an adult balance bike with a plywood frame",
      "colors": "#795939,#c1a075",
      "shape": "22% 46% 29% 43%",
      "imageCaption": ""
    },
    {
      "id": "monoblock-filler",
      "title": "Compact Monoblock Pill Bottle Filler & Capper",
      "category": "Packaging automation",
      "summary": "An automated system for filling and capping pharmaceutical pill bottles in small batches.",
      "description": "Small-batch pharmaceutical manufacturers need a way to package pills consistently with equipment they can afford. I led our team of 10 set out to design, build, and test a compact machine that fills and caps bottles in one unit. The design uses coordinated subsystems to move bottles through both operations and monitor their position. Input from Norwalt and Omega Design helped us prioritize repeatability, simple mechanics, operating time, energy use, and cost. I coordinate thorugh sub system and working on the motion portion. In a three-hour test, the filler dispensed 30 pills per bottle in 3.4 seconds, beating the 5-second target, with no observed jams or spills. The rotary table moved bottles between stations with no observed motion failures. Automatic cap placement succeeded in only 3 of 12 trials, while the tightening mechanism fully tightened all 12 caps in a separate test with caps already in place. These results identify cap placement as the priority for improving overall reliability.",
      "image": "images/monoblock-filler.png",
      "imageAlt": "Concept rendering of a compact machine moving pill bottles between filling and capping stations",
      "imageCaption": "",
      "colors": "#34465e,#8199b0",
      "shape": "22%"
    },
    {
      "id": "z-axis-stage",
      "title": "High-Precision Motorized Z-Axis Stage",
      "category": "Mechatronics · Embedded controls",
      "summary": "A motorized stage for micrometer-level positioning during critical lithography equipment transitions.",
      "description": "Sensitive lithography components need precise, controlled motion during critical equipment transitions. I designed a motorized Z-axis stage for automated deployment to help protect those components. I developed the embedded control logic and integrated sensor feedback into a closed loop for real-time position control. To validate the design, I executed a prototype test plan and used a data acquisition system to compare measured stage motion with the positioning specifications. The prototype achieved micrometer-level positioning accuracy in validation.",
      "image": "images/lithography.png",
      "imageAlt": "Concept illustration of an optical assembly above a silicon wafer in a lithography chamber",
      "colors": "#33435c,#829ab3",
      "shape": "24% 38% 24% 38%",
      "imageCaption": "Lithography equipment concept illustration"
    },
    {
      "id": "cmu-buggy-simulation",
      "title": "Autonomous Driving on the CMU Buggy Course",
      "category": "Vehicle controls · Robotics simulation",
      "summary": "Vehicle control, path planning, and localization for a simulated Tesla Model 3 on Carnegie Mellon's Buggy course.",
      "description": "Simulation lets engineers test autonomous driving strategies before deploying them on a physical vehicle. In this project, I developed a controller for a simulated Tesla Model 3 to navigate Carnegie Mellon's Buggy course. I linearized the nonlinear vehicle model and designed PID controllers for steering and speed. After checking controllability and stabilizability, I designed lateral controllers using pole placement and optimal control. I then implemented A* path planning and used extended Kalman filter SLAM to estimate the vehicle's pose and map its surroundings without the simulator's default sensor input. The class race provided a final test of the integrated system. The self driving car can finish a lap in 120 seconds with an average error of 0.4m",
      "image": "",
      "imageAlt": "",
      "colors": "#314c61,#7799b2",
      "shape": "30% 42% 30% 42%"
    },
    {
      "id": "fixture",
      "title": "Modular Test Fixture",
      "category": "Prototyping",
      "summary": "Improve the repeatability of a bench testing setup.",
      "image": "images/fixture.png",
      "imageAlt": "Bench test fixture with locating pins and clamps",
      "colors": "#303e57,#5c7c9d",
      "shape": "17% 45% 17% 45%",
      "description": "Repositioning a sample between trials makes measurements harder to compare. Design an adjustable alignment fixture and test it across repeated setups. I translated alignment requirements into CAD drawings and measured setup variation. [Add setup time and variation before and after the fixture.] Repeatable tests could reduce material waste during prototype development.",
      "imageCaption": "Concept illustration"
    },
    {
      "id": "route",
      "title": "Accessible Route Audit",
      "category": "Human-centered engineering",
      "summary": "Document barriers along a sample pedestrian route.",
      "image": "images/route.png",
      "imageAlt": "Pedestrian crossing with a curb ramp and tactile paving",
      "colors": "#5a2742,#ac5773",
      "shape": "48% 17% 48% 17%",
      "description": "Standard maps may omit curb, surface, and crossing conditions that shape accessibility. Record field observations with a shared rubric and verify ambiguous observations with a second pass. I drafted the observation rubric and summarized recurring barriers on the route. [Add route length, audit scope, and the most frequent barriers.] A clearer record of barriers could help prioritize improvements for pedestrians.",
      "imageCaption": "Concept illustration"
    }
  ]
};
