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

	const toSimpleString = (date) => {
		const simpleDate = new Date(date); 
		return simpleDate.getHours() + "h : " + simpleDate.getMinutes() + "m";
	}

	return {apiTime, stringTime,stringDate, toSimpleString}
}

export default useClock;