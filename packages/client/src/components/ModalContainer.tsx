import { Button, Group, Modal, ModalProps } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { CANCEL, COMFIRM } from '@utils/constant';
import { ReactNode } from 'react';

export type ModalContainerProps = ModalProps & {
  onCancel: () => void;
  onComfirm: () => void | Promise<void>;
  children?: ReactNode;
};

const ModalContainer = ({
  onCancel,
  onComfirm,
  children,
  ...props
}: ModalContainerProps) => {
  const [loading, setLoading] = useDisclosure(false);

  const handleOnCancelClick = () => {
    onCancel();
  };

  const handleOnComfirmClick = async () => {
    setLoading.open();

    await onComfirm();

    setLoading.close();
  };

  return (
    <Modal {...props}>
      {children}

      <Group justify="end" className="mt-4">
        <Button variant="outline" onClick={handleOnCancelClick}>
          {CANCEL}
        </Button>
        <Button loading={loading} onClick={handleOnComfirmClick}>
          {COMFIRM}
        </Button>
      </Group>
    </Modal>
  );
};

export default ModalContainer;
