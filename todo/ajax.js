const url ="https://jsonplaceholder.typicode.com/todos";
const method = "GET";
const syncs = true;
const ajax = new XMLHttpRequest();
ajax.open( method, url , syncs);
ajax.onload = () => {
    const data = JSON.parse(ajax.response);
    const table= document.querySelector('table');
    // data.forEach(item => {
    //     const {id ,title ,completed} = item;
    //     table.innerHTML +=`
    //      <tr>
    //       <td>${id}</td>
    //       <td>${title}</td>
    //       <td>${completed}</td>
    //      </tr>
    //     `;
    data.forEach(element => {
        const {email}= element;
        const {city} = element.address;
        const {lng ,lat}= element.address.geo;
        table.innerHTML +=`
         <tr>
           <td>${email}</td>
           <td>${city}</td>
           <td>${lat}</td>
         </tr>
        `;
    
    })

} 
ajax.send();


