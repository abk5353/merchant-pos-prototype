import Button from "./Button";

function Keypad({ onPress }) {
  const numbers = [1,2,3,4,5,6,7,8,9,".",0];

  return (
    <div className="keypad">
      {numbers.map((num) => (
        <Button key={num} onClick={() => onPress(num)}>
          {num}
        </Button>
      ))}
    </div>
  );
}

export default Keypad;