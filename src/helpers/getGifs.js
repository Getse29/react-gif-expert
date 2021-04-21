export const getGif = async (category) => {
  const URL = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=sY62oWNtth0WE6Im4mgWAYOcUghCAk1m`;
  const res = await fetch(URL);
  const { data } = await res.json();

  const gifs = data.map(img => {
    return {
      id: img.id,
      title: img.title,
      img: img.images?.downsized_medium.url
    }
  })
  return gifs
}