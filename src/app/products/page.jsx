import Link from "next/link";

const ProductsPage = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await data.json();
  return (
    <div className="text-center my-20 space-y-5 flex flex-col">
      <h1 className="text-red-500 font-semibold text-3xl">Products</h1>
      {posts.map((user) => (
        <Link key={user.id} href={`/products/${user.id}`}>
          {user.name}
        </Link>
      ))}

      {/* <Link href="/products/1">Products 1</Link>
      <Link href="/products/2">Products 2</Link>
      <Link href="/products/3">Products 3</Link>
      <Link href="/products/5">Products 4</Link>
      <Link href="/products/5">Products 5</Link> */}
    </div>
  );
};

export default ProductsPage;
