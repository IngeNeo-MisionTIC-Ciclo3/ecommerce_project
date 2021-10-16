import React, {useRef} from "react";
import { addProduct } from "utils/productos/api.productos";
import { ToastContainer, toast } from "react-toastify";

const RegistroProductos = () => {
	const forma = useRef(null);

	const envioForm = async (e) => {
		e.preventDefault();
		const fd = new FormData(form.current);

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
				e.target.resert();
			},
			(error) => {
				console.log (error);
				toast.error('Error no se puede crear el producto');
			}
		);
	};

	return(
		<div className="flex flexcol items-center min-h-screen px-4 py-2 bg-blue-70 sm:px-6 lg:px-8">
			<h2 className="py-4 mt-6 text-3xl font-extrabold text-center text-blue-700">
				Crear un nuevo producto
			</h2>
			<form ref={forma} onSubmit={envioinfo} className="flex flex-col">
				<label className="flex flex-col" htmlFor="nom_producto">
					Nombre
					<input name="nom_producto" type="text" placeholder="Nombre producto" className="p-2 m-2 border-blue-500 rounded-lg bg-blue-70" required="true"/>
				</label>
				<label className="flex flex-col" htmlFor="descripcion">
					Descripcion
					<input name="descripcion" type="textarea" placeholder="Descripcion" className="p-2 m-2 border-blue-500 rounded-lg bg-blue-70" required="true" />
				</label>
				<label className="flex flex-col" htmlFor="valorU">
					Valor Unitario
					<input name="valorU" type="number" placeholder="Valor Unitario" className="p-2 m-2 border-blue-500 rounded-lg bg-blue-70" required="true" />
				</label>
				<label className="flex flex-col" htmlFor="cantidad">
					Cantidad
					<input name="cantidad" type="number" placeholder="Cantidad" className="p-2 m-2 border-blue-500 rounded-lg bg-blue-70" />
				</label>
			
				<label className="flex flex-col" htmlFor="estado">
					Estado actual
					<select name="estado" id="" className="p-2 m-2 border-blue-500 rounded-lg bg-blue-70" required defaultValue={0}>
						<option disabled value={0}>
							seleccione una opcion
						</option>
						<option>Disponible</option>
						<option>No Disponible</option>
					</select>
				</label>
				<button type = "submit" className ="col-span-2 text-white">
					guardar producto
				</button>

			</form>

		</div>

	)
};

export default RegistroProductos;
