interface InputProps {
  type: React.HTMLInputTypeAttribute
  placeholder?: string
  required?: boolean
  onChange?: React.ChangeEventHandler<HTMLInputElement>
}

export function Input(props: InputProps) {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      required={props.required}
      onChange={props.onChange}
      className="bg-gray-900 rounded px-5 h-14 outline-none border border-[transparent] focus:border-green-300 [&:not(:placeholder-shown):invalid]:border-red-500 transition-colors"
    />
  )
}
