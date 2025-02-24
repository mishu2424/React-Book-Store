import { useLoaderData, useParams } from "react-router-dom";
import { addToLocalStorage } from "../../Utility/localStorage";
const BookDetails = () => {
  const { bookId } = useParams();
  const data = useLoaderData();
  const selectedBook = data.find((det) => {
    console.log(det.bookId, bookId);
    return det.bookId === Number(bookId);
  });

  const handleReadList = (id,list) =>{
    console.log(id);
     addToLocalStorage(id,list);
  }

  const handleWishList=(id,list)=>{
    addToLocalStorage(id,list)
  }
  console.log(selectedBook);
  return (
    <div id="details-tool-tip" className="flex flex-col lg:flex-row  justify-center gap-5 w-[80vw] lg:w-[70vw] mx-auto my-3">
      <div className="bookImg bg-gray-100 rounded-xl flex-1">
        <img className="lg:w-[425px] lg:h-full mx-auto p-6" src={selectedBook?.image} alt="" />
      </div>
      <div className="book-details border-b flex-1 flex flex-col gap-4">
        <div className="authordetails border-b pb-2">
          <h3 className="text-2xl font-bold">{selectedBook?.bookName}</h3>
          <p>By: {selectedBook?.author}</p>
        </div>
        <div className="category border-b">
            <p>{selectedBook?.category}</p>
        </div>
        <div className="reviewTag border-b flex-grow py-2">
            <p><span className="font-bold">Review:</span> {selectedBook?.review}</p>
            <div><span>Tag</span> <div className="flex items-center gap-3">{
                    selectedBook?.tags.map((tag,idx)=><p key={idx} className="bg-gray-100 text-[#23BE0A] rounded-lg p-2">#{tag}</p>)
                }</div> </div>
        </div>
        <div className="moreDetails space-y-3 my-3">
            <div className="flex items-center gap-5">
                <p className="w-28 text-xs">Number of Pages:</p>
                <p className="font-bold text-start text-xs">{selectedBook?.totalPages}</p>
            </div>
            <div className="flex items-center gap-5">
                <p className="w-28 text-xs">Publisher:</p>
                <p className="font-bold text-xs">{selectedBook?.publisher}</p>
            </div>
            <div className="flex items-center gap-5">
                <p className="w-28 text-xs">Year of Publishing:</p>
                <p className="font-bold text-xs">{selectedBook?.yearOfPublishing}</p>
            </div>
            <div className="flex items-center gap-5">
                <p className="w-28 text-xs">Rating:</p>
                <p className="font-bold text-xs">{selectedBook?.rating}</p>
            </div>

            <div className="detailsBtns flex gap-3">
                <button onClick={()=> handleReadList(bookId,'read-list')} className="btn">Mark As Read</button>
                <button onClick={()=>handleWishList(bookId,'wish-list')} className="btn bg-[#59C6D2] text-white">Wishlist</button>
            </div>
        </div>
      </div>
    </div>

  );
};

export default BookDetails;
