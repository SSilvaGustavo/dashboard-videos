interface ButtonsProps {
    link: string;
    class: "default" | "secondary";
    icon: JSX.Element;
    text: string;
}

export function Button(props: ButtonsProps) {
    
  return (
      <a href={props.link} className={props.class === "default" ? "p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors" : "p-4 text-sm border border-blue-500 text-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors"}>
          {props.icon}
        {props.text}
    </a>
  )
}