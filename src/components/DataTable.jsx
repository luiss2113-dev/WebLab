import React, { useState, useEffect } from 'react'

const DataTable = ({ header, medicamentos }) => {
    
    const [titleTable] = useState([Object.keys(header)])

    const itemMedicamento = (data) => (
    
        <div className="flex items-center space-x-3">
            <div className="inline-flex w-10 h-10">
                <img className='my-1 h-8 object-cover rounded-full' alt='User avatar'
                    src='https://cdn-icons-png.flaticon.com/512/3352/3352631.png' />
            </div>
            <div>
                <p>{data}</p>
            </div>
        </div>
    )

  return (
    <table className='mx-auto max-w-4xl w-full whitespace-nowrap rounded-lg bg-white divide-y divide-gray-300 overflow-hidden'>
        <thead className='bg-gray-700'>
              <tr className='text-white text-center'>
                  {
                    titleTable[0].map((title, index) =>
                      <th key={`${title}-${index}`} className='font-semibold text-sm uppercase px-6 py-4'>{title}</th>
                    ) 
                  }
            </tr>
        </thead>
          <tbody className='divide-y divide-gray-200'>
              {
                  medicamentos.map((fila, index) =>
                    <tr key={`${fila}-${index}`}>
                        {
                              (Object.values(fila)).map((data, index) =>
                              {
                                 return <td className='px-6 py-4'  key={`${data}-${index}`} >
                                     {index == 1 ? itemMedicamento(data) : data}
                                  </td>
                                    
                                }
                            )
                        }
                    </tr>
                    ) 
                }
        </tbody>
    </table>
  )
}

export default DataTable