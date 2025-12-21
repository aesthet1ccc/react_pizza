import React, { RefObject } from "react";

type UseClickOutsideFn = <T extends HTMLElement>(
  ref: RefObject<T | null>,
  callback: () => void
) => void;

export const useClickOutside: UseClickOutsideFn = (ref, callback) => {
  const handleClick = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      callback();
    }
  };

  React.useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [ref, callback]);
};
