import axios from "axios"
import {useEffect, useState } from "react"

const usePostFetch = (url,method, body) => {
	const [response, setResponse] = useState("");
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		axios({ method: method, 
			url: url, 
			headers: {"Content-Type": "application/json"},
			data: body
			})
			.then(res => {
				setResponse(res.data);
				console.log("PostFetching data...");
			})
			.catch(e => setError(e))
			.finally(() => setLoading(false));
	}, [url, method, body])

	return {response, loading, error};
}

export default usePostFetch; 