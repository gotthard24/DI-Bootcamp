const Search =(props)=>{
    return(
        <>
            <input placeholder="Search" onChange={(e)=>props.a(e.target.value)}/>
        </>
    )
}

export default Search