import { useDisclosure } from '@mantine/hooks';
import MonitorTable from './MonitorTable';
import MonitorModal from './MonitorModal';
import MonitDropzone from './MonitDropzone';
import { ServerMonitInfo, ServerMonitStatus } from '@admin/types';
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
  const [opened, { open, close }] = useDisclosure(false);

  const [uploadOpened, { open: uploadOpen, close: uploadClose }] =
    useDisclosure(false);

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

  const handleOnModalComfirmClick = (row: ServerMonitInfo) => {
    if (currentRow === null) {
      // create
      console.log('create');

      return;
    }

    console.log('edit');
  };

  const handleOnUploadComfirmClick = async (file: File) => {};
  const handleOnUploadClick = () => uploadOpen();

  return (
    <div>
      <MonitorTable
        onCreate={handleOnCreateClick}
        onDelete={handleOnDeleteClick}
        onEdit={handleOnEditClick}
        onUpload={handleOnUploadClick}
        data={data}
      />

      <MonitorModal
        opened={opened}
        onClose={close}
        onComfirm={handleOnModalComfirmClick}
        data={currentRow}
        deviceTypes={[]}
      />

      <MonitDropzone
        opened={uploadOpened}
        onClose={uploadClose}
        onComfirm={handleOnUploadComfirmClick}
      />
    </div>
  );
};

export default Monitor;
