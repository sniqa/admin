export type Result<Data = null> = {
  success: boolean;
  data: Data;
  code?: number;
  message?: string;
};
