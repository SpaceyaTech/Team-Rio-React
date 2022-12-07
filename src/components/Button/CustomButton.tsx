export interface CustomButtonProps {
  text: string;
  color: string;
  textColor: string;
}

export default function CustomButton(props: CustomButtonProps) {
  return (
    <button
      type="button"
      className={`bg-${props.color}-900 hover:bg-${props.color}-700 text-${props.textColor} font-bold py-2 px-4 rounded`}
    >
      {props.text}
    </button>
  );
}
