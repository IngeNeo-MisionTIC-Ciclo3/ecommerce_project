import React, {useRef} from "react";
import { addProduct } from "utils/productos/api.productos";
import { ToastContainer, toast } from "react-toastify";

const RegistroProductos = () => {
	const forma = useRef(null);

	const envinf = async (e) => {
		e.preventDefault();
		const fd = new FormData(forma.current);

		const nuevoProducto ={};
		fd.forEach ((value, key) => {
			nuevoProducto[key] = value;
		});

		const dProducto = {
			nom_producto: nuevoProducto.nom_producto,
			descripcion: nuevoProducto.descripcion,
			valorU: nuevoProducto.valorU,
			cantidad: nuevoProducto.cantidad,
			estado: nuevoProducto.estado,
		};

		await addProduct (
			dProducto,
			(res) => {
				console.log (res.data);
				toast.success('El producto ha sido agregado con exito');
				e.target.reset();
			},
			(error) => {
				console.log (error);
				toast.error('Error no se puede crear el producto');
			}
		);
	};

	return(
		<div className="flex flex-col items-center min-h-screen px-4 py-2 bg-purple-70 sm:px-6 lg:px-8 productos">
			<div className='py-5 my-5'>
				<h2 className="py-4 mt-6 text-3xl font-extrabold text-center text-purple-50 ">
				Crear un nuevo producto
			</h2>
			</div>
			<form ref={forma} onSubmit={envinf} className="flex flex-col px-10 mx-10 opaco">
				<label className="flex flex-col text-gray-50" htmlFor="nom_producto">
					Nombre
					<input name="nom_producto" type="text" placeholder="Nombre producto" className="p-2 m-2 text-black bg-purple-100 border-purple-500 rounded-lg" required="true"/>
				</label>
				<label className="flex flex-col text-gray-50" htmlFor="descripcion">
					Descripcion
					<input name="descripcion" type="textarea" placeholder="Descripcion" className="p-2 m-2 text-black bg-purple-100 border-purple-500 rounded-lg" required="true" />
				</label>
				<label className="flex flex-col text-gray-50" htmlFor="valorU">
					Valor Unitario
					<input name="valorU" type="number" placeholder="Valor Unitario" className="p-2 m-2 text-black bg-purple-100 border-purple-500 rounded-lg" required="true" />
				</label>
				<label className="flex flex-col text-gray-50" htmlFor="cantidad">
					Cantidad
					<input name="cantidad" type="number" placeholder="Cantidad" className="p-2 m-2 text-black bg-purple-100 border-purple-500 rounded-lg" />
				</label>

				<label className="flex flex-col text-gray-50" htmlFor="estado">
					Estado actual
					<select name="estado" id="" className="p-2 m-2 bg-purple-100 border-purple-500 rounded-lg" required defaultValue={0}>
						<option disabled value={0}>
							seleccione una opcion
						</option>
						<option>Disponible</option>
						<option>No Disponible</option>
					</select>
				</label>
				<button
					type='submit'
					className='col-span-2 p-2 m-3 text-white bg-purple-900 rounded-full shadow-md hover:bg-purple-600'
				>
					Guardar Producto
				</button>
				<ToastContainer position='bottom-center' autoClose={4000} />

			</form>

		</div>

	)
};

export default RegistroProductos;
