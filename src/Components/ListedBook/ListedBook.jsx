import { MdOutlineLibraryBooks } from "react-icons/md";
import { IoPeopleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
const ListedBook = ({ list }) => {
    const navigate= useNavigate();
  const {
    bookId,
    image: bookImg,
    bookName: name,
    author,
    category,
    rating,
    publisher,
    totalPages,
  } = list;

  const handleBookDetails=()=>{
    navigate(`/book/${bookId}`);
  }
  return (
    <div className="flex gap-4 border rounded-lg p-2 border-gray-200">
      <div className="cover bg-gray-200 rounded-lg">
        <img className="w-24 lg:w-32 mx-auto p-2" src={bookImg} alt="" />
      </div>
      <div className="book-details flex flex-col flex-grow">
        <h2 className="font-bold">{name}</h2>
        <h4 className="text-sm flex-grow">By: {author}</h4>
        <div className="flex items-center gap-4 text-sm font-semibold">
          <span className="flex items-center gap-2"><IoPeopleOutline></IoPeopleOutline>Publisher: {publisher}</span>
          <span className="flex items-center gap-2">
          <MdOutlineLibraryBooks></MdOutlineLibraryBooks>Pages: {totalPages}
          </span>
        </div>
        <div className="moredetails space-x-3 border-t py-3">
          <button className="btn btn-xs bg-sky-100 text-sky-500 rounded-xl">
            Category: {category}
          </button>
          <button className="btn btn-xs rounded-full bg-orange-100 text-orange-500">
            Rating: {rating}
          </button>
          <button onClick={()=>handleBookDetails(bookId)} className="btn bg-[#23BE0A] text-white btn-xs">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListedBook;
