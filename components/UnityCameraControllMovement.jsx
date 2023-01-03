import React from 'react'
import { Unity, useUnityContext } from "react-unity-webgl";
import urlHome from "../package.json";

export default function UnityCameraControllMovement() {
    const { unityProvider } = new useUnityContext({
        dataUrl: `${urlHome.homepage}Unity-ControlCameraForMouseAndWASD/Unity-ControlCameraForMouseAndWASD.data`,
        frameworkUrl: `${urlHome.homepage}Unity-ControlCameraForMouseAndWASD/Unity-ControlCameraForMouseAndWASD.framework.js`,
        loaderUrl: `${urlHome.homepage}Unity-ControlCameraForMouseAndWASD/Unity-ControlCameraForMouseAndWASD.loader.js`,
        codeUrl: `${urlHome.homepage}Unity-ControlCameraForMouseAndWASD/Unity-ControlCameraForMouseAndWASD.wasm`,
    });
    return <Unity unityProvider={unityProvider} style={{ width: 800, height: 600, border: "solid black 1px" }} />
}
