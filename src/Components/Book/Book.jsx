import { useNavigate } from "react-router-dom";
import { Tooltip } from "react-tooltip";
const Book = ({ book }) => {
  const { bookId, image, bookName, author, tags, category, rating } = book;
  const navigate = useNavigate();

  const handleDetails = () => {
    navigate(`/book/${bookId}`);
  };
  return (
    <>
      <div
      data-tooltip-id="book-details"
      data-tooltip-variant="success"
        onClick={handleDetails}
        className="p-4 rounded-xl border flex flex-col gap-5 cursor-pointer"
      >
        <div className="bg-gray-200 rounded-md">
          <img className="w-[130px] h-44 mx-auto p-2" src={image} alt="" />
        </div>
        <h4 className="text-xl font-bold">{bookName}</h4>
        <p className="flex-grow">By: {author}</p>
        <hr className="border-dashed" />
        <div className="flex items-center gap-2">
          {tags.map((tag, idx) => (
            <p key={idx} className="text-[#23BE0A] bg-green-50 rounded-md p-1">
              #{tag}
            </p>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <p className="font-bold">{category}</p>
          <p>
            <span className="font-semibold">Ratings:</span> {rating}
          </p>
        </div>
      </div>
      <Tooltip id="book-details" place="top" content="Click to see more details"></Tooltip>
    </>
  );
};

export default Book;
