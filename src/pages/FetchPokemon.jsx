import React from 'react'
import fetchData from '../utils/fetchUrl'

function FetchPokemon() {
    const [data, setData] = React.useState([])
    const [search, setSearch] = React.useState("")
    // console.log(data)
    React.useEffect(()=>{
        (async function(){
            try{
                const data = await fetchData("https://pokeapi.co/api/v2/pokemon?limit=40&offset=0")
                const {results} = data
                const detailPokemon = results.map(async (a)=>{
                    const detail = await fetchData(a.url)
                    // console.log(detail)
                    const {name, types, sprites} = detail
                    const type = types.map((t)=> t.type.name)
                    const sprite = sprites.front_default
                    return {
                        name,
                        type,
                        sprite
                    }
                })
                const pokemons = await Promise.all(detailPokemon)
                setData(pokemons)
            }catch(err){
                console.error(err.message)
            }
        })()
    },[])

    function handleInput(e) {
        e.preventDefault()
        const data = new FormData(e.target)
        const value = data.get("name")
        console.log(value)     
        setSearch(value.toLocaleLowerCase())
        e.target.reset()
    } 

    const filterChar = data.filter((c)=> c.name.toLowerCase().includes(search))
    console.log(filterChar)

  return (
    <>
    <section className='max-w-7xl mx-auto min-h-screen p-8'>
        <h1 className='text-center my-2 font-bold text-2xl'>POKEMON CHARACTERS</h1>
    <form onSubmit={handleInput} className='justify-center mb-5 w-full'>
        <div className='flex'>
        {/* <label htmlFor="name" className='text-center'>POKEMON CHARACTERS</label> */}
        <input className=' w-full border rounded-md px-2 py-1' type="text" name="name" id="name" />
        <button className='min-w-20 cursor-pointer bg-green-500 rounded-lg'>Search</button>
        </div>
    </form>
    <div className='grid grid-cols-4 gap-3'>
    {filterChar.length <= 0 ? (<p>{search} tidak ditemukan</p>) : 
            filterChar.map((item, idx)=>{
        return(            
            <article className='border rounded-lg flex justify-between  items-center gap-2' key={idx}>
                <div className=''>
                <img className='w-50' src={item.sprite} alt={item.name} />       
                </div>
                <div className='flex flex-col w-full gap-2 text-center'>
                <p className=''>{item.name}</p>
                <p>{item.type}</p>
                </div>
            </article>
        )
    })}
    </div>
    </section>
    </>
  )
}

export default FetchPokemon