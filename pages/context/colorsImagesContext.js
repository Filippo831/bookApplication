import {createContext, useState, useEffect} from "react"

const colors = {}

const searchImages = (string) => {
  //--- GET API DATA --- 
  fetch(`https://bing-image-search1.p.rapidapi.com/images/search?q=${string}`, {
    "method": "GET",
    "headers": {
      "x-rapidapi-key": "381ea1fe6fmsha0118ae3803305dp1abd96jsn5ba87b7fb627",
      "x-rapidapi-host": "bing-image-search1.p.rapidapi.com"
    }
  })
    .then(response => response.json()
    ).then(data => {
      localStorage.setItem("images", JSON.stringify(data.value))
      setImagesArray(data.value)
    })
    .catch(err => {
      console.error(err);
    });
  setImagesArray(JSON.parse(localStorage.getItem("images")))
}

const ImagesArray = createContext([], () => {})
const SearchImagesContext = createContext(searchImages)
const ColorsContext = createContext(colors)

export default function ColorsProvider(props) {
  const [imagesArray, setImagesArray] = useState([])
  return (
    <ImagesArray.Provider value={[]}>
      <ColorsContext.Provider value={[]}>
        <SearchImagesContext.Provider value={searchImages}>
          {props.children}
        </SearchImagesContext.Provider>
      </ColorsContext.Provider>
    </ImagesArray.Provider>
  )

}
export {ColorsContext, ImagesArray, SearchImagesContext}
