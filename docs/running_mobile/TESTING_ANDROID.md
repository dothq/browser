# Testing Dot Browser for Android
These instructions are written for Ubuntu 18.04

## 1. Install Android Studio

Download Android Studio from the Android website. Make sure to install Android Studio to ``/opt/android-studio/`` More detailed installation instructions can be found in the User Guide.

### Installing the Android SDK

Once installed, open Android Studio. The IDE should detect that the Android SDK needs to be installed. In the SDK Components Setup screen, finish installing the SDK. Keep note of the Android SDK Location.

By default, the latest stable SDK Platform is installed, which includes a collection of packages required to target that version of Android.

To install system images and other minor SDK platform packages, you may need to ensure Show Package Details is checked at the bottom of the SDK Manager.

For future reference, the Android SDK can be managed with Android Studio in the Configure » SDK Manager menu of the Android Studio welcome screen or Tools » SDK Manager inside Android projects.

### Configuring Command Line Tools

The Android SDK ships with [useful command-line tools](https://developer.android.com/studio/command-line/). Before they can be used, some environment variables must be set.

In ``~/.bashrc``, ``~/.bash_profile``, or similar shell startup scripts, make the following modifications:

Set the ``ANDROID_SDK_ROOT`` environment variable. This path should be the Android SDK Location used in the previous section.

```bash
export ANDROID_SDK_ROOT=$HOME/Android/sdk
```

Add the Android SDK command-line directories to PATH. Each directory corresponds to the category of command-line tool.

```bash
# avdmanager, sdkmanager
export PATH=$PATH:$ANDROID_SDK_ROOT/tools/bin

# adb, logcat
export PATH=$PATH:$ANDROID_SDK_ROOT/platform-tools

# emulator
export PATH=$PATH:$ANDROID_SDK_ROOT/emulator

# apksigner, zipalign
export PATH=$PATH:$ANDROID_SDK_ROOT/build-tools
```

## 2a. Creating an Android Virtual Device

For more detailed instructions and information, see the Android documentation.

AVDs are managed with the AVD Manager. In the Android Studio welcome screen, click Configure » AVD Manager. The AVD Manager can also be opened inside Android projects in the Tools » AVD Manager menu.

Click Create Virtual Device and select a suitable device definition. If unsure, choose Pixel 3a. Then, select a suitable system image. If unsure, choose Q (API 29) with Google Play services. See Android version history for information on Android versions.

Once the AVD is created, launch the AVD into the Android emulator. Keeping the emulator running is the best way to ensure detection while developing Dot.

### 2b. Set up a Physical Android Device

Actual Android hardware can also be used for Dot development. But first, the device must be set up for development. For more detailed instructions and information, see the Android documentation.

1. Enable USB debugging on the device. Open Settings, navigate to Developer options, and enable USB debugging. The Developer options menu may need to be enabled first. See the Android documentation for instructions.
1. Ensure the device has permission to connect to the computer.

Verify the connection works by connecting the device to the computer with a USB cable and using the following command:

```bash
adb devices
```

The device should be listed. See the full adb documentation for troubleshooting and detailed information.

## 3. Workspace Setup

First, clone the repository from Github.

```bash
git clone https://git.dothq.co/browser DotBrowser -b multi-platform
```

``cd`` into the mobile workspace

```bash
cd ./DotBrowser/src/mobile
```

## 4. Running with Capacitor

Capacitor uses Android Studio to build and run apps to simulators and devices.

1. Update and Sync Capacitor

This will pull all nessecary files for development, allowing you to build Dot.

```bash
npx cap update
npx cap sync
```

2. Develop Dot and sync it to the native project.

With each meaningful change, Dot must be built into web assets before the change can appear on Android simulators and devices. The web assets then must be copied into the native project.

```bash
ionic capacitor copy android
```

3. Start Android Studio

```bash
yarn android
```

4. In Android Studio, click the Run button and then select the target simulator or device.

### Live Reload
To start a live-reload server, run the following command.

```bash
ionic capacitor run android -l --host=YOUR_IP_ADDRESS
```

# Debugging Dot Browser for Android

Once Dot is running on an Android device or emulator, it can be debugged with Chrome DevTools, or through Logcat

## Using Chrome DevTools

Chrome has web developer tool support for Android simulators and devices. Go to ``chrome://inspect`` in Chrome while the simulator is running or a device is connected to the computer and Inspect co.dothq.dot

> Make sure Dot is running on the device or simulator, or it will not show up in the list.

## Using Logcat

If running with Android Studio, native logs can be found in Logcat.

If the Logcat window is hidden, you can enable it in View » Tool Windows » Logcat.

You can also access Logcat with ADB.

```bash
adb logcat
```

# Troubleshooting

## License not accepted

You don't have the nessecary SDKs for Dot. You'll have to install the SDKs manually.

1. In Android Studio, go to Tools » SDK Manager. You may need to ensure Show Package Details is checked at the bottom of the SDK Manager. Select all the SDK packages that require a license, then click Apply.

## ``capacitor-cordova-android-plugins`` not found

You forgot to update and sync Capacitor.

```bash
npx cap update
npx cap sync
```
