import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css"


function Loading({ loading }) {
  if (loading) {
    return <h1>Memuat data...</h1>;
  }
  return null;
}

function Failed({ failed }) {
  if (failed) {
    return <h1>Data gagal dimuat</h1>;
  }
  return null;
}

function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/restaurant");
        setRestaurants(response.data);
        setLoading(false);
      } catch (error) {
        setFailed(true);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Loading loading={loading} />;
  }

  if (failed) {
    return <Failed failed={failed} />;
  }

  if (selected) {
    return (
      <div className="detail-container">
        <h1>Detail Restaurant</h1>
        <p>
          <b>Nama:</b> {selected.name}
        </p>
        <p>
          <b>Alamat:</b> {selected.address}
        </p>
        <button onClick={() => setSelected(null)} className="back-btn">
          Kembali ke List
        </button>
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className="title">List Restaurant</h1>
      <div className="grid">
        {restaurants.map((item, index) => (
          <div key={index} className="card">
            <h2>{item.name}</h2>
            <button onClick={() => setSelected(item)} className="detail-btn">
              Lihat Detail
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
