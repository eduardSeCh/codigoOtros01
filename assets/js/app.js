const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
//[fixed] nombre de variables
//[Fixed] querys
const namelocal = document.querySelector('.name');
const blog = document.querySelector('.blog');
const local = document.querySelector('.location');

async function displayUser(username) {
  namelocal.textContent = 'cargando...';
  //[Fixed] Falto colocar try catch
  try {
    const response = await fetch(`${usersEndpoint}/${username}`); //await de fetch
    const data = await response.json(); //await de data
    console.log(data);
    //[fixed] Las commillas
    namelocal.textContent = `${data.name}`;
    blog.textContent = `${data.blog}`;
    local.textContent = `${data.location}`;
  } catch (error) {
    handleError(error)
  }
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  namelocal.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);