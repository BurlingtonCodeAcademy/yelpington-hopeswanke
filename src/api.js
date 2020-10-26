export default async function getRest (url){
    const res = await fetch(url)
    return res.json()
}

  