import React from 'react'

const Pagination = ({page, setPage, todoLimit, totalTodoCnt}: {page:number, setPage: React.Dispatch<React.SetStateAction<number>>, todoLimit: number, totalTodoCnt: number}) => {
  console.log(page, setPage);

  const onClickMovePage = (event: React.MouseEvent<HTMLElement>) => {
    console.log('pageClick!');
    console.log(event.currentTarget);
    console.log(event.currentTarget.dir)
  }

  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
    {[1,2,3,4,5].map((el,idx) => {
        return <button key={idx+1} 
                       style={{
                        fontWeight: 'bold',
                        borderRadius: '10px',
                        width: '60px',
                        height: '60px',
                        textAlign: 'center',
                        marginTop: '10px',
                        marginLeft: '5px',
                        backgroundColor: 'white'
                        }}
                        onClick={onClickMovePage}
                >{el}
                </button>
    })}  
    </div>
  )
}

export default Pagination
