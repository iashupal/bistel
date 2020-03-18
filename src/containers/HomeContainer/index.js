import React, { Fragment } from 'react';

import './home.css';
import CardImage_1 from '../../assets/images/HomeCardImg1.png';
import CardImage_2 from '../../assets/images/HomeCardImg2.png';

function HomeContainer(props) {
  return (
    <Fragment>
      <header>
        <div class="hero__container">
          <div class="hero__title">
            Adaptive Intelligence for Smart-er manufacturing
          </div>
          <br />
          <div class="main__two-columns">
            <div>
              <div class="hero__content">
                Maximize Yield.
                <br />
                Improve Equipment Performance.
                <br />
                Eliminate Downtime.
              </div>
              <div class="hero__sub-content">
                BISTel solutions generate real-time data across the factory to
                help manufacturers identify and prevent trouble before it
                happens, pinpointing the root cause of issues before they
                disrupt production, and predict when faults will occur or when
                equipment is likely to fail. BISTel provides a real-time,
                operational view of the entire factory.
              </div>
            </div>
            <div class="hero__side-image" />
          </div>
        </div>
      </header>

      <main>
        <section class="main__container section__one-bg">
          <div class="main__intro column">
            <div class="line" />
            <div class="main__intro-heading">
              BISTel is Leading Industry 4.0
            </div>
            <br />
            <div class="main__intro-subheading">
              Use BISTel’s A.I. data analysis tools and EES solutions to predict
              and prevent equipment failures. Schedule predictive maintenance of
              assets. Improve product reliability.
            </div>
            <br />
            <div class="main__intro-content">
              Creating the Factory of the Future - BISTel’s is creating the
              factory of the future, by connecting, automating, and analyzing
              manufacturing data insights in the factory to make accurate and
              substantially better decision-making. BISTel IoT and A.I. smart
              applications create real-time, actionable data, powering
              manufacturing productivity to new levels with Industry 4.0
            </div>
          </div>
          <div class="main__intro column column-right">
            <div class="line" />
            <div class="main__intro-heading">
              Turning Data into Actionable
              <br />
              Intelligence to Boost
              <br />
              Manufacturing Performance
            </div>
            <div class="main__intro-subheading">
              Apply data insights to improve Real-time visibility into quality
              and compliance data. Reduce events that harm yield. Lower
              production costs.
            </div>
            <br />
            <div class="main__intro-content">
              Significant data is generated from manufacturing assets and
              equipment. Although data is in abundance, operational, predictive
              and prescriptive analysis are not. BISTel solutions improve the
              quality of equipment, and processes, and provide manufacturers
              with the predictive and prescriptive insights to optimize their
              production and increase manufacturing productivity.
            </div>
          </div>
        </section>

        <section class="main__container section__two-bg">
          <div style={{ textAlign: 'center' }}>
            <div class="news__heading">What's new at BISTel</div>
          </div>
          <div class="news__card-grid">
            <div class="news__card-container">
              <div class="news__card-date">February 7, 2019</div>
              <div class="card-body HomeCardText">
                <p class="news__card-title">
                  Connect with BISTel at Hannover Messe 2019
                </p>
                <p class="news__card-content">
                  Predictive Maintenance and Global Asset Management from Edge
                  to CloudWe are delighted to welcome you to show a preview of…
                </p>
              </div>
              <img
                className="news__card-img"
                src={CardImage_1}
                alt="News card"
              />
            </div>
            <div class="news__card-container">
              <div class="news__card-date">February 7, 2019</div>
              <div class="card-body HomeCardText">
                <p class="news__card-title">
                  April 8, 2019 Join BISTel at 19th European Advanced Process
                  Control and Manufacturing (APC|M) Conference at Villach,
                  Austria
                </p>
                <p class="news__card-content">
                  Today, BISTel is announcing that we’re giving two insightful
                  and innovative technical presentations at APC|M Europe
                  conference this year. If you…
                </p>
              </div>
              <img
                className="news__card-img"
                src={CardImage_2}
                alt="News card"
              />
            </div>
          </div>
        </section>
      </main>
    </Fragment>
  );
}

export default HomeContainer;
