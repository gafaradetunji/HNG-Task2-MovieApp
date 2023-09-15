type GenreProps = {
  genre: {
    name: string;
  };
};
const Genre: React.FC<GenreProps> = ({ genre }) => {
  return (
    <p className="text-[#B91C1C] text-xs lg:text-[15px] font-medium bg-[#F8E7EB] rounded-2xl px-2">
      {genre.name}
    </p>
  );
};
export default Genre;
