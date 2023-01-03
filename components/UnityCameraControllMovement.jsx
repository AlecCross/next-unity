import React from 'react'
import { Unity, useUnityContext } from "react-unity-webgl";
import urlHome from "../package.json";

export default function Unity3dGarden() {
    const { unityProvider, isLoaded, loadingProgression } = new useUnityContext({
        dataUrl: `${urlHome.homepage}Unity-ControlCameraForMouseAndWASD/Unity-ControlCameraForMouseAndWASD.data`,
        frameworkUrl: `${urlHome.homepage}Unity-ControlCameraForMouseAndWASD/Unity-ControlCameraForMouseAndWASD.framework.js`,
        loaderUrl: `${urlHome.homepage}Unity-ControlCameraForMouseAndWASD/Unity-ControlCameraForMouseAndWASD.loader.js`,
        codeUrl: `${urlHome.homepage}Unity-ControlCameraForMouseAndWASD/Unity-ControlCameraForMouseAndWASD.wasm`,
    });

    // We'll round the loading progression to a whole number to represent the
    // percentage of the Unity Application that has loaded.
    const loadingPercentage = Math.round(loadingProgression * 100);

    return <div>
        {isLoaded === false && (
            // We'll conditionally render the loading overlay if the Unity
            // Application is not loaded.
            <div className="loading-overlay">
                <p>Loading... ({loadingPercentage}%)</p>
            </div>
        )}
        <Unity unityProvider={unityProvider} style={{ width: 800, height: 600, border: "solid black 1px" }} />
    </div>
}
