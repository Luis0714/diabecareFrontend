import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.estremor.diabemobile',
  appName: 'diabecareFrontend',
  webDir: 'www',
  plugins: {
    PushNotifications: {
      presentationOptions: ["badge", "sound", "alert"],
    },
  },
  server:{
    androidScheme: 'https'
  }
};

export default config;
