
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js';

const firebaseConfig = {
  apiKey: "AIzaSyDHfW5YjupazC_IUXRDAr1Jin8CuBLHv_A",
  authDomain: "sunny-wavelet-272116.firebaseapp.com",
  databaseURL: "https://project-id.firebaseio.com",
  projectId: "sunny-wavelet-272116",
  storageBucket: "sunny-wavelet-272116.appspot.com",
  messagingSenderId: "1013759273521",
  appId: "11013759273521web625e8c3fd356561e140310",
  measurementId: "G-BCJF9P4Y25"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
