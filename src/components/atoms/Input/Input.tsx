import React from "react";

interface InputProps {
  placeholder?: string;
  value: string;
  className?: string;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
  placeholder,
  value,
  onChange,
  onKeyDown,
  className,
}: InputProps) {
  return (
    <input
      className={className}
      type="text"
      onKeyDown={onKeyDown}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}
