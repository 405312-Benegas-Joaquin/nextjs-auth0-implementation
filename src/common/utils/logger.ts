import { Logger, LogConfig } from "./logger.types";


const createLogger = (
  config: LogConfig = { levels: { info: true, warn: true, debug: true, error: true, log: true } }
): Logger => {
  const isBrowser = typeof window !== "undefined";

  // Log styles for browser (CSS-based) and fallback styles for non-browser environments
  const logStyles = isBrowser
    ? {
        info: "color: white; background-color: #134fbf; padding: 2px 6px; border-radius: 4px;",
        warn: "color: white; background-color: #bf6913; padding: 2px 6px; border-radius: 4px;",
        debug: "color: white; background-color: #9413bf; padding: 2px 6px; border-radius: 4px;",
        error: "color: white; background-color: #bf1313; padding: 2px 6px; border-radius: 4px;",
        log: "color: white; background-color: #404040; padding: 2px 6px; border-radius: 4px;",
      }
    : {
        info: "\x1b[36m",
        warn: "\x1b[33m",
        debug: "\x1b[35m",
        error: "\x1b[31m",
        log: "\x1b[37m",
      };

  const logMessage = (
    level: keyof typeof logStyles,
    title: string,
    message: any,
    grouped = true // Default to grouping logs
  ): void => {
    if (!config.levels[level]) return;

    const now = new Date().toISOString();
    const formattedTitle = `[${now}] ${level.toUpperCase()}${title ? `: ${title}` : ""}`;

    if (grouped && isBrowser) {
      console.groupCollapsed(`%c${formattedTitle}`, logStyles[level]);
      console.log(message);
      console.groupEnd();
    } else if (isBrowser) {
      // Combine title and message into a single log entry
      if (typeof message === "object" && message !== null) {
        console.log(`%c${formattedTitle}\n`, logStyles[level], message);
      } else {
        console.log(`%c${formattedTitle}%c ${message}`, logStyles[level], "color: inherit;");
      }
    } else {
      const colorReset = "\x1b[0m";
      const combinedMessage =
        typeof message === "object" ? `${formattedTitle}` : `${formattedTitle} ${message}`;
      console.log(`${logStyles[level]}${combinedMessage}${colorReset}`);
      if (typeof message === "object" && message !== null) {
        console.log(message);
      }
    }

    // Save errors to localStorage
    if (level === "error" && isBrowser) {
      const errorLogs = JSON.parse(localStorage.getItem("errorLogs") || "[]");
      errorLogs.push({ timestamp: now, title, message });
      localStorage.setItem("errorLogs", JSON.stringify(errorLogs));
    }
  };

  const groupedLogs = (callback: () => void, title = "Grouped Logs"): void => {
    if (isBrowser) {
      console.group(title);
      callback();
      console.groupEnd();
    } else {
      console.log(`[Grouped Logs]: ${title}`);
      callback();
    }
  };

  return {
    info: (message, title = "", grouped = true) => logMessage("info", title, message, grouped),
    warn: (message, title = "", grouped = true) => logMessage("warn", title, message, grouped),
    debug: (message, title = "", grouped = true) => logMessage("debug", title, message, grouped),
    error: (message, title = "", grouped = true) => logMessage("error", title, message, grouped),
    log: (message, title = "", grouped = true) => logMessage("log", title, message, grouped),
    groupedLogs,
  };
};

// Export a logger instance with default configuration
export const logger = createLogger();
