/* define your functions here */

function calculateTotal(quantity, price)
{
    return quantity * price;
}

function outputCartRow(item, total) 
{
    const {product: {title, filename, price}, quantity,} = item;
    const row = `       <tr>
                <td><img src="images/${filename}"></td>
                <td>${title}</td>
                <td>${quantity}</td>
                <td>${price.toFixed(2)}</td>
                <td>${total.toFixed(2)}</td>
                </tr>`
    document.write(row);
}

        
