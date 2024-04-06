import React, { useState, useEffect } from "react";
import { Card } from "flowbite-react";

const Shop = () => {
  const [books, setBooks] = useState([]);
  const [isPaymentFormOpen, setIsPaymentFormOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/all-books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  const handleBuyNowClick = (book) => {
    setSelectedBook(book);
    setIsPaymentFormOpen(true);
  };

  const handleFormClose = () => {
    setIsPaymentFormOpen(false);
    setSelectedBook(null);
  };

  const handlePaymentSubmit = (paymentDetails) => {
    // Process payment details (send to backend, display confirmation, etc.)
    console.log("Payment details:", paymentDetails);
    const alertMessage = `Thank your for your shopping of "${selectedBook.bookTitle}"`;
    window.alert(alertMessage);
    setIsPaymentFormOpen(false);
    setSelectedBook(null); // Reset for future purchases
  };

  return (
    <div className="mt-28 px-4 lg:px-36">
      <h2 className="text-5xl font-bold text-center">All Books Are Here</h2>

      <div className="grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1">
        {books.map((book) => (
          <Card key={book.id}>
            <img src={book.imageURL} alt="" className="h-96" />
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <p>{book.bookTitle}</p>
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {/* Book description */}
            </p>

            <button
              className="bg-blue-700 font-semibold text-white py-2 rounded"
              onClick={() => handleBuyNowClick(book)}
            >
              Buy Now
            </button>
          </Card>
        ))}
      </div>

      {isPaymentFormOpen && selectedBook && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-200 bg-opacity-50 z-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded shadow-md">
            <h3 className="text-xl font-bold mb-4">
              Payment Details for {selectedBook.bookTitle}
            </h3>
            {/* Implement your payment form here */}
            <form onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
              <br />
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
              <br />
              {/* Include other payment details as needed (address, credit card info, etc.) */}
              <button
                onSubmit={handlePaymentSubmit}
                type="submit"
                className="bg-blue-700 text-white py-2 px-4 rounded"
              >
                Pay Now
              </button>
            </form>
            <button
              className="text-red-500 hover:text-red-700 mt-2"
              onClick={handleFormClose}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shop;

// import React, { useState ,useEffect } from "react";
// import { Card } from 'flowbite-react';

// const Shop = () => {
//   const [books , setBooks]=useState([]);

//   useEffect(()=>{
//     fetch("http://localhost:4000/all-books"). then(res=> res.json()).then(data=>setBooks(data))
//   },[])
//   return (
//     <div className="mt-28 px-4 lg:px-24">
//       <h2 className="text-5xl font-bold text-center">All Books Are Here</h2>

//       <div className="grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1">
//         {
//           books.map(book=><Card
//           >
//             <img src={book.imageURL} alt="" className="h-96"/>
//             <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//               <p>{book.bookTitle}</p>
//             </h5>
//             <p className="font-normal text-gray-700 dark:text-gray-400">
//             <p></p>
//             </p>

//             <button className="bg-blue-700 font-semibold text-white py-2 rounded">Buy Now</button>
//           </Card>
//             )
//         }
//       </div>
//     </div>
//   )
// };

// export default Shop;
