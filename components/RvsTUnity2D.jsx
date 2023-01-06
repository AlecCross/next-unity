import React from 'react'
import { Unity, useUnityContext } from "react-unity-webgl";
import urlHome from "../package.json";
import styles from "../styles/unity.module.css";
import styles2 from "../styles/Home.module.css";

export default function RvsTUnity2D() {
    const { unityProvider, isLoaded, loadingProgression } = new useUnityContext({
        dataUrl: `${urlHome.homepage}/RvsT-Unity2D/RvsT-Unity2D.data`,
        frameworkUrl: `${urlHome.homepage}/RvsT-Unity2D/RvsT-Unity2D.framework.js`,
        loaderUrl: `${urlHome.homepage}/RvsT-Unity2D/RvsT-Unity2D.loader.js`,
        codeUrl: `${urlHome.homepage}/RvsT-Unity2D/RvsT-Unity2D.wasm`,
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
                        style={{ width: loadingProgression * 300 }}
                    />
                </div>
            )}
            <Unity unityProvider={unityProvider} style={{
                display: "block",
                marginLeft: 'auto',
                marginRight: 'auto',
                width: 300, height: 200, border: "solid white 1px"
            }} devicePixelRatio={1} />
        </div>
    </div>
}
