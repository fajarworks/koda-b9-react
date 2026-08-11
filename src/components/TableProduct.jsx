
const TableProduct = ({item}) => {
  console.log(item)

  return (
    <>
    <table>
      <thead>
        <tr>
          <th>No</th>
          <th>Product</th>
          <th>Price</th>
        </tr>
      </thead>

      <tbody>

        {item.map((i,idx)=>{
          return(
            <tr key={idx}>
              <td>{idx}</td>
              <td>{i.product}</td>
              <td>{i.price}</td>
            </tr>
            
          )
        })}
      </tbody>
    </table>
    </>
  )
}

export default TableProduct