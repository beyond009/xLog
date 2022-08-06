import React from "react"

export const CrossbellIcon: React.FC<React.ComponentPropsWithoutRef<"svg">> = (
  props,
) => {
  return (
    <svg
      width="1em"
      height="1em"
      {...props}
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M512 1024c70.64 0 127.94-57.3 127.94-128H384.06c0 70.7 57.3 128 127.94 128z m430.78-299.42c-38.64-41.52-110.94-103.98-110.94-308.58 0-155.4-108.96-279.8-255.88-310.32V64c0-35.34-28.64-64-63.96-64s-63.96 28.66-63.96 64v41.68C301.12 136.2 192.16 260.6 192.16 416c0 204.6-72.3 267.06-110.94 308.58-12 12.9-17.32 28.32-17.22 43.42 0.22 32.8 25.96 64 64.2 64h767.6c38.24 0 64-31.2 64.2-64 0.1-15.1-5.22-30.54-17.22-43.42z"></path>
    </svg>
  )
}
