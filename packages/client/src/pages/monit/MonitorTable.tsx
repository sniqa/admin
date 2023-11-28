import { Button, Group, Text } from '@mantine/core';
import {
  CREATE_MONIT_ITEM,
  DEVICE_NAME,
  DEVICE_TYPE,
  ERROR_MESSAGE,
  FAULT,
  LAST_UPDATE_DATE,
  MANAGE_IP,
  OVERVIEW,
  REMARK,
  SERIAL_NUMBER,
  STATE,
} from '@utils/constant';
import {
  MRT_ColumnDef,
  MantineReactTable,
  useMantineReactTable,
} from 'mantine-react-table';
import 'mantine-react-table/styles.css';
import { useMemo, useState, useEffect } from 'react';
import { ServerMonitStatus } from '@admin/types';

interface MonitorTableProps {
  onCreate: () => void;
  onDelete: (row: ServerMonitStatus) => void;
  onEdit: (row: ServerMonitStatus) => void;
  onUpload: () => void;
  data?: ServerMonitStatus[];
  lastUpdateTime?: string;
}

const MonitorTable = ({
  onCreate,
  onDelete,
  onEdit,
  onUpload,
  data = [],
  lastUpdateTime,
}: MonitorTableProps) => {
  const columns = useMemo<MRT_ColumnDef<ServerMonitStatus>[]>(
    () => [
      {
        accessorKey: 'state',
        header: STATE,
      },
      {
        accessorKey: 'device_name',
        header: DEVICE_NAME,
      },
      {
        accessorKey: 'device_type',
        header: DEVICE_TYPE,
      },
      {
        accessorKey: 'ip',
        header: MANAGE_IP,
      },
      {
        accessorKey: 'serial_number',
        header: SERIAL_NUMBER,
      },
      {
        accessorKey: 'error_message',
        header: ERROR_MESSAGE,
      },
      {
        accessorKey: 'remark',
        header: REMARK,
      },
    ],
    []
  );

  const [showData, setShowData] = useState<ServerMonitStatus[]>([]);

  const [isShowErrorData, setIsShowErrorData] = useState(false);

  const errorData = useMemo(() => data.filter((d) => d.state != 0), [data]);

  useEffect(() => setShowData(data), [data]);

  const table = useMantineReactTable({
    columns,
    data: showData,
    enableRowActions: true,
    renderTopToolbarCustomActions(props) {
      return (
        <Group gap={4} className="">
          <Button size="xs" variant="light" onClick={onCreate}>
            {CREATE_MONIT_ITEM}
          </Button>

          <Button size="xs" variant="light" onClick={onUpload}>{`导入`}</Button>

          <Button
            size="xs"
            variant={isShowErrorData ? 'light' : 'filled'}
            color="green"
            onClick={() => (setShowData(data), setIsShowErrorData(false))}
          >{`${OVERVIEW}: ${data.length}`}</Button>

          <Button
            size="xs"
            variant={isShowErrorData ? 'filled' : 'light'}
            color="red"
            onClick={() => (setShowData(errorData), setIsShowErrorData(true))}
          >{`${FAULT}: ${errorData.length}`}</Button>

          {lastUpdateTime && (
            <Text>{`${LAST_UPDATE_DATE}: ${lastUpdateTime}`}</Text>
          )}
        </Group>
      );
    },
    renderRowActions({ row }) {
      return (
        <Group gap={2}>
          <Button
            size="xs"
            variant="subtle"
            onClick={() => onEdit(row.original)}
          >{`编辑`}</Button>
          <Button
            size="xs"
            variant="subtle"
            onClick={() => onDelete(row.original)}
          >{`删除`}</Button>
        </Group>
      );
    },
  });

  return <MantineReactTable table={table} />;
};

export default MonitorTable;
