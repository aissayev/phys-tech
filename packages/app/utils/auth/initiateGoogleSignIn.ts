import {
    CryptoDigestAlgorithm,
    digestStringAsync,
    randomUUID,
  } from "expo-crypto";
  
  /**
   * Initiates the auth flow for the native Google Sign In AKA One Tap.
   * In order to use this method, you need to sponsor here: https://github.com/react-native-google-signin/google-signin
   * Sponsoring unlocks the repo which contains the GoogleOneTapSignIn method where you can pass in a nonce (the only way Supabase will allow you to do native sign in)
   * Then you can use this method, which returns the token and nonce that will later be passed
   * to Supabase to complete the sign in.
   */
  export async function initiateGoogleSignIn() {
    const rawNonce = randomUUID();
    const hashedNonce = await digestStringAsync(
      CryptoDigestAlgorithm.SHA256,
      rawNonce,
    );
    return { rawNonce, hashedNonce };
  }