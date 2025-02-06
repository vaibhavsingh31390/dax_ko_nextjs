function Loader({
  width = "21px",
  height = "21px",
  borderColor = "var(--tertiary-color)",
  borderWidth = "3",
  animationDuration = "1s",
  ...props
}) {
  const loaderStyle = {
    width,
    height,
    border: `${borderWidth}px solid ${borderColor}`,
    borderTop: `${borderWidth}px solid transparent`,
    borderRadius: "50%",
    animation: `spin ${animationDuration} linear infinite`,
  };

  return <div className="dax-ko-loader" style={loaderStyle} {...props}></div>;
}

export default Loader;
