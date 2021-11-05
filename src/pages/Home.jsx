import React from 'react'
import {Container, Typography} from '@mui/material'
import Buttons from '../components/Buttons/Buttons'
import Input from '../components/Input/Input'
import Sliders from '../components/Slider/Sliders'
import axios from 'axios'
import Contents from '../components/Contents/Contents'
import seedrandom from 'seedrandom'

const Home = () => {
	const rng = seedrandom('hello')
	console.log(rng)

	const [input, setInput] = React.useState('')
	const [value, setValue] = React.useState(0)
	const [dataBase, setDataBase] = React.useState([])

	const handleChange = (event, newValue) => {
		setValue(newValue)
	}

	const handleInput = (e) => {
		e.preventDefault()
		generate(input)
		setInput('')
	}

	const getRandomInt = (min, max) => {
		return Math.floor(Math.random() * (max - min + 1)) + min
	}

	const random = (arr) => {
		return arr[getRandomInt(0, arr.length - 1)]
	}
	const generate = (number) => {
		if (input === '') {
			alert('eat the number')
		}

		function randoms(arr, length) {
			let result = []

			for (let i = 0; i < length; i++) {
				result.push(random(arr))
			}

			return result
		}

		setDataBase(randoms(dataBase, number))
	}

	const toggleLanguages = async (string) => {
		try {
			const response = await axios.get(`https://generate-data-fake.herokuapp.com/${string}`)
			setDataBase(response.data)
		} catch (error) {
			alert('The data did not come from the server (')
		}
	}

	return (
		<Container maxWidth='lg'>
			<Buttons toggleLanguages={toggleLanguages} />
			<Input handleInput={handleInput} input={input} setInput={setInput} />
			<Sliders value={value} handleChange={handleChange} />
			{dataBase.length === 0 ? (
				<Typography variant='h5' align='center' color='textSecondary' paragraph>
					Data will be displayed here
				</Typography>
			) : (
				<Contents value={value} dataBase={dataBase} />
			)}
		</Container>
	)
}

export default Home
