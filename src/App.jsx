import { useEffect } from "react";

const App = () => {
  let timer;

	// akan dijalankan ketika pertama kali di-render
	useEffect(() => {
		timer = setTimeout(() => {
			alert("Hai");
		}, 1000);

		// akan dijalankan ketika komponen akan dihapus dari DOM
		return () => {
			clearTimeout(timer);
		}
	}, []);

	// ...
}

export default App;