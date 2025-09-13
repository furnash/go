import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const GoAgenda = () => {
  const [downloaded, setDownloaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const link = document.createElement("a");
    link.href = "/1.pdf";
    link.download = "Groove Odyssey 2.0 – Agenda.pdf";
    link.click();

    setDownloaded(true);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-gradient-to-br from-pink-200 via-pink-100 to-pink-300">
      {downloaded ? (
        <>
          <p className="text-2xl font-semibold text-pink-800 mb-6">
            🎉Groove Odyssey 2.0 – Agenda downloaded successfully! <br />
            Please check your <span className="font-bold">Downloads</span> folder.
          </p>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 bg-pink-600 text-white rounded-full shadow-lg hover:bg-pink-700 transition"
          >
            Go Home
          </button>
        </>
      ) : (
        <p className="text-lg text-pink-800">Downloading agenda...</p>
      )}
    </div>
  );
};

export default GoAgenda;
