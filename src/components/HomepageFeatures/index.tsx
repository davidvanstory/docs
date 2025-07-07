import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Describe, Don\'t Draft',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Move beyond traditional CAD software. Simply describe the object you
        want to create in natural language, and watch as VibeCAD brings your
        vision to life in seconds. It's CAD without the learning curve.
      </>
    ),
  },
  {
    title: 'Iterate at the Speed of Thought',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Refine your designs by simply describing the changes. "Make the handle
        longer," "add a hole in the center," "round the edges." Your creativity
        is the only limit.
      </>
    ),
  },
  {
    title: 'Seamless Integration',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        VibeCAD exports to standard CAD formats like STEP, STL, and DWG, fitting
        perfectly into your existing workflow. Go from idea to production-ready
        file in a fraction of the time.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
