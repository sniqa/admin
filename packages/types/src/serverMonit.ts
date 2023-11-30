export interface ServerMonitInfo {
  device_name: string;
  device_type: string;
  ip: string;
  username: string;
  password: string;
  remark?: string;
}

export type ServerMonitStatus = ServerMonitInfo & {
  state: MONITOR_STATE;
  serial_number?: string;
  error_message?: string;
};

export enum MONITOR_STATE {
  NORMAL = 0,
  UNKNOWN = 1,
  ALARM = 2,
}
