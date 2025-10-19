import { useContext } from "react";
import { PhotosContext } from "../shared/shared";

export default function Photos({ title }) {
  const { photos, welcome } = useContext(PhotosContext);

  return (
    <>
      <div>
        <h1>{title}</h1>
        {welcome()}
        {photos && (
          <ul>
            {photos.map((element) => (
              <li key={element.id}>{element.url}</li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
