import SearchResultsItems from "./SearchResultsItems"

export default function SearchResults( { results, isSearching } ) {
    return (
        <div style={{
            width: "100%",
            padding: "0rem 2rem"
        }}>
            {!results?.length && isSearching && <p>No hay reusltados</p>}
            {results?.map( (value) => {
                return(
                    <SearchResultsItems key={value.id} {...value} /> 
                )
            })}
        </div>
    )
}  