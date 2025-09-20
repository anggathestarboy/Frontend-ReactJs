import "./app.css";
import { useState, useEffect } from "react";

const App = () => {
	const [id, setId] = useState(1);
  const [car, setCar] = useState({});

	const onNext = () => {
		const nextId = id + 1;
		if (nextId > 10) {
			return setId(1);
		}

		return setId(nextId);
	}

	const fetchCar = async () => {
		const response = await fetch('https://64d358c767b2662bf3dc103e.mockapi.io/api/v1/cars/' + id);
		const data = await response.json();
		setCar(data);
	}
	
// Akan dijalankan ketika pertama kali di-render dan setiap kali terdapat perubahan state id
	useEffect(() => {
		fetchCar();
	}, [id]);

  return (
    <div>
			<p>{ car.name }</p>
			<button onClick={onNext}>Selanjutnya</button>
    </div>
  );
}

export default App;