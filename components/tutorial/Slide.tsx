const Slide: React.FC = ({ children }) => {
    return (
      <li className="glide__slide">
        {children}
      </li>
    );
  }

export default Slide;