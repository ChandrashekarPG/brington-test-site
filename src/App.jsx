import React, { Suspense, lazy } from "react";
import PasswordGate from "./pages/PasswordGate";

const Home = lazy(() => import("./pages/Home"));

export default function App() {
  return (
    <PasswordGate>
      <Suspense fallback={<div className="p-8">Loading…</div>}>
        <Home />
      </Suspense>
    </PasswordGate>
  );
}
