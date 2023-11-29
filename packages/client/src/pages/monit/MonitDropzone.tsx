import ModalContainer, { ModalContainerProps } from '@comps/ModalContainer';
import '@mantine/dropzone/styles.css';
import {
  Dropzone,
  DropzoneProps,
  FileWithPath,
  IMAGE_MIME_TYPE,
} from '@mantine/dropzone';
import { IconPhoto, IconTrash, IconFileTypeXls } from '@tabler/icons-react';
import {
  ActionIcon,
  Anchor,
  Group,
  rem,
  Stack,
  Text,
  Tooltip,
} from '@mantine/core';
import {
  DELETE,
  DOWNLOAD_TEMPLATE_FILE,
  DOWNLOAD_TEMPLATE_FILE_SUCCESS,
  DRAG_IMAGES_HERE_OR_CLICK_TO_SELECT_FILES,
  NOT_ALLOW_UPLOAD_EMPTY_FILE,
  NOT_SELECT_FILE,
  UPLOAD,
} from '@utils/constant';
import { useState } from 'react';
import notices from '@utils/notices';

type MonitDropzoneProps = Omit<
  ModalContainerProps,
  'onComfirm' | 'onCancel'
> & {
  onComfirm: (file: File) => void | Promise<void>;
};

const MonitDropzone = ({ onComfirm, ...props }: MonitDropzoneProps) => {
  const [file, setFile] = useState<File | null>(null);

  const [loading, setLoading] = useState(false);

  const reset = () => {
    setFile(null);
  };

  const handleOnCancelClick = () => {
    reset();
    props.onClose();
  };
  const handleOnComfirmClick = async () => {
    setLoading(true);

    if (file === null) {
      setLoading(false);
      return notices.error(NOT_SELECT_FILE);
    }

    await onComfirm(file);

    setLoading(false);
  };

  const handleOnDropChange = (files: FileWithPath[]) => {
    files && setFile(files[0]);
  };

  const handleOnAchorClick = () => {
    notices.success(DOWNLOAD_TEMPLATE_FILE_SUCCESS);
  };

  return (
    <ModalContainer
      title={UPLOAD}
      onCancel={handleOnCancelClick}
      onComfirm={handleOnComfirmClick}
      {...props}
    >
      {/* download template file */}
      <div className="mb-2">
        <Anchor
          download
          href="/upload_template_file.xlsx"
          onClick={handleOnAchorClick}
        >
          {DOWNLOAD_TEMPLATE_FILE}
        </Anchor>
      </div>

      {/* dropzone */}
      <Dropzone onDrop={handleOnDropChange} maxFiles={1} loading={loading}>
        {file ? (
          <Stack align="center">
            <Dropzone.Idle>
              <IconFileTypeXls
                style={{
                  width: rem(52),
                  height: rem(52),
                  color: 'var(--mantine-color-dimmed)',
                }}
              />
            </Dropzone.Idle>

            <Text className="text-blue-500">{file?.name}</Text>
          </Stack>
        ) : (
          <Stack align="center">
            <Dropzone.Idle>
              <IconPhoto
                style={{
                  width: rem(52),
                  height: rem(52),
                  color: 'var(--mantine-color-dimmed)',
                }}
                stroke={1.5}
              />
            </Dropzone.Idle>

            <Text size="xl" inline>
              {DRAG_IMAGES_HERE_OR_CLICK_TO_SELECT_FILES}
            </Text>
          </Stack>
        )}
      </Dropzone>

      {file && (
        <Group justify="space-between" className="mt-4 bg-gray-200 p-2">
          <Text className="text-blue-500">{file?.name}</Text>
          <ActionIcon variant="subtle" onClick={reset}>
            <Tooltip label={DELETE} withinPortal>
              <IconTrash />
            </Tooltip>
          </ActionIcon>
        </Group>
      )}
    </ModalContainer>
  );
};

export default MonitDropzone;
