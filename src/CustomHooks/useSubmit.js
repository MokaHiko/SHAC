import axios from "axios"
import { useState } from "react"

const useSubmit = () => {
	const [response, setResponse] = useState("");
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(true);

	const submit = (url, method, body) => {
		axios({ method: method, 
		        url: url, 
			headers: {"Content-Type": "application/json"},
			data: body
		})
			.then(res => {
				setResponse(res.data);
			})
			.catch(e => setError(e))
			.finally(() => setLoading(false));
	}
	return {response, loading, error, submit};
}

export default useSubmit; 