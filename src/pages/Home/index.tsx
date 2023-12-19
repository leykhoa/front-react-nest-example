import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const handlePDF = async () => {
    const response = await axios.get("http://localhost:3000/api/v1/pdf", {
      responseType: "blob",
    });

    const pdfBlob = new Blob([response.data], { type: "application/pdf" });
    const pdfUrl = URL.createObjectURL(pdfBlob);
    window.open(pdfUrl, "_blank");
    console.log(response);
  };
  return (
    <>
      <button onClick={handlePDF}>Create PDF</button>
      <button onClick={() => navigate("/admin")}>Admin</button>
      <button onClick={() => navigate("/customer1")}>User 1</button>

      <button onClick={() => navigate("/customer2")}>User 2</button>
    </>
  );
}
