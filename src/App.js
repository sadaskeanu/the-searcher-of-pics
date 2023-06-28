import { useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageList from "./components/ImageList/ImageList";
import searchImages from "./api";

function App() {
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    const result = await searchImages(term);

    setImages(result);
  };
  console.log(images);

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      {images.length > 0 && <ImageList images={images} />}
    </div>
  );
}

export default App;
