import { useSelector } from "react-redux";
import Items from "../components/Items";

export default function ItemsPage() {
  const photosState = useSelector((state) => state.photos);
  const { photos } = photosState;
  return (
    <>
      <div>
        <Items photos={photos}>
          <h1>Items</h1>
        </Items>
      </div>
    </>
  );
}
