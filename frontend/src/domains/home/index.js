async function getContract()
{
    const url =`http://localhost:3000/getContract`

    try{
        const res = await axios.get(url);
        const data = res.data;
        
        const contract = document.getElementById('id');
        contract.innerHTML=data[0].id;
        const description = document.getElementById('description')
        description.innerHTML=data[0].description;
        const status = document.getElementById('status')
        status.innerHTML=data[0].status;
    }
    catch (error)  {
        console.log('Veeesh...deu ruim', error);
    }   
}