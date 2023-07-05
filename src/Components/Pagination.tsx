import React from 'react'

const Pagination = ({page, setPage}: {page:number, setPage: React.Dispatch<React.SetStateAction<number>>}) => {
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
    {[1,2,3,4,5].map((el,idx) => {
        return <button key={idx+1} 
                       style={{
                        border: '1px solid red',
                        width: '80px',
                        height: '80px',
                        textAlign: 'center'
                        }}
                >{el}
                </button>
    })}  
    </div>
  )
}

export default Pagination
