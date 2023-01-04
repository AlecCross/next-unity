import React from 'react'
import { Unity, useUnityContext } from "react-unity-webgl";
import urlHome from "../package.json";
import styles from "../styles/unity.module.css";

export default function Unity3dGarden() {
    const { unityProvider, isLoaded, loadingProgression } = new useUnityContext({
        dataUrl: `${urlHome.homepage}build/ReactBuild.data`,
        frameworkUrl: `${urlHome.homepage}build/ReactBuild.framework.js`,
        loaderUrl: `${urlHome.homepage}build/ReactBuild.loader.js`,
        codeUrl: `${urlHome.homepage}build/ReactBuild.wasm`,
    });

    // We'll round the loading progression to a whole number to represent the
    // percentage of the Unity Application that has loaded.
    const loadingPercentage = Math.round(loadingProgression * 100);

    return <div >
        {isLoaded === false && (
            // We'll conditionally render the loading overlay if the Unity
            // Application is not loaded.
            <div className={styles.loadingBar}>
                {/* <p>Loading... ({loadingPercentage}%)</p> */}
                <div
                    className={styles.loadingBarFill}
                    style={{ width: loadingProgression * 100 }}
                />
            </div>
        )}
        <Unity unityProvider={unityProvider} style={{ width: 300, height: 150, border: "solid white 1px" }} />
    </div>
}
