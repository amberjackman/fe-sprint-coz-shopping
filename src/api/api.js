const apicall = async () => {
  const url = `http://cozshopping.codestates-seb.link/api/v1/products?count=4`;
  try {
    const response = await fetch(url);
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.log("Error fetching data:", error);
    return [];
  }
};

export default apicall;
