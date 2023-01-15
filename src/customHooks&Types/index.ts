import { useEffect, useState } from "react"
import axios from "axios"

export const getData = (url:string) =>{
	const [loading, setloading] = useState(true)
	const [error, seterror] = useState("")
	const [data, setdata] = useState([])
	
	useEffect(()=>{

		setloading(true)

		axios(url)
		.then((res)=>{
			let data = res.data
			setloading(false)
			setdata(data)
			seterror("")
		})
		.catch((err)=>{
			let error = err.response.data
			setdata([])
			seterror(error)
			setloading(false)
		})
	}, [])

	return {loading, setloading, error, seterror, data, setdata}
} 