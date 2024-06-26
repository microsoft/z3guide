import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
// import favicon from '../static/img/favicon.ico';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className="row" >
          <div className="col format">
            <h1 className="hero__title">{siteConfig.title}</h1>
            <p className="hero__subtitle">{siteConfig.tagline}</p>
            <div className={styles.buttons}>
            <Link
              className={clsx("button button--secondary button--lg ", styles.mainButton)}
              to="/docs/logic/intro">
              SMTLIB Tutorial 
            </Link> 
            <></>
            <Link
              className={clsx("button button--secondary button--lg", styles.mainButton)}
              to="/programming/Z3 JavaScript Examples">
              Programming Z3 
            </Link> 
            <></>
            <Link
              className={clsx("button button--secondary button--lg", styles.mainButton)}
              to="/playground/Freeform Editing">
              Playground
            </Link>
            </div>
          </div>
          <div className="col">
            {/* <img src="/img/logoz3.png" alt="Z3 Logo"></img> */}
            <img src={require('@site/static/img/logoz3.png').default} />
          </div>
        </div>
    </div>
    </div>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Documentation for ${siteConfig.title}`}
      description="An interactive online guide for the Z3 theorem prover with the ability to execute Z3 in the browser.">
      <HomepageHeader />
    </Layout>
  );
}
