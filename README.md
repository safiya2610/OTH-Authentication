# OTP Authentication with Firebase in React Native

This project implements phone number authentication using OTP (One-Time Password) with Firebase in a React Native application. It leverages Firebase Authentication and the `expo-firebase-recaptcha` package to handle verification.

## Features
- Send OTP to a phone number.
- Verify the OTP and sign in the user using Firebase.
- Simple and clean UI with React Native.

## Requirements

1. **Firebase Setup**:
   - Create a Firebase project from the [Firebase Console](https://console.firebase.google.com/).
   - Add the Android/iOS app to the Firebase project and download the `google-services.json` or `GoogleService-Info.plist` file.
   - Enable **Phone Authentication** from the Firebase Authentication section.

2. **Billing Plan**:
   - Firebase **Phone Authentication** requires upgrading to the **Blaze Plan** (pay-as-you-go). The free Spark plan does not support phone authentication.
   - You can upgrade your Firebase project from the **Firebase Console** under the **Billing** section.

## Getting Started

### Prerequisites

- **Node.js** and **npm** installed on your machine.
- **Expo CLI** installed. You can install it by running:
  ```bash
  npm install -g expo-cli
