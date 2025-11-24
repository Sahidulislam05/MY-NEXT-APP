const page = async ({ params }) => {
  const { id } = await params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();
  return (
    <div>
      <h1 className="text-center my-20 text-green-600 text-xl">
        User Email: {data.email}
      </h1>
    </div>
  );
};

export default page;
