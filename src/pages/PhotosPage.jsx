import { useCallback, useEffect, useMemo } from "react";
import { useLoaderData } from "react-router-dom";
import { PhotosContext } from "../shared/shared";
import Photos from "../components/Photos";
import { useDispatch } from "react-redux";
import { photosSuccess } from "../store/photosSlice";

export default function PhotosPage() {
  const photos = useLoaderData();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(photosSuccess(photos));
  }, [dispatch, photos]);

  const calculations = useMemo(() => {
    function calculations() {
      return 10 * 20 * 30;
    }
    return calculations();
  }, []);

  const welcome = useCallback(() => {
    function welcomePage() {
      return <h1>Welcome</h1>;
    }
    return welcomePage();
  }, []);
  return (
    <>
      <PhotosContext.Provider value={{ photos, welcome }}>
        <div>
          {calculations}
          <Photos title={"Photos Page"} />
        </div>
      </PhotosContext.Provider>
    </>
  );
}

export async function PhotosLoader() {
  try {
    const photos = await fetch("https://jsonplaceholder.typicode.com/photos");
    if (!photos.ok) {
      throw new Error(`HTTP error! Status: ${photos.status}`);
    }
    const response = await photos.json();
    return response;
  } catch (err) {
    console.log(err);
    return [];
  }
}
