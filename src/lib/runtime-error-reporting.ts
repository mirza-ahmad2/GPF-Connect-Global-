type RuntimeErrorOptions = {
  tags?: Record<string, string>;
  extra?: Record<string, unknown>;
};

type EditorEvents = {
  captureException?: (
    error: unknown,
    options?: RuntimeErrorOptions,
  ) => void;
};

declare global {
  interface Window {
    __lovableEvents?: EditorEvents;
    __lovableReportRuntimeError?: (payload: {
      message: string;
      stack?: string;
      source?: string;
      lineno?: number;
      colno?: number;
    }) => void;
  }
}

export function reportRuntimeError(error: unknown, context: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      tags: Object.fromEntries(
        Object.entries(context).map(([k, v]) => [k, String(v)]),
      ),
    },
  );

  const err = error instanceof Error ? error : new Error(String(error));
  window.__lovableReportRuntimeError?.({
    message: err.message,
    stack: err.stack,
    source: "app",
  });
}
