import Product from "./Product/Product";
import TestSextion from "./TestSextion/TestSextion";
import UserListSection from "./UserListSection/UserListSection";

export default function App() {
  return (
    <div>
      <h1 className="app-header">Best selling</h1>
      <ul className="products-list">
        <Product
          name="Tacos With Lime"
          imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
          price={10.99}
        />
        <Product
          name="Fries and Burger"
          imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
          price={14.29}
        />
        <Product name="Suck and Roll" price={14.88} />
      </ul>
      <TestSextion />
      <UserListSection />
    </div>
  );
}
