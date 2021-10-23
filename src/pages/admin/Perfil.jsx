import React, { useRef } from "react";
import { editarUsuario } from "utils/usuarios/api.usuarios";
import { useUser } from "context/userContext";
import { ToastContainer, toast } from "react-toastify";

const Perfil = () => {
	const form = useRef(null);
	const { userData } = useUser();

	const editarPerfil = async (e) => {
		e.preventDefault();
		const fd = new FormData(form.current);

		const datosUsuario = {};
		fd.forEach((value, key) => {
			datosUsuario[key] = value;
		});

		const userEdit = {
			tdocumento: datosUsuario.tdocumento,
			ndocumento: datosUsuario.ndocumento,
			name: datosUsuario.name,
			telefono: datosUsuario.telefono,
		};

		await editarUsuario(
			userData._id,
			userEdit,
			(response) => {
				toast.success('Usuario modificado con éxito');
				window.location.reload(true);
			},
			(error) => {
				toast.error('Error modificando el Usuario');
			}
		);
	};

	return (
		<div className="flex flex-col items-center min-h-screen px-4 py-2 bg-blue-70 sm:px-6 lg:px-8 ">
			<h2 className="py-4 mt-6 text-3xl font-extrabold text-center text-blue-700 ">
				Mi Perfil
			</h2>
			<div cl>
				<img src={userData.picture} alt='foto' className='my-4 rounded-full w-30 h-30' />
			</div>
			<form ref={form} onSubmit={editarPerfil} className="flex flex-col">
				<label className="flex flex-col" htmlFor="tdocumento">
					Tipo de Documento
					<select name="tdocumento" id="" defaultValue={userData.tdocumento} className="p-2 m-2 bg-blue-100 border-blue-500 rounded-lg" required>
						<option disabled value={0}>seleccione una opcion</option>
						<option>Cédula de Ciudadania</option>
						<option>Cédula de Extranjeria</option>
						<option>Pasaporte</option>
					</select>
				</label>
				<label className="flex flex-col" htmlFor="ndocumento">
					Numero de Documento
					<input name="ndocumento" type="number" placeholder="Numero de Documento" defaultValue={userData.ndocumento} className="p-2 m-2 bg-blue-100 border-blue-500 rounded-lg" required="true" />
				</label>
				<label className="flex flex-col" htmlFor="name">
					Nombres
					<input name="name" type="text" placeholder="Nombres" defaultValue={userData.name} className="p-2 m-2 bg-blue-100 border-blue-500 rounded-lg" required="true" />
				</label>
				<label className="flex flex-col" htmlFor="telefono">
					Telefono
					<input name="telefono" type="number" placeholder="Numero telefonico" defaultValue={userData.telefono} className="p-2 m-2 bg-blue-100 border-blue-500 rounded-lg" />
				</label>
				<button
					type='submit'
					className='col-span-2 p-2 m-3 text-black bg-blue-500 rounded-full shadow-md hover:bg-blue-600'
				>
					Editar Perfil
				</button>
				<ToastContainer position='bottom-center' autoClose={4000} />
			</form>
		</div>
	)
};

export default Perfil;
