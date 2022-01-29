import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url) => {
	const [data, setData] = useState(null)
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		setLoading(true);
		axios.get(url).then(res => {
			setData(res.data);
			console.log("Fetching data...")
		})
		.catch(e => setError(e))
		.finally(() => setLoading(false));
	},[url])	
	return {data, loading, error};
}


export default useFetch;