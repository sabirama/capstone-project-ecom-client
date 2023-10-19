const book = (prop) => {
  return (
    <>
      <h1>{prop.book.title}</h1>
      <p>{prop.book.book_details.body}</p>
      <p>{prop.book.price}</p>
    </>
  );
};

export default book;
