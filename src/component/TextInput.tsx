import React from 'react'

type TextInputProps = {
  label: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  id?: string
  name?: string
  className?: string
  required?: boolean
}

export default ({
  label,
  value,
  onChange,
  id,
  name,
  className,
  required
}: TextInputProps) => {
  return (
    <div className="text-input">
      <label htmlFor={id}>
        {label}
      </label>
      <input type="text" id={id} name={name} className={className} value={value} onChange={onChange} required={required} />
    </div>
  );
}