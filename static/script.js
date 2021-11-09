

async function listCupcakes() {
    resp = await axios.get('/api/cupcakes');
    for (i = 0; i < resp.data.cupcakes.length; i++) {
        addCupcake = generateCupcake(resp.data.cupcakes[i]);
        $('.list-cupcakes').append(addCupcake);
    }
}

function generateCupcake(cupcake) {
    return `
        <div id="${cupcake.id}"> 
            <li>
                ${cupcake.flavor}  / ${cupcake.size} / ${cupcake.rating}
            </li>
            <img src="${cupcake.image}" style="width:200px; height:300px">
            <button class="delete_cupcake" data-id="${cupcake.id}">X</button>
        </div>`;
}

$('button').click(addCupcake)

async function addCupcake(e) {
    e.preventDefault()

    let flavor = $('#flavor').val();
    let size = $('#size').val();
    let rating = $('#rating').val();
    let image = $('#image').val();
    res = await axios.post('/api/cupcakes', {flavor: flavor, 
        size: size,
        rating: rating,
        image: image});

    addCupcake = generateCupcake(res.data.cupcake);
    $('.list-cupcakes').append(addCupcake);

    $('#flavor').val('');
    $('#size').val('');
    $('#rating').val('');
    $('#image').val('');
}


$('.list-cupcakes').on('click', '.delete_cupcake', async function(e) {
    e.preventDefault();
    const id = $(this).data('id');
    await axios.delete(`/api/cupcakes/${id}`);
    $(this).parent().remove()

})

    