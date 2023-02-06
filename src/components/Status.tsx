type StatusProps = {
    status : 'loading' | 'success' | 'error'
}

export const Status = (props: StatusProps)=>{
    return(
        <div>
            <h2>Loading...</h2>
            <h2>Data Fetch Successfully</h2>
            <h2>Error Fetching Data</h2>
        </div>
    )
}