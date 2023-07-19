import { useEffect, useState } from "react";
import { type ToastProps } from "./toast";

type ToasterToast = ToastProps & {
  id: string;
  action?: React.ReactNode;
  title?: string;
  description?: string;
};

const actionTypes = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST",
} as const;

const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1000;

let count = 1;

const genID = () => {
  count = (count + 1) % Number.MAX_VALUE;
  return count.toString();
};

type ActionTypes = typeof actionTypes;

type Action =
  | {
      type: ActionTypes["ADD_TOAST"];
      toast: ToasterToast;
    }
  | {
      type: ActionTypes["REMOVE_TOAST"];
      toastID?: ToasterToast["id"];
    }
  | {
      type: ActionTypes["DISMISS_TOAST"];
      toastID?: ToasterToast["id"];
    };

interface State {
  toasts: ToasterToast[];
}

const toastTimeOuts = new Map<string, ReturnType<typeof setTimeout>>();

const addToRemoveQueue = (id: ToasterToast["id"]) => {
  if (toastTimeOuts.has(id)) return;

  setTimeout(() => {
    toastTimeOuts.delete(id);

    dispatch({
      type: "REMOVE_TOAST",
      toastID: id,
    });
  }, TOAST_REMOVE_DELAY);
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      };

    case "DISMISS_TOAST":
      const { toastID } = action;

      if (toastID) {
        addToRemoveQueue(toastID);
      } else {
        state.toasts.forEach((toast) => {
          addToRemoveQueue(toast.id);
        });
      }

      return {
        ...state,
        toasts: state.toasts.map((toast) => {
          return toast.id === toastID || toastID === undefined
            ? {
                ...toast,
                open: false,
              }
            : toast;
        }),
      };
    case "REMOVE_TOAST":
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastID),
      };
  }
};

const listeners: Array<(state: State) => void> = [];

let memoryState: State = { toasts: [] };

const dispatch = (action: Action) => {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => {
    listener(memoryState);
  });
};

interface Toast extends Omit<ToasterToast, "id"> {}

const toast = ({ ...props }: Toast) => {
  const id = genID();

  const dismiss = () => dispatch({ type: "DISMISS_TOAST" });

  dispatch({
    type: "ADD_TOAST",
    toast: {
      id,
      ...props,
      open: true,
      onOpenChange(open) {
        if (!open) dismiss();
      },
    },
  });

  return {
    id,
    dismiss,
  };
};

const useToast = () => {
  const [state, setState] = useState<State>(memoryState);

  useEffect(() => {
    listeners.push(setState);

    return () => {
      const idx = listeners.indexOf(setState);

      if (idx > -1) listeners.splice(idx, 1);
    };
  }, [state]);

  return {
    ...state,
    toast,
    dismiss: (toastID: string) =>
      dispatch({ type: "DISMISS_TOAST", toastID: toastID }),
  };
};

export { toast, useToast };
