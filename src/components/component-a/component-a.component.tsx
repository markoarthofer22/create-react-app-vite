import * as React from 'react';

import styles from './component-a.module.css';

const ComponentA: React.FC = (): JSX.Element => {
    const a = 2 + 3;

    // some envs are available from the start
    const base = import.meta.env.BASE_URL;
    const mode = import.meta.env.MODE;

    // get custom env. if u have some diff naming like env.local add "local" as a node
    // for env to be exposed it need sto start with ! VITE_
    const customEnv = import.meta.env.VITE_SOME_PASSWORD;

    console.log('customEnv', customEnv);

    return (
        <div className={styles.red}>
            <h2>this is component css test (modules)</h2>
            <p>{a}</p>

            <p>
                {base} & mode: {mode}
            </p>

            <span>{customEnv}</span>
        </div>
    );
};

export default ComponentA;
