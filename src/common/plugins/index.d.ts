export interface SnackBarPlugin {
  (params: any): void;
  info(message: string): void;
  error(message: string): void;
}
