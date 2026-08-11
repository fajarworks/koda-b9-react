import React from 'react'
import FormProduct from '../components/FormProduct'
import TableProduct from '../components/TableProduct'

const Product = () => {
    const [item, setItem] = React.useState(
        [
            {
                product: "indomie",
                price: 2000
            },
            {
                product:"Bakso",
                price: 1000
            }

    ]
)

  return (
    <>
    <div className='min-h-screen'>

    <FormProduct updateItem = {setItem}/>
    <TableProduct item = {item}/>
    </div>
    </>
  )
}

export default Product