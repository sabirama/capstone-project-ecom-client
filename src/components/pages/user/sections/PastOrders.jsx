import Get from "../../../lib/http/get";

const PastOrders = () => {
  function getOrders() {
    const { data } = Get("orders").then((response) => {
      console.log(response);
      console.log(data);
    });
  }
  return (
    <>
      <button onClick={getOrders}></button>
    </>
  );
};

export default PastOrders;
