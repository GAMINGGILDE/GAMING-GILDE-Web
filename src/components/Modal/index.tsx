"use client";

import React from "react";

interface ModalInterface {
  isShow: boolean;
  setShow: (isShow: boolean) => void;
  title: string;
  children: React.ReactNode;
}

export const Modal = ({ isShow, setShow, title, children }: ModalInterface) => {
  if (!isShow) {
    return <></>;
  }

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setShow(false);
    }
  };

  return (
    <div
      id="static-modal"
      data-modal-backdrop="static"
      tabIndex={-1}
      aria-hidden="true"
      // Event-Listener für den Klick außerhalb des Modals
      onClick={handleBackdropClick}
      style={{ zIndex: 9999 }}
      className="fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-opacity-50 backdrop-blur-md"
    >
      <div className="relative modal overflow-auto p-4 w-full max-w-2xl max-h-full rounded-lg shadow-xs">
        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <button
            type="button"
            onClick={() => setShow(false)}
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
            data-modal-hide="static-modal"
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
        </div>
        <div className="p-4 md:p-5 space-y-4">{children}</div>
      </div>
    </div>
  );
};
