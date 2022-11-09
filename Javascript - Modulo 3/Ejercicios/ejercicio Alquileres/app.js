const container = document.getElementById('container');
const modal = document.getElementById('modal');
const close = document.getElementById('close');
const deleteModal = document.getElementById('deleteModal');
const closeDelete = document.getElementById('closeDelete');
const editModal = document.getElementById('editModal');
const closeEdit = document.getElementById('closeEdit');
const commentaries = document.getElementById('commentaries');

const alquileresTable = document.getElementById('alquileresTable');

const nombreGuardar = document.getElementById('nombreGuardar');
const apellidoGuardar = document.getElementById('apellidoGuardar');
const edadGuardar = document.getElementById('edadGuardar');
const estadoGuardar = document.getElementById('estadoGuardar');
const saldoGurdar = document.getElementById('saldoGurdar');
const btnGuardar = document.getElementById('btnGuardar');

const idEliminar = document.getElementById('idEliminar');
const btnEliminar = document.getElementById('btnEliminar');

const nombreEditar = document.getElementById('nombreEditar');
const apellidoEditar = document.getElementById('apellidoEditar');
const edadEditar = document.getElementById('edadEditar');
const estadoEditar = document.getElementById('estadoEditar');
const saldoEditar = document.getElementById('saldoEditar');
const idEditar = document.getElementById('idEditar');
const btnEditar = document.getElementById('btnEditar');

const showModal = () => {
  modal.classList.add('is-visible');
};
const closeModal = () => {
  modal.classList.remove('is-visible');
};

const showModalDelete = () => {
  deleteModal.classList.add('is-visible');
};
const closeModalDelete = () => {
  deleteModal.classList.remove('is-visible');
};

const showModalEdit = () => {
  editModal.classList.add('is-visible');
};
const closeModalEdit = () => {
  editModal.classList.remove('is-visible');
};

close.addEventListener('click', closeModal);
closeDelete.addEventListener('click', closeModalDelete);
closeEdit.addEventListener('click', closeModalEdit);

window.addEventListener('click', (event) => {
  if (event.target == modal) {
    closeModal();
  }
  if (event.target == modal) {
    closeModal();
  }
});

const openModal = () => {
  showModal();
};

const openModalDelete = (id) => {
  showModalDelete();
  idEliminar.value = id;
};

const openModalEdit = (id) => {
  showModalEdit();
  fetch(`${URL_BASE}/${id}`)
    .then((res) => res.json())
    .then((alquiler) => {
      nombreEditar.value = alquiler.nombre;
      apellidoEditar.value = alquiler.apellido;
      edadEditar.value = alquiler.edad;
      emailEditar.value = alquiler.email;
      estadoEditar.value = alquiler.estado;
      saldoEditar.value = alquiler.saldo;
      idEditar.value = id;
    });
};

btnEditar.addEventListener('click', () => {
  const id = idEditar.value;
  const alquiler = {};
  alquiler.nombre = nombreEditar.value;
  alquiler.apellido = apellidoEditar.value;
  alquiler.edad = edadEditar.value;
  alquiler.email = emailEditar.value;
  alquiler.estado = estadoEditar.value;
  alquiler.saldo = saldoEditar.value;
  fetch(`${URL_BASE}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(alquiler),
  }).then((res)=> res.json());
});

btnEliminar.addEventListener('click', () => {
  const id = idEliminar.value;
  fetch(`${URL_BASE}/${id}`, { method: 'DELETE' }).then((res) => res.json());
});

myBtn.addEventListener('click', openModal);

const URL_BASE = 'https://6235d0014d0977f1db3f826b.mockapi.io/alquileres';

const renderCard = () => {
  fetch(URL_BASE)
    .then((res) => res.json())
    .then((data) => {
      alquileresTable.innerHTML = data
        .map((alquiler) => {
          return `<tr>
      <td>${alquiler.nombre}</td>
      <td>${alquiler.apellido}</td>
      <td>${alquiler.email}</td>
      <td>${alquiler.edad}</td>
      <td>${alquiler.estado}</td>
      <td>${alquiler.saldo}</td>
      <td>
        <span class="action" onclick="openModalEdit(${alquiler.id})">
          <i class="fas fa-edit"></i>
        </span>
        <span class="action" onclick="openModalDelete(${alquiler.id})">
          <i class="fas fa-trash"></i>
        </span>
      </td>
    </tr>`;
        })
        .join('');
    });
};

renderCard();

btnGuardar.addEventListener('click', () => {
  const alquiler = {};
  alquiler.nombre = nombreGuardar.value;
  alquiler.apellido = apellidoGuardar.value;
  alquiler.edad = edadGuardar.value;
  alquiler.email = emailGuardar.value;
  alquiler.estado = estadoGuardar.value;
  alquiler.saldo = saldoGurdar.value;

  fetch(URL_BASE, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(alquiler),
  }).then((res) => res.json());
});
