import React,{useState} from 'react'
import classes from './Experiences.module.css'
import Experience from './Experience/Experience'
import ReactPaginate from 'react-paginate'
function Experiences({state}) {
    const [pageNumber,setPageNumber] = useState(0);

    const handlePageChange = (number) => {
        setPageNumber(number.selected);
    }
    
    return (
        <div>
           {
               pageNumber === 0 ? (
               state.map((exp,index) => {
                   if(state.length-1 !== index) {
                    return <Experience key={index} exp={exp}/> 
                   } 
               }))
               :(
                state.map((exp,index) => {
                    if(state.length-1 === index) {
                     return <Experience key={index} exp={exp}/> 
                    } 
                })) 
            }
           <ReactPaginate
                    previousLabel={"<"}
                    nextLabel={">"}
                    breakClassName={"break-me"}
                    breakLabel={"..."}
                    pageCount={2}
                    marginPagesDisplayed={2}
                    onPageChange={handlePageChange}
                    pageRangeDisplayed={5}
                    containerClassName={classes.pagination}
                    subContainerClassName={[classes.pages,classes.pagination].join(' ')}
                    activeClassName={classes.active}
                />
        </div>
    )
}

export default Experiences
