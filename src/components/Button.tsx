interface ButtonProps {
  href: string
  variant: 'primary' | 'secondary'
  children: any
}

export function Button(props: ButtonProps) {
  return (
    <a
      href={props.href}
      className={ props.variant == "primary" ?
        "p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors"
      :
        "p-4 text-sm border border-blue-500 text-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors"
      }      
    >
      {props.children}
    </a>
  )
}
