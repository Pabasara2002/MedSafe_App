import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import InputField from "../components/InputField";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./css/HealthTracker.css";

export default function HealthTracker() {
  const [vitals, setVitals] = useState({
    sugar: "",
    pressure: "",
    temp: "",
    pulse: "",
    respiration: "",
    oxygen: "",
  });

  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (field) => (e) =>
    setVitals({ ...vitals, [field]: e.target.value });

  const handleSubmit = async () => {
    try {
      setLoading(true);

      const response = await fetch("http://localhost:5000/api/health", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(vitals),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.error || "Something went wrong");
        return;
      }

      setResults(data);
    } catch (error) {
      alert("Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = async () => {
    await fetch("http://localhost:5000/api/health/reset", {
      method: "DELETE",
    });

    setResults(null);
    setVitals({
      sugar: "",
      pressure: "",
      temp: "",
      pulse: "",
      respiration: "",
      oxygen: "",
    });
  };

  const getStatusClass = (status) => {
    if (status === "Positive") return "positive";
    if (status === "Average") return "average";
    return "negative";
  };

  return (
    <>
      <Navbar loggedIn />

      <div className="section">
        <h2>Health Vital Tracker</h2>

        <div className="form-card">
          <div className="grid-2">
            <InputField
              label="Sugar level"
              value={vitals.sugar}
              onChange={handleChange("sugar")}
            />
            <InputField
              label="Blood Pressure (e.g. 120/80)"
              value={vitals.pressure}
              onChange={handleChange("pressure")}
            />
            <InputField
              label="Temperature (°C)"
              value={vitals.temp}
              onChange={handleChange("temp")}
            />
            <InputField
              label="Pulse"
              value={vitals.pulse}
              onChange={handleChange("pulse")}
            />
            <InputField
              label="Respiration Rate"
              value={vitals.respiration}
              onChange={handleChange("respiration")}
            />
            <InputField
              label="Blood Oxygen"
              value={vitals.oxygen}
              onChange={handleChange("oxygen")}
            />
          </div>

          <button className="btn-primary" onClick={handleSubmit}>
            {loading ? "Checking..." : "Search"}
          </button>
        </div>

        {results && (
          <div className="result-card">
            <h2>Results</h2>

            <div className="result-grid">
              <div>
                Sugar Level:
                <span className={getStatusClass(results.sugar_status)}>
                  {results.sugar_status}
                </span>
              </div>

              <div>
                Blood Pressure:
                <span className={getStatusClass(results.pressure_status)}>
                  {results.pressure_status}
                </span>
              </div>

              <div>
                Temperature:
                <span className={getStatusClass(results.temp_status)}>
                  {results.temp_status}
                </span>
              </div>

              <div>
                Pulse:
                <span className={getStatusClass(results.pulse_status)}>
                  {results.pulse_status}
                </span>
              </div>

              <div>
                Respiration:
                <span className={getStatusClass(results.respiration_status)}>
                  {results.respiration_status}
                </span>
              </div>

              <div>
                Blood Oxygen:
                <span className={getStatusClass(results.oxygen_status)}>
                  {results.oxygen_status}
                </span>
              </div>
            </div>

            <div className="health-meter">
              <h3>Health Score</h3>
              <div style={{ width: 180, margin: "20px auto" }}>
                <CircularProgressbar
                  value={results.health_score}
                  text={`${results.health_score}%`}
                />
              </div>
            </div>

            <button className="btn-outline" onClick={handleReset}>
              Refresh
            </button>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}