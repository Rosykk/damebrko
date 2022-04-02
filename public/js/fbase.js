script type=module
   Import the functions you need from the SDKs you need
  import { initializeApp } from httpswww.gstatic.comfirebasejs9.6.10firebase-app.js;
  import { getAnalytics } from httpswww.gstatic.comfirebasejs9.6.10firebase-analytics.js;
   TODO Add SDKs for Firebase products that you want to use
   httpsfirebase.google.comdocswebsetup#available-libraries

   Your web app's Firebase configuration
   For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey AIzaSyDHfW5YjupazC_IUXRDAr1Jin8CuBLHv_A,
    authDomain sunny-wavelet-272116.firebaseapp.com,
    projectId sunny-wavelet-272116,
    storageBucket sunny-wavelet-272116.appspot.com,
    messagingSenderId 1013759273521,
    appId 11013759273521web625e8c3fd356561e140310,
    measurementId G-BCJF9P4Y25
  };

   Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
script