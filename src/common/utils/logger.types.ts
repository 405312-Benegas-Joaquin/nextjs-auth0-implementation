export interface LogConfig {
  levels: {
    info: boolean;
    warn: boolean;
    debug: boolean;
    error: boolean;
    log: boolean;
  };
}

// Definición del Logger
export interface Logger {
  info: (message: any, title?: string, grouped?: boolean) => void;
  warn: (message: any, title?: string, grouped?: boolean) => void;
  debug: (message: any, title?: string, grouped?: boolean) => void;
  error: (message: any, title?: string, grouped?: boolean) => void;
  log: (message: any, title?: string, grouped?: boolean) => void;
  groupedLogs: any;
}
