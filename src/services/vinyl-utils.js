
export const compare = (sortBy) => (a, b) => {
  if (sortBy === 'artist') {
    return a.artist.localeCompare(b.artist)
  }
  else if(sortBy === 'title') {
    return a.title.localeCompare(b.title)
  }
  return a.year - b.year
}


export const filter = () => ({ artist, title }) => (
  artist.toLocaleLowerCase().includes(search.value.toLocaleLowerCase()) ||
  title.toLocaleLowerCase().includes(search.value.toLocaleLowerCase())
)
