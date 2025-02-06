import "@/components/layout/Format.css"; // Import layout styles

// Container component with optional fluid width
const Container = ({ children, className = "", fluid = false }) => {
  const containerClass = fluid ? "w-full px-4" : "ui-container";
  return <div className={`${containerClass} ${className}`}>{children}</div>;
};

// Row component for layout rows
const Row = ({ children, className = "" }) => {
  return <div className={`ui-row ${className}`}>{children}</div>;
};

// Col component with responsive breakpoints
const Col = ({ children, sm, md, lg, xl, className = "", ...props }) => {
  const colClasses = [
    sm && `w-full sm:w-${sm}/12`,
    md && `md:w-${md}/12`,
    lg && `lg:w-${lg}/12`,
    xl && `xl:w-${xl}/12`,
    "px-4",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={colClasses} {...props}>
      {children}
    </div>
  );
};

export { Container, Row, Col };
