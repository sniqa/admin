import ModalContainer, { ModalContainerProps } from '@comps/ModalContainer';
import {
  PasswordInput,
  Select,
  SimpleGrid,
  Stack,
  TextInput,
  Textarea,
} from '@mantine/core';

import {
  DEVICE_NAME,
  DEVICE_TYPE,
  MANAGE_IP,
  REMARK,
  USERNAME,
  PASSWORD,
  CREATE_MONIT_ITEM,
} from '@utils/constant';
import { useCallback, useEffect, useState } from 'react';
import { z } from 'zod';
import {
  MONITOR_STATE,
  ServerMonitInfo,
  ServerMonitStatus,
} from '@admin/types';

type MonitorModalProps = Omit<ModalContainerProps, 'onComfirm' | 'onCancel'> & {
  data: ServerMonitStatus | null;
  onComfirm: (data: ServerMonitInfo) => void | Promise<void>;
  deviceTypes: string[];
};

const ipSchema = z.string().ip();

const originalData: ServerMonitStatus = {
  state: MONITOR_STATE.NORMAL,
  device_name: '',
  device_type: '',
  username: '',
  password: '',
  ip: '',
  remark: '',
};

const MonitorModal = ({
  onComfirm,
  data,
  deviceTypes = [],
  ...props
}: MonitorModalProps) => {
  const [value, setValue] = useState<ServerMonitStatus>(originalData);

  const [isIpValid, setIsIpValid] = useState(false);

  const valueOnUpdate = (key: keyof ServerMonitInfo, value: string) => {
    if (key === 'ip') {
      value === '' ? setIsIpValid(false) : setIsIpValid(!ipSchema.safeParse(value).success) 
    }
    setValue((oldVal) => ({ ...oldVal, [key]: value }));
  };

  const reset = () => {
    data && setValue(data);
  };

  const handleOnCancelClick = () => {
    reset();
    props.onClose();
  };

  const handleOnComfirmClick = async () => {
    await onComfirm(value);
    reset();
    props.onClose();
  };

  useEffect(() => {
    data ? setValue(data) : setValue(originalData);
  }, [data]);

  return (
    <ModalContainer
      {...props}
      title={CREATE_MONIT_ITEM}
      onCancel={handleOnCancelClick}
      onComfirm={handleOnComfirmClick}
    >
      <Stack>
        <SimpleGrid cols={2}>
          <TextInput
            label={DEVICE_NAME}
            required
            value={value?.device_name || ''}
            onChange={(e) =>
              valueOnUpdate('device_name', e.currentTarget.value)
            }
          />

          <Select
            label={DEVICE_TYPE}
            required
            data={deviceTypes}
            defaultValue={value.device_type || ''}
            onChange={(val) => val && valueOnUpdate('device_type', val)}
          />

          <TextInput
            label={MANAGE_IP}
            required
            value={value.ip || ''}
            onChange={(e) => valueOnUpdate('ip', e.currentTarget.value)}
            error={isIpValid}
          />

          <TextInput
            label={USERNAME}
            required
            value={value.username || ''}
            onChange={(e) => valueOnUpdate('username', e.currentTarget.value)}
          />

          <PasswordInput
            label={PASSWORD}
            required
            value={value?.password || ''}
            onChange={(e) => valueOnUpdate('password', e.currentTarget.value)}
          />
        </SimpleGrid>

        <Textarea
          label={REMARK}
          value={value?.remark || ''}
          onChange={(e) => valueOnUpdate('remark', e.currentTarget.value)}
        />
      </Stack>
    </ModalContainer>
  );
};

export default MonitorModal;
