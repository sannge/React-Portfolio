import React,{useState,useEffect} from 'react'
import classes from './Projects.module.css'
import Project from './Project/Project'
import SearchBar from '../SearchBar/SearchBar'
import Loading from '../Loading/Loading'
import ReactPaginate from 'react-paginate'
function Projects({state,text,setText,submitted,setSubmitted,paginateData: {offset,tableData,orgTableData,perPage,currentPage},setPaginateData}) {
    const [display,setDisplay] = useState(null)
    
    useEffect(() => {
        
        if(!text) {
        
            let d = (
                state.map((s,index) => (
                    <div key={index} className={classes.Projects}>
                    <a href={s.source} target="_blank" rel = "noopener noreferrer"><Project project={s}/></a>
                    </div>
                ))
            )
            if(d.some(el=>el!==null)) {
                setDisplay([...d,<ReactPaginate
                    previousLabel={"<"}
                    nextLabel={">"}
                    breakClassName={"break-me"}
                    breakLabel={"..."}
                    pageCount={1}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    containerClassName={classes.pagination}
                    subContainerClassName={[classes.pages,classes.pagination].join(' ')}
                    activeClassName={classes.active}
                />])
            }else {
                setDisplay([...d])
            }
        } else {
            let d = (
                state.map((s,index) => (
                    s.header.toLowerCase().replace(/\s/g, '').includes(text) ? (
                        <div key={index} className={classes.Projects}>
                          <a href={s.source} target="_blank" rel = "noopener noreferrer"><Project project={s}/></a>
                        </div>
                    )
                    : null
                ))
            )
            if(d.some(el=>el!==null)) {
                setDisplay([...d,<ReactPaginate
                    previousLabel={"<"}
                    nextLabel={">"}
                    breakClassName={"break-me"}
                    breakLabel={"..."}
                    pageCount={1}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    // onPageChange={handle}
                    containerClassName={classes.pagination}
                    subContainerClassName={[classes.pages,classes.pagination].join(' ')}
                    activeClassName={classes.active}
                />]) 
            }else {
                setDisplay([...d])
            }
               
        }
        // console.log(display)
        // if(display) {
        // let data= display;
        // console.log(display)
        // let slice = data.slice(offset,offset+perPage);
        // setPaginateData({
        //     pageCount: Math.ceil(display.length/perPage),
        //     orgTableData: display
        // })
        // setDisplay(slice);
        // }
        return ()=> setDisplay(null)
    }, [text]);
    const onChange = (e) => {
        setText(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(()=>{
            setSubmitted(false);
        }, 300)
    }
    
    return (
        <div>
            <div className={classes.Search}>
               <SearchBar text={text} submitHandler={submitHandler} onChange={onChange}/>
            </div>
            {
                !display ? <Loading/> : submitted ? <Loading/> : display.some((el)=> el !== null) ? display : <h3 style={{textAlign: 'center'}}>Result Not Found!</h3>
            }

        </div>
    )
}

export default Projects
