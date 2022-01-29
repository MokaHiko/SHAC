import { useEffect, useState } from "react"

const useClock = () =>
{
	const [apiTime, setApiTime] = useState(null);
	const [stringTime, setStringTime] = useState();
	const [stringDate, setStringDateTime] = useState();

	useEffect(() => 
	{
		setInterval(() => {
			const date = new Date();
			setStringTime(date.toLocaleTimeString());
			setApiTime(new Date(date - date.getTimezoneOffset()*60*1000).toJSON());
			setStringDateTime(date.toLocaleDateString());
		}, 1000);
	}, [])

	return {apiTime, stringTime,stringDate}
}

export default useClock;