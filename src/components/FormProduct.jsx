// import React from 'react'

function FormProduct({updateItem}) {

    const handleSubmit = (e) => {
    e.preventDefault()
      const data = new FormData(e.target)
      const product = {
        product: data.get("product"),
        price: data.get("price")
      }
      // setItem()
      updateItem((prevState)=>{
        const newItem = [...prevState, product]
        // updateItem(newItem)
        return newItem
      })
  }

  return (
    <>
          <form onSubmit={handleSubmit}>
      <div>
      <label htmlFor="product">Product</label>
      <input type="text" id="product" name="product"/>
      </div>
      <div>
      <label htmlFor="price">Price</label>
      <input type="number" id="price" name="price" />
      </div>
      <button>SUBMIT</button>
    </form>
    </>
  )
}

export default FormProduct