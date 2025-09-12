import { useEffect } from "react";

const GoAgenda = () => {
  useEffect(() => {
    const link = document.createElement("a");
    link.href = "/1.pdf"; 
    link.download = "Groove Odyssey 2.0 – Agenda"; 
    link.click();

    window.location.href = "/";
  }, []);

  return <p>Downloading agenda...</p>;
};

export default GoAgenda; 
