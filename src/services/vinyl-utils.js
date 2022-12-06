
export const compare = (sortBy) => (a, b) => {
  if (sortBy === 'artist') {
    const artistComparator = a.artist.localeCompare(b.artist);
    return artistComparator === 0 ? (a.year - b.year) : artistComparator
  }
  else if(sortBy === 'title') {
    return a.title.localeCompare(b.title)
  }
  return a.year - b.year
}


export const filter = () => ({ artist, title }) => {


  return artist.toLocaleLowerCase().includes(search.value.toLocaleLowerCase()) ||
    title.toLocaleLowerCase().includes(search.value.toLocaleLowerCase())
}
