import React from 'react'
import {CSVLink} from 'react-csv'
import {
	Button,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from '@mui/material'

const Contents = ({dataBase, value}) => {
	const [currentPage, setCurrentPage] = React.useState(20)

	const headers = [
		{label: 'Name', key: 'name'},
		{label: 'City', key: 'city'},
		{label: 'Street', key: 'street'},
		{label: 'Address', key: 'address '},
		{label: 'Secondary', key: 'secondary'},
		{label: 'Phone', key: 'phone'},
	]
	const csvReport = {
		filename: 'Report.csv',
		headers: headers,
		data: dataBase.slice(0, currentPage),
	}

	const loadMore = () => {
		setCurrentPage(currentPage + 10)
	}

	return (
		<React.Fragment>
			<TableContainer component={Paper}>
				<Table sx={{minWidth: 650}} aria-label='simple table'>
					<TableHead>
						<TableRow>
							<TableCell>Name</TableCell>
							<TableCell align='right'>id</TableCell>
							<TableCell align='right'>City</TableCell>
							<TableCell align='right'>address</TableCell>
							<TableCell align='right'>secondary</TableCell>
							<TableCell align='right'>street</TableCell>
							<TableCell align='right'>phone</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{dataBase.slice(0, currentPage).map((row) => (
							<TableRow key={row.name} sx={{'&:last-child td, &:last-child th': {border: 0}}}>
								<TableCell component='th' scope='row'>
									{value >= 0.75 ? row.name.slice(-7).concat('ßå∑´œ´∂åß') : row.name}
								</TableCell>
								<TableCell align='right'>
									{value >= 1.75 ? row.id.toExponential(2) : row.id}
								</TableCell>
								<TableCell align='right'>
									{value >= 2.25 ? row.city.split('').reverse() : row.city}
								</TableCell>
								<TableCell align='right'>
									{value >= 3.25 ? row.address.split('').reverse() : row.address}
								</TableCell>
								<TableCell align='right'>
									{value >= 8
										? row.secondary.concat('ßå∑´œ´∂åß').split('').join(',')
										: row.secondary}
								</TableCell>
								<TableCell align='right'>
									{value >= 4.75 ? row.street.split('').join('-') : row.street}
								</TableCell>
								<TableCell align='right'>
									+{value >= 5.75 ? row.phone.slice(1, 3) : row.phone}
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
			{dataBase.length === 0 ? null : (
				<div style={{marginTop: 20, marginBottom: 20}}>
					<CSVLink style={{textDecoration: 'none', marginTop: 20}} {...csvReport}>
						<Button position='fixed' variant='contained'>
							Export CSV
						</Button>
					</CSVLink>
					<Button
						onClick={() => loadMore()}
						variant='contained'
						style={{marginLeft: 20}}
						color='success'
					>
						Load more
					</Button>
				</div>
			)}
		</React.Fragment>
	)
}

export default Contents
