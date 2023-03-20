const HEAD = (
  <div
    style={{
      width: "50px",
      height: "50px",
      borderRadius: "100%",
      position: "absolute",
      top: "49px",
      right: "-30px",
      border: "10px solid black",
    }}
  />
);

const BODY = (
  <div
    style={{
      width: "10px",
      height: "100px",
      background: "black",
      position: "absolute",
      top: "118px",
      right: 0,
    }}
  />
);

const RIGHT_ARM = (
  <div
    style={{
      width: "90px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "150px",
      right: -90,
      rotate: "-30deg",
      transformOrigin: "left bottom",
    }}
  />
);

const LEFT_ARM = (
  <div
    style={{
      width: "90px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "150px",
      right: 10,
      rotate: "30deg",
      transformOrigin: "right bottom",
    }}
  />
);

const RIGHT_LEG = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "210px",
      right: -90,
      rotate: "50deg",
      transformOrigin: "left bottom",
    }}
  />
);
const LEFT_LEG = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "210px",
      right: 0,
      rotate: "-50deg",
      transformOrigin: "right bottom",
    }}
  />
);
type HangmanDrawingProps = {
  numberofGuesses: number;
};

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];
export function HangmanDrawing({ numberofGuesses }: HangmanDrawingProps) {
  return (
    <div style={{ position: "relative" }}>
      {BODY_PARTS.slice(0,numberofGuesses)}
      <div
        style={{
          height: "50px",
          position: "absolute",
          background: "black",
          width: "10px",
          top: 0,
          right: 0,
        }}
      />
      <div
        style={{
          width: "200px",
          background: "black",
          height: "10px",
          marginLeft: "120px",
        }}
      />
      <div
        style={{
          width: "10px",
          height: "400px",
          background: "black",
          marginLeft: "120px",
        }}
      />
      <div style={{ width: "250px", height: "10px", background: "black" }} />
    </div>
  );
}

export default HangmanDrawing;
