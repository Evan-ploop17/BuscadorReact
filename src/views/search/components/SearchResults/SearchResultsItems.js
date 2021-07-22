export default function SearchResultsItems( { name, email } ){
    return(
        <div 
            style={{ backgroundColor:"#e7e7e7",
                marginTop:"1rem",
                marginBottom:"1rem",
                padding: 15,
                width:"100%"
            }} >
                <p>{name}</p>
                <p>{email}</p>
        </div>  
    )
}