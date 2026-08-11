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
    <FormProduct updateItem = {setItem}/>
    <TableProduct item = {item}/>
    </>
  )
}

export default Product