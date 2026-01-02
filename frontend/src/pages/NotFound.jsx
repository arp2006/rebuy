import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-[60vh] w-full flex flex-col items-center justify-center gap-4 text-center">
      <h1 className="text-3xl font-bold text-[#0f172a]">404</h1>
      <p className="text-[#64748b]">This page doesn’t exist.</p>
      <button
        className="px-4 py-2 rounded-lg bg-[#3498DB] text-white font-semibold"
        onClick={() => navigate("/")}
      >
        Go Home
      </button>
    </div>
  );
}

export default NotFound;
