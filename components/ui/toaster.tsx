"use client";

import React from "react";
import {
  Toast,
  ToastProvider,
  ToastViewport,
  ToastDescription,
  ToastClose,
} from "./toast";
import { useToast } from "./use-toast";
import { ToastTitle } from "@radix-ui/react-toast";

function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      <ToastViewport>
        {toasts
          ? toasts.map(({ id, title, description, action, ...props }) => (
              <Toast key={id} id={id} {...props}>
                <div className="grid gap-1">
                  {title && <ToastTitle>{title}</ToastTitle>}

                  {description && (
                    <ToastDescription>{description}</ToastDescription>
                  )}
                </div>

                {action}
                <ToastClose />
              </Toast>
            ))
          : ""}
      </ToastViewport>
    </ToastProvider>
  );
}

export default Toaster;
