export{}
exports.handler = async () => {
  console.log('function ran');

  const data = { name: "Alex"}

  return {
    statusCode: 200,
    body: JSON.stringify(data)
  }
};