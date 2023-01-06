import React from 'react'
import { Unity, useUnityContext } from "react-unity-webgl";
import urlHome from "../package.json";
import styles from "../styles/unity.module.css";
import styles2 from "../styles/Home.module.css";

export default function RunnerGameUnity3d() {
    const { unityProvider, isLoaded, loadingProgression } = new useUnityContext({
        dataUrl: `${urlHome.homepage}/RunnerGameUnity3d/RunnerGameUnity3d.data`,
        frameworkUrl: `${urlHome.homepage}/RunnerGameUnity3d/RunnerGameUnity3d.framework.js`,
        loaderUrl: `${urlHome.homepage}/RunnerGameUnity3d/RunnerGameUnity3d.loader.js`,
        codeUrl: `${urlHome.homepage}/RunnerGameUnity3d/RunnerGameUnity3d.wasm`,
    });

    // We'll round the loading progression to a whole number to represent the
    // percentage of the Unity Application that has loaded.
    const loadingPercentage = Math.round(loadingProgression * 100);

    return <div className={styles2.center}>
        <div>
            {isLoaded === false && (
                // We'll conditionally render the loading overlay if the Unity
                // Application is not loaded.
                <div className={styles.loadingBar} style={{
                    marginLeft: 'auto', marginRight: 'auto',
                }}>
                    {/* <p>Loading... ({loadingPercentage}%)</p> */}
                    <div
                        className={styles.loadingBarFill}
                        style={{
                            width: loadingProgression * 100
                        }}
                    />
                </div>
            )
            }
            <Unity unityProvider={unityProvider} style={{
                display: "block",
                marginLeft: 'auto',
                marginRight: 'auto', width: 300, height: 600, border: "solid white 1px"
            }} devicePixelRatio={3.2} />
        </div>
    </div>
}
