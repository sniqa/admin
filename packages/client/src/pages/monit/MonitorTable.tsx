import { Button, Group, Text } from '@mantine/core'
import {
	MRT_ColumnDef,
	MantineReactTable,
	useMantineReactTable,
} from 'mantine-react-table'
import 'mantine-react-table/styles.css'
import { useMemo, useState } from 'react'

interface MonitorStatus {
	state: number
	device_name: string
	device_type: string
	ip: string
	serial_number?: string
	error_message?: string
	remark?: string
}

interface MonitorTableProps {
	onCreate: () => void
	onDelete: () => void
	onEdit: () => void
	onUpload: () => void
	data?: MonitorStatus[]
}

const MonitorTable = ({
	onCreate,
	onDelete,
	onEdit,
	onUpload,
	data = [],
}: MonitorTableProps) => {
	const columns = useMemo<MRT_ColumnDef<MonitorStatus>[]>(
		() => [
			{
				accessorKey: 'state',
				header: '状态',
			},
			{
				accessorKey: 'device_name',
				header: '设备名称',
			},
			{
				accessorKey: 'device_type',
				header: '设备类型',
			},
			{
				accessorKey: 'ip',
				header: '管理IP',
			},
			{
				accessorKey: 'serial_number',
				header: '序列号',
			},
			{
				accessorKey: 'error_message',
				header: '错误消息',
			},
			{
				accessorKey: 'remark',
				header: '备注',
			},
		],
		[]
	)

	const [showData, setShowData] = useState<MonitorStatus[]>([])

	const [isShowErrorData, setIsShowErrorData] = useState(false)

	const errorData = useMemo(() => data.filter((d) => d.state != 0), [data])

	// useEffect(() => setShowData(data), [data])

	const table = useMantineReactTable({
		columns,
		data: showData,
		renderTopToolbarCustomActions(props) {
			return (
				<Group gap={4} className="">
					<Button size="xs" variant="light" onClick={onCreate}>{`新建`}</Button>
					<Button size="xs" variant="light" onClick={onUpload}>{`导入`}</Button>
					<Button
						size="xs"
						variant={isShowErrorData ? 'light' : 'filled'}
						color="green"
						onClick={() => (setShowData(data), setIsShowErrorData(false))}
					>{`总览: ${data.length}`}</Button>
					<Button
						size="xs"
						variant={isShowErrorData ? 'filled' : 'light'}
						color="red"
						onClick={() => (setShowData(errorData), setIsShowErrorData(true))}
					>{`故障: ${errorData.length}`}</Button>
					<Text></Text>
				</Group>
			)
		},
		renderRowActions() {
			return (
				<Group>
					<Button
						size="xs"
						variant="light"
						color="green"
						onClick={onEdit}
					>{`编辑`}</Button>
					<Button
						size="xs"
						variant="light"
						color="red"
						onClick={onDelete}
					>{`删除`}</Button>
				</Group>
			)
		},
	})

	return <MantineReactTable table={table} />
}

export default MonitorTable
