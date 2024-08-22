import { useEffect, useState } from "react";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/home/Home";
import RoutePage from "./page/route/RoutePage";
import {
  collection,
  getFirestore,
  getDocs,
  query,
  where,
  onSnapshot,
} from "firebase/firestore";
import "./utils/firebase";
import { db } from "./utils/firebase";

function App() {
  const [busInfo, setBusInfo] = useState<any[]>([]);
  const collectionRef = collection(db, "bus-info");

  const q = query(
    collectionRef,
    where("ROUTE_NAMEE", "==", "1"),
    where("COMPANY_CODE", "==", "KMB")
  );

  onSnapshot(q, (querySnapshot) => {
    const temp: any[] = [];
    querySnapshot.forEach((doc) => {
      temp.push(doc.data());
    });
    console.log(temp);
  });

  // useEffect(() => {
  //   const fetchBusInfo = async () => {
  //     const querySnapshot = await getDocs(collection(db, "bus-info"));
  //     const temp: any[] = [];
  //     querySnapshot.forEach((doc) => {
  //       temp.push(doc.data());
  //     });
  //     setBusInfo(temp);
  //     // setBusInfo(querySnapshot.docs.map((doc) => doc.data()));
  //   };
  //   fetchBusInfo();
  // }, []);

  // console.log(busInfo);
  return (
    <div className="max-w-[500px] mx-auto min-h-screen p-4">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/route/:routeId/:direction" element={<RoutePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
