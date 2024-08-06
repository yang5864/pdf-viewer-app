import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import {Document, Page, pdfjs} from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function PdfViewer() {
    const location = useLocation();
    const { pdfName } = location.state;
    const [numPages, setNumPages] = useState(null); // 총 페이지수
    const [pageNumber, setPageNumber] = useState(1); // 현재 페이지

    function onDocumentLoadSuccess({ numPages }) {
        console.log('numPages ${numPages}');
        setNumPages(numPages);
    }

    return (
        <div>
            { console.log(pdfName)}
            <h2>{pdfName}</h2>
            <Document
                file={`/${pdfName}.pdf`}
                onLoadSuccess={onDocumentLoadSuccess}>
                {/* <Page pageNumber={pageNumber} /> */}
            </Document>
            <p>
                Page {pageNumber} of {numPages}
            </p>
            <button onClick={() => setPageNumber(pageNumber - 1)} disabled={pageNumber <= 1}>
                이전 페이지
            </button>
            <button onClick={() => setPageNumber(pageNumber + 1)} disabled={pageNumber >= numPages}>
                다음 페이지
            </button>
        </div>
    );
};

export default PdfViewer;
