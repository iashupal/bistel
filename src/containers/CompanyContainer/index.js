import React, { Fragment } from 'react';

import './company.css';
import YearsImage from './images/20years.png';
import DataFlow from './images/data-flow.png';
import AI from './images/AI.png';
import Manufacturing from './images/manufacturing.png';

function CompanyContainer(props) {
  return (
    <Fragment>
      <header>
        <div className="company__hero">
          <div>
            <h1 className="company__hero-title">About BISTel</h1>
            <h3 className="company__hero-content">
              We are driven by our desire to help engineers solve problems.
            </h3>
            <h3 className="company__hero-content">
              Our customer’s value us for the work we do.
            </h3>
          </div>
        </div>
      </header>

      {/* <!-- Main Content  --> */}
      <main>
        {/* <!-- Customer Focused --> */}
        <section className="main__container main__intro">
          <div className="line" />
          <div className="main__intro-heading">Customer Focused</div>
          <br />
          <br />
          <div className="main__intro-subheading">
            BISTel has provided excellence in manufacturing for almost 20 years.
            From the beginning, BISTel has been self- funded and profitable.
          </div>
          <br />
          <div className="main__intro-content">
            Powered by the success and adoption of its (EES) products and
            eDatalyzer” advanced analytics platform. BISTel has achieved double
            digit sales growth YOY. Today. BISTel is the number one provider of
            EES and advanced data analysis solutions for manufacturing customers
            around the world.
          </div>
        </section>

        {/* <!-- Inception in 2000 & Today BISTel --> */}
        <section className="main__container">
          <div className="main__two-columns">
            <div className="main__column">
              <div className="line" />
              <div className="main__intro-heading">Since its inception in 2000</div>
              <br />
              <img
                className="main__intro-image"
                src={YearsImage}
                alt="For 20 Years"
              />
              <br />
              <div className="main__intro-subheading">
                BISTel has helped customers stay competitive by improving the
                way they use their data to improve their competitive edge.
              </div>
              <img className="main__intro-image" src={DataFlow} alt="Data flow" />
              <br />
              <br />
              <div className="main__intro-content">
                BISTel solutions collect, manage, and analyze data, monitor the
                health of machines and equipment, optimize process flows, and
                identify root cause failures to mitigate risk in manufacturing.
              </div>
            </div>
            <div className="main__column">
              <div className="line" />
              <div className="main__intro-heading">Today, BISTel is</div>
              <br />
              <img
                className="main__intro-image"
                src={AI}
                alt="Artifical Intelligence"
              />
              <br />
              <div className="main__intro-subheading">
                at the forefront of a new generation of change sweeping through
                factories worldwide – Industry 4.0 for smart manufacturing.
              </div>
              <img
                className="main__intro-image"
                src={Manufacturing}
                alt="Manufacturing"
              />
              <br />
              <br />
              <div className="main__intro-content">
                Industry 4.0 sees a convergence of two worlds – Information
                technology (IT) and operational technology (OT). A key
                characteristic of this new world is the rapid increase in the
                number of connected devices, which is expected to increase from
                a few billion today to more than 1 trillion by 2030.
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Leadership --> */}
        <section className="main__container">
          <div style={{ textAlign: 'center' }}>
            <div className="leadership__heading">Leadership</div>
          </div>
          <div className="leadership__subheading">
            Industry Proven Expertise. Our leaders are the foundation we build
            on.
          </div>
          <div className="leadership__grid">
            <div className="leadership__person">
              <img src={require('./images/leadership_01.png')} alt="Leader 1" />
              <div className="leadership__role">
                W.K. Choi <br />
                Founder & CEO
              </div>
              <div className="leadership__career">Samsung, Brooks Automation</div>
            </div>
            <div className="leadership__person">
              <img src={require('./images/leadership_02.png')} alt="Leader 2" />
              <div className="leadership__role">
                Kyoung Jun
                <br /> Chief Technology Officer
              </div>
              <div className="leadership__career">Samsung, Applied Materials</div>
            </div>
            <div className="leadership__person">
              <img src={require('./images/leadership_03.png')} alt="Leader 3" />
              <div className="leadership__role">
                Tom Ho
                <br /> President, BISTel America
              </div>
              <div className="leadership__career">AMD, HPL, MKS Instruments</div>
            </div>
            <div className="leadership__person">
              <img src={require('./images/leadership_04.png')} alt="Leader 4" />
              <div className="leadership__role">
                Paul Hofemann
                <br /> VP of Sales & Marketing
              </div>
              <div className="leadership__career">
                Applied Materials, KLA-Tencor
              </div>
            </div>
            <div className="leadership__person">
              <img src={require('./images/leadership_05.png')} alt="Leader 5" />
              <div className="leadership__role">
                DJ Cha
                <br /> VP of APAC Sales
              </div>
              <div className="leadership__career">Brooks Automation</div>
            </div>
            <div className="leadership__person">
              <img src={require('./images/leadership_06.png')} alt="Leader 6" />
              <div className="leadership__role">
                Keith Han
                <br /> VP of Strategic Planning
              </div>
              <div className="leadership__career">
                Brooks Automation, Triant Technologies
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Recent Recognition --> */}
        <section className="recognition__container">
          <div style={{ textAlign: 'center' }}>
            <div className="recognition__heading">Recent Recognition and Award</div>
          </div>
          <div className="recognition__grid">
            <div className="recognition__row">
              <img
                src={require('./images/award_best_of_west.png')}
                alt="Award 1"
              />
              <div>
                <div className="recognition__title">"Best of West 2018 Winner"</div>
                <div className="recognition__details">- SEMICON WEST, 2018</div>
              </div>
            </div>
            <div className="recognition__row">
              <img
                src={require('./images/award_world_class.png')}
                alt="Award 1"
              />
              <div>
                <div className="recognition__title">"World Class 300"</div>
                <div className="recognition__details">
                  - The Ministry of Trade, Industry and Energy(MOTIE) and the
                  Small and Medium Business Administration(SMBA), 2018
                </div>
              </div>
            </div>
            <div className="recognition__row">
              <img
                src={require('./images/award_CIOReview.png')}
                alt="Award 1"
              />
              <div>
                <div className="recognition__title">
                  "50 Most promising IoT Solution Provider 2019"
                </div>
                <div className="recognition__details">- CIO Review</div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Fragment>
  );
}

export default CompanyContainer;
