import React, { useState } from 'react'
import { FaMicrophone } from 'react-icons/fa'
import './Dashboard.css'

function Dashboard() {
	/* ПАЦИЕНТЫ */
	const patients = [
		{
			id: 1,
			name: 'Павлова Валентина Ильинична',
			age: 72,
			diagnosis: 'одышка (сердечная недостаточность)',
		},
		{ id: 2, name: 'Иванов Иван Иванович', age: 65, diagnosis: 'гипертония' },
		{ id: 3, name: 'Петрова Мария Сергеевна', age: 55, diagnosis: 'диабет' },
	]
	const [selectedPatient, setSelectedPatient] = useState(patients[0])
	const [isOpen, setIsOpen] = useState(false)
	const toggleDropdown = () => {
		setIsOpen(!isOpen)
	}
	const changePatient = patient => {
		setSelectedPatient(patient)
		setIsOpen(false)
	}

	/* СЦЕНАРИИ */
	const [activeScenario, setActiveScenario] = useState(null)
	const changeScenario = num => {
		setActiveScenario(num)
	}

	return (
		<div className='container'>
			<div className='container--inner'>
				{/* Левая часть с изображением и кнопками */}
				<div className='inner--left'>
					<div
						style={{
							position: 'absolute',
							bottom: '30px',
							left: '30px',
							display: 'flex',
							flexDirection: 'column',
						}}
					>
						{[1, 2, 3, 4, 5].map(num => (
							<button
								key={num}
								onClick={() => changeScenario(num)}
								style={{
									backgroundColor:
										activeScenario === num ? '#68A5B8' : '#D9D9D9',
									borderRadius: '25px',
									width: '100px',
									height: '100px',
									color: activeScenario === num ? '#FFF' : '#1E1E1E',
									fontWeight: '600',
									fontSize: '64px',
									margin: '5px',
									border:
										activeScenario === num
											? '5px solid #FFF'
											: '5px solid #68A5B8',
									cursor: 'pointer',
								}}
							>
								{num}
							</button>
						))}
					</div>
				</div>

				{/* Правая часть с информацией о пациенте и чатом */}
				<div className='inner--right'>
					<div className='inner--right_pacient'>
						<div className='custom-select' onClick={toggleDropdown}>
							<div className='select-selected'>
								<span>
									{selectedPatient ? selectedPatient.name : 'Выберите пациента'}
								</span>
								<br />
								{selectedPatient
									? selectedPatient.age
									: 'Выберите пациента'}{' '}
								года,
								<br />
								диагноз:{' '}
								{selectedPatient
									? selectedPatient.diagnosis
									: 'Выберите пациента'}
							</div>
							<div className={`select-arrow ${isOpen ? 'open' : ''}`}>
								&#9662;
							</div>
							{isOpen && (
								<div className='select-items'>
									{patients.map(patient => (
										<div
											key={patient.id}
											className='select-item'
											onClick={() => changePatient(patient)}
										>
											<div>{patient.name}</div>
											<div>{patient.age} лет</div>
											<div>Диагноз: {patient.diagnosis}</div>
										</div>
									))}
								</div>
							)}
						</div>
					</div>
					<div className='inner--right_chat'>
						{/* Здесь будет отображаться чат */}
						<p></p>
						<button>
							<FaMicrophone />
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Dashboard
