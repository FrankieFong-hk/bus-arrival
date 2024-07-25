export interface SuccessResponse<T> {
  type: string;
  version: string;
  generated_timestamp: string;
  data: T;
}
