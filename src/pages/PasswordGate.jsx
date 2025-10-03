import React from "react";

const PASSWORD = "Brington@123";

export default function PasswordGate({ children }) {
  const [unlocked, setUnlocked] = React.useState(false);
  const [value, setValue] = React.useState("");

  React.useEffect(() => {
    if (localStorage.getItem("pw_ok") === "1") setUnlocked(true);
  }, []);

  function onSubmit(e) {
    e.preventDefault();
    if (value === PASSWORD) {
      localStorage.setItem("pw_ok", "1");
      setUnlocked(true);
    } else {
      alert("Incorrect password");
    }
  }

  if (unlocked) return <>{children}</>;

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 px-4">
      <form
        onSubmit={onSubmit}
        className="w-full max-w-sm bg-white shadow-lg rounded-xl p-6"
      >
        <h1 className="text-xl font-bold mb-3">Enter Password</h1>

        <label className="block">
          <span className="sr-only">Password</span>
          <input
            type="password"
            className="w-full border rounded px-3 py-2"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Password"
            required
            aria-label="Site password"
          />
        </label>

        <button className="mt-4 w-full rounded bg-black text-white py-2">
          Enter
        </button>
      </form>
    </main>
  );
}
