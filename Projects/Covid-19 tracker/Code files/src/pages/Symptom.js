import React from "react";
import "../css/App.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import Distance from "../img/Distance.png";
import Doctor from "../img/doctor.png";
import Home from "../img/home.png";
import Call from "../img/call.png";
import Workout from "../img/workout.png";
import Food from "../img/food.png";
import CleanYourHands from "../img/wash-your-hands.jpg";
import Eyes from "../img/No-eye-touching.png";
import Cover from "../img/cover.png";
import Stay_Home from "../img/Stay_Home.png";
import Help from "../img/Help.png";
import Medical_Care from "../img/medical care.png";

function Symptom() {
  return (
    <div style={{ margin: "5rem" }}>
      <Tabs>
        <TabList>
          <Tab>Overview</Tab>
          <Tab>Symptoms</Tab>
          <Tab>Prevention</Tab>
          <Tab>Treatments</Tab>
        </TabList>

        <TabPanel>
          <div
            style={{
              backgroundColor: "#ccfff3",
            }}
          >
            <p>
              Coronavirus disease (COVID-19) is an infectious disease caused by
              a newly discovered coronavirus.
            </p>
            <p>
              Most people who fall sick with COVID-19 will experience mild to
              moderate symptoms and recover without special treatment.
            </p>
            <hr />
            <p style={{ color: "#006600", textDecorationLine: "underline" }}>
              {" "}
              HOW IT SPREADS ={" "}
            </p>
            <p>
              The virus that causes COVID-19 most commonly spreads between
              people who are in close contact with one another (within about 6
              feet, or 2 arm lengths).
            </p>
            <p>
              It spreads through respiratory droplets or small particles, such
              as those in aerosols, produced when an infected person coughs,
              sneezes, sings, talks, or breathes.
              <ul>
                {" "}
                <li>
                  These particles can be inhaled into the nose, mouth, airways,
                  and lungs and cause infection. This is thought to be the main
                  way the virus spreads.{" "}
                </li>
                <li>
                  {" "}
                  Droplets can also land on surfaces and objects and be
                  transferred by touch. A person may get COVID-19 by touching
                  the surface or object that has the virus on it and then
                  touching their own mouth, nose, or eyes. Spread from touching
                  surfaces is not thought to be the main way the virus spreads.
                </li>
              </ul>
            </p>
            <p>
              It is possible that COVID-19 may spread through the droplets and
              airborne particles that are formed when a person who has COVID-19
              coughs, sneezes, sings, talks, or breathes. There is growing
              evidence that droplets and airborne particles can remain suspended
              in the air and be breathed in by others, and travel distances
              beyond 6 feet (for example, during choir practice, in restaurants,
              or in fitness classes). In general, indoor environments without
              good ventilation increase this risk.{" "}
            </p>
            <p>
              Source:{" "}
              <a
                href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019"
                target="_blank"
                style={{ color: "blue" }}
              >
                who.int
              </a>
            </p>
          </div>
        </TabPanel>

        <TabPanel>
          <div
            style={{
              backgroundColor: "#ffcccc",
            }}
          >
            <p>
              COVID-19 affects different people in different ways. Infected
              people have had a wide range of symptoms reported – from mild
              symptoms to severe illness.
            </p>
            <hr />
            <p>
              Symptoms may appear 2-14 days after exposure to the virus. People
              with these symptoms may have COVID-19:
            </p>
            <ul>
              <li>Fever or chills</li>
              <li>Cough</li>
              <li>Shortness of breath or difficulty breathing</li>
              <li>Muscle aches </li>
              <li>Sore throat</li>
              <li>Headache</li>
              <li>Chest pain</li>
              <li>Pink eye (conjunctivitis)</li>
              <li>Chills</li>
            </ul>
            <p>Less common symptoms:</p>
            <ul>
              <li>diarrhoea</li>
              <li>loss of taste or smell</li>
              <li>nausea </li>
              <li>rash </li>
              <li>vomiting </li>
            </ul>
            <p>Serious symptoms:</p>
            <ul>
              <li>difficulty breathing or shortness of breath</li>
              <li>chest pain or pressure</li>
              <li>loss of speech or movement</li>
            </ul>
            <p>
              The severity of COVID-19 symptoms can range from very mild to
              severe. Some people may have only a few symptoms, and some people
              may have no symptoms at all. Some people may experience worsened
              symptoms, such as worsened shortness of breath and pneumonia,
              about a week after symptoms start.
            </p>
            <p>
              People who are older have a higher risk of serious illness from
              COVID-19, and the risk increases with age. People who have
              existing chronic medical conditions also may have a higher risk of
              serious illness. Certain medical conditions that increase the risk
              of serious illness from COVID-19 include:
            </p>
            <p>
              Seek immediate medical attention if you have serious symptoms.
              Always call before visiting your doctor or health facility.
            </p>
            <img src={Doctor} style={{ height: 350 }} />
            <p>
              People with mild symptoms who are otherwise healthy should manage
              their symptoms at home.
            </p>
            <p>
              On average it takes 5–6 days from when someone is infected with
              the virus for symptoms to show, however it can take up to 14 days.
            </p>
            <p>
              Source:{" "}
              <a
                href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/question-and-answers-hub/q-a-detail/q-a-coronaviruses#:~:text=symptoms"
                target="_blank"
                style={{ color: "blue" }}
              >
                who.int
              </a>
            </p>{" "}
          </div>
        </TabPanel>
        <TabPanel>
          <div
            style={{
              backgroundColor: "#cce0ff",
            }}
          >
            <p>
              Protect yourself and others around you by knowing the facts and
              taking appropriate precautions. Follow advice provided by your
              local public health agency.
            </p>
            <hr />
            <p>To prevent the spread of COVID-19:</p>
            <ul>
              <li>
                <img src={CleanYourHands} style={{ height: 300, width: 500 }} />
              </li>
              <br />
              <li>
                <img src={Distance} style={{ height: 300, width: 500 }} />
              </li>
              <br />
              <li>
                <img src={Eyes} style={{ height: 300, width: 500 }} />
              </li>
              <br />
              <li>
                <img src={Cover} style={{ height: 300, width: 500 }} />
              </li>
              <br />
              <li>
                <img src={Stay_Home} style={{ height: 300, width: 500 }} />
              </li>
              <br />
              <li>
                <img src={Medical_Care} style={{ height: 300, width: 500 }} />
              </li>
              <br />
              <li>
                <img src={Help} style={{ height: 300, width: 500 }} />
              </li>
            </ul>
            <p>
              Avoiding unneeded visits to medical facilities allows healthcare
              systems to operate more effectively, therefore protecting you and
              others.
            </p>
            <p>
              Source:{" "}
              <a
                href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public"
                target="_blank"
                style={{ color: "blue" }}
              >
                who.int
              </a>
            </p>
          </div>
        </TabPanel>
        <TabPanel>
          <div
            style={{
              backgroundColor: "#ccffcc",
            }}
          >
            <p
              style={{
                textDecoration: "underline",
              }}
            >
              SELF CARE =
            </p>
            <p> If you have possible or confirmed COVID-19:</p>
            <p>
              <li>Everyone should keep a healthy lifestyle at home. </li>
              <li>
                Maintain a healthydiet, sleep, stay active, and make social
                contact with loved ones through the phone or internet.
                <br />
                <span style={{ marginLeft: "23px" }}>
                  {" "}
                  Keep to regular routines and schedules as much as possible.
                </span>{" "}
              </li>
              <li>
                {" "}
                Rest. It can make you feel better and may speed your recovery.{" "}
              </li>
              <li> Stay home. Don't go to work, school, or public places. </li>
              <li>
                {" "}
                Drink fluids. You lose more water when you're sick. Dehydration
                can make symptoms worse and cause other health problems.
              </li>
            </p>
            <img src={Home} style={{ height: 300, width: 300 }} />
            <img src={Call} style={{ height: 300, width: 300 }} />
            <img src={Workout} style={{ height: 300, width: 300 }} />
            <img src={Food} style={{ height: 300, width: 300 }} />

            <p>
              It is normal to feel sad, stressed, or confused during a crisis.
              Talking to people you trust, such as friends and family, can help.
              If you feel overwhelmed, talk to a health worker or counsellor.
            </p>
            <p
              style={{
                textDecoration: "underline",
              }}
            >
              Medical Treatments =
            </p>

            <li>
              {" "}
              Ask your doctor about over-the-counter medicines that may help,
              like acetaminophen to lower your fever.
            </li>

            <li>
              {" "}
              Your local health authorities may give instructions on checking
              your symptoms and reporting information.
            </li>
            <li>
              Seek medical care if you have a fever, a cough, and difficulty
              breathing. Call in advance.
            </li>
            <li>
              {" "}
              The Food and Drug Administration (FDA) has approved one drug,
              remdesivir (Veklury), to treat COVID-19.
            </li>
            <p>
              Source:{" "}
              <a
                href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/question-and-answers-hub/q-a-detail/q-a-coronaviruses#:~:text=protect"
                target="_blank"
                style={{ color: "blue" }}
              >
                who.int
              </a>
            </p>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default Symptom;
