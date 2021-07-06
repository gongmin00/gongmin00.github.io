import React, {useState} from "react"
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import { Document, Page} from 'react-pdf/dist/esm/entry.webpack'
import "./terms.css"
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
import { useWindowWidth } from '@wojtekmaj/react-hooks';
const Terms = ()=>{
    const width=useWindowWidth()
    const [pageNum, setPageNum]=useState(1)
    const [numPages, setNumPages]=useState(null)
    const onDocLoadSuccess =({numPages})=>{
        setNumPages(numPages)
        setPageNum(1)

    }
    const changePage =(offset)=>{
      setPageNum(prePageNum=>prePageNum+offset)
    }
    const nexPage =()=>{
      changePage(1)
    }
    const prePage =()=>{
      changePage(-1)
    }
    return(
        <div>
            <Document file="OPPOHackTerms.pdf" onLoadSuccess={onDocLoadSuccess}>
            {/* {
              Array.from(
                new Array(numPages),
                (el, index) => (
                  <Page
                    key={`page_${index + 1}`}
                    pageNumber={index + 1}
                    width={Math.min(width * 0.9)}
                  />
                ),
              )
            } */}<Page pageNumber={pageNum}  width={Math.min(width * 0.98)}/>
            </Document>
            <div className="page-container">
            <div>Page {pageNum} of {numPages}</div>
            <button className="page-btn" disabled={pageNum<=1} onClick={prePage}>Prev</button>
            <button className="page-btn" disabled={pageNum>=numPages} onClick={nexPage}>Next </button>
            </div>
        </div>
        
    )
}
export default Terms