export default function Items({ children, photos }) {
  return (
    <>
      <div>
        {children}
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
