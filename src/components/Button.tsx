import classNames from "classnames";

interface ButtonsProps {
  link: string;
  class: "default" | "secondary";
  icon: JSX.Element;
  text: string;
}

export function Button(props: ButtonsProps) {
  const isDefaultButton = props.class === "default";

  return (
    <a
      href={props.link}
      className={classNames(
        "p-4 text-sm flex items-center rounded font-bold uppercase gap-2 justify-center transition-colors",
        {
          "bg-green-500 hover:bg-green-700": isDefaultButton,
          "border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-gray-900":
            !isDefaultButton,
        }
      )}
    >
      {props.icon}
      {props.text}
    </a>
  );
}
