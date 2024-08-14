interface props {
  children: string;
  color: string;
  onclick: () => void;
}

function MyButton({ children, onclick, color }: props) {
  return (
    <>
      <button className={"btn btn-" + color} onClick={onclick}>
        {children}
      </button>
    </>
  );
}

export default MyButton;