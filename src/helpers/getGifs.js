export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?limit=10&q=${encodeURI(category)}&api_key=OKE9PCt8k9Iv4eHTH50agySziI3UYtbg`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    console.log('buscar category: '+category);

    const gifs = data.map(img =>{
        return{
            id:     img.id,
            title:  img.title,
            url:    img.images?.downsized_medium.url
        }
    });

    return gifs;
}