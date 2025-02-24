import { useLoaderData } from "react-router-dom";
import { getStoredList } from "../../Utility/localStorage";
import { useEffect, useState } from "react";
import ListedBook from "../ListedBook/ListedBook";
import { BounceLoader } from "react-spinners";

const ListedBooks = () => {
  const [lists, setLists] = useState([]);
  const [readZone, setReadZone] = useState("readLists");
  const [loading, isLoading] = useState(false);
  //   console.log(readZone);
  const books = useLoaderData();
  console.log(books);
  const showLists = (list) => {
    isLoading(true);
    setLists([]);
    const getLists = getStoredList(list);
    // console.log(getLists);
    const newLists = [];
    getLists.forEach((list) => {
      const selectedBooks = books.find((book) => book.bookId === Number(list));
      newLists.push(selectedBooks);
    });
    setTimeout(() => {
      setLists(newLists);
      isLoading(false);
    }, 1000);
  };
  useEffect(() => {
    isLoading(true);
    const getLists = getStoredList("read-list");
    const newLists = [];
    getLists.forEach((list) => {
      const selectedBooks = books.find((book) => book.bookId === Number(list));
      newLists.push(selectedBooks);
    });
    setTimeout(() => {
      setLists(newLists);
      isLoading(false);
    }, 2000);
  }, []);
  return (
    <div className="w-[80vw] lg:w-[70vw] mx-auto my-5">
      <div className="flex items-center join border-b border-gray-200">
        <div
          onClick={() => {
            showLists("read-list");
            setReadZone("readLists");
          }}
          className={`cursor-pointer p-2 join-item ${
            readZone === "readLists" &&
            "border border-gray-200 border-b-0 rounded-t-md rounded-b-none"
          }`}
        >
          Read Books
        </div>
        <div
          onClick={() => {
            showLists("wish-list");
            setReadZone("wishLists");
          }}
          className={`cursor-pointer p-2 join-item ${
            readZone === "wishLists" &&
            "border border-gray-200 border-b-0 rounded-t-md rounded-b-none"
          }`}
        >
          Wishlist
        </div>
      </div>

      <div className="list-container">
        {loading && (
          <div className="mx-auto w-fit py-4">
            <BounceLoader color="rgba(255, 165, 0, 1)" />
          </div>
        )}
        <div className="flex flex-col gap-3 py-3">
          {lists.map((list) => (
            <ListedBook key={list.bookId} list={list}></ListedBook>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
