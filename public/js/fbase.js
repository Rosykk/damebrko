import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js';
import { getPerformance } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-performance.js";

const firebaseConfig = {
  apiKey: "AIzaSyDHfW5YjupazC_IUXRDAr1Jin8CuBLHv_A",
  authDomain: "sunny-wavelet-272116.firebaseapp.com",
  projectId: "sunny-wavelet-272116",
  storageBucket: "sunny-wavelet-272116.appspot.com",
  messagingSenderId: "1013759273521",
  appId: "1:1013759273521:web:625e8c3fd356561e140310",
  measurementId: "G-BCJF9P4Y25"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const perf = getPerformance(app);

console.log(analytics);
console.log(perf);