import { useState, useEffect } from "react";

const App = () => {
  const [cars, setCars] = useState([]);

	const fetchCars = async () => {
		const response = await fetch('https://64d358c767b2662bf3dc103e.mockapi.io/api/v1/cars');
		const data = await response.json();
		setCars(data);
	}

	// akan dijalankan ketika pertama kali di-render
	useEffect(() => {
		fetchCars();
	}, []);

  return (
    <ul>
			{
				cars.map((car) => (
					<li>{ car.name }</li>
				))
			}
    </ul>
  );
}

export default App;