import React from "react";

const MProductos =() =>{
    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4 py-2 bg-gray-50 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
            <h2 className="mt-6 text-3xl font-extrabold text-center text-blue-600"> Maestro de productos </h2>
            <button
                class="bg-blue-800 text-white active:bg-blue-800 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button">
                Registro
            </button>
                <table className="table-fixed border-collapse border border-blue-800">
                    <thead className="bg-blue-50">
                        <tr>
                            <th className="border border-blue-800 px-6 py-3 text-center text-xs uppercase ">id producto</th>
                            <th className="border border-blue-800 px-6 py-3 text-center text-xs uppercase">Descripcion</th>
                            <th className="border border-blue-800 px-6 py-3 text-center text-xs uppercase">Valor Unitario</th>
                            <th className="border border-blue-800 px-6 py-3 text-center text-xs uppercase">Cantidad</th>
                            <th className="border border-blue-800 px-6 py-3 text-center text-xs uppercase">Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border border-blue-800 px-6 py-3 text-center text-xs">023456</td>
                            <td className="border border-blue-800 text-center text-xs">jean tiro alto</td>
                            <td className="border border-blue-800 text-center text-xs">80000</td>
                            <td className="border border-blue-800 text-center text-xs">20</td>
                            <td className="border border-blue-800 text-center text-xs">Disponible</td>
                            <button>📝</button>
                        </tr>
                        <tr>
                            <td className="border border-blue-800 px-6 py-3 text-center text-xs">345628</td>
                            <td className="border border-blue-800 text-center text-xs">camisa roja</td>
                            <td className="border border-blue-800 text-center text-xs">25000</td>
                            <td className="border border-blue-800 text-center text-xs">13</td>
                            <td className="border border-blue-800 text-center text-xs">Disponible</td>
                            <button>📝</button>
                        </tr>
                        <tr>
                            <td className="border border-blue-800 px-6 py-3 text-center text-xs">327659</td>
                            <td className="border border-blue-800 text-center text-xs">jean tiro medio</td>
                            <td className="border border-blue-800 text-center text-xs">80000</td>
                            <td className="border border-blue-800 text-center text-xs">0</td>
                            <td className="border border-blue-800 text-center text-xs">No disponible</td>
                            <button>📝</button>
                        </tr>
                    </tbody>
                </table>
        </div>
        </div>
    );
            
};

export default MProductos;