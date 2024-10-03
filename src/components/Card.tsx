interface CardProps {
  children: React.ReactNode;
  className?: string;
}
const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div className={`border p-4 rounded-lg hover:shadow-md transition-shadow duration-300 ${className}`}>
      {children}
    </div>
  );
};

export default Card;
