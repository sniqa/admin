import MonitorTable from './MonitorTable'

const data = [
	{
		state: 0,
		device_name: 'sfs',
		device_type: 'sfssgs',
		ip: 'sfssgs',
		serial_number: 'sfssgs',
		error_message: 'sfssgs',
		remark: 'sfssgs',
	},
]

const Monitor = () => {
	return (
		<div>
			<MonitorTable
				onCreate={() => {}}
				onDelete={() => {}}
				onEdit={() => {}}
				onUpload={() => {}}
				data={data}
			/>
		</div>
	)
}

export default Monitor
