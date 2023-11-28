import { useDisclosure } from '@mantine/hooks';
import MonitorTable from './MonitorTable';
import MonitorModal from './MonitorModal';
import { ServerMonitStatus } from '@admin/types';
import { useState } from 'react';

const data = [
  {
    state: 0,
    device_name: 'sfs',
    device_type: 'sfssgs',
    ip: 'sfssgs',
    username: '',
    password: '',
    serial_number: 'sfssgs',
    error_message: 'sfssgs',
    remark: 'sfssgs',
  },
];

const Monitor = () => {
  const [opened, { open, close }] = useDisclosure(true);

  const [currentRow, setCurrentRow] = useState<ServerMonitStatus | null>(null);

  const handleOnCreateClick = () => {
    setCurrentRow(null);
    open();
  };

  const handleOnEditClick = (row: ServerMonitStatus) => {
    setCurrentRow(row);
    open();
  };

  const handleOnDeleteClick = (row: ServerMonitStatus) => {};

  const handleOnCancelClick = () => {};

  const handleOnComfirmClick = (row: ServerMonitStatus) => {};

  return (
    <div>
      <MonitorTable
        onCreate={handleOnCreateClick}
        onDelete={handleOnDeleteClick}
        onEdit={handleOnEditClick}
        onUpload={() => {}}
        data={data}
      />

      <MonitorModal
        opened={opened}
        onClose={close}
        onComfirm={handleOnComfirmClick}
        data={currentRow}
        deviceTypes={[]}
      />
    </div>
  );
};

export default Monitor;
