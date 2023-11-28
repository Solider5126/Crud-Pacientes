import { useState } from "react";

const Paciente = ({ paciente, eliminarPaciente, animacion, setPaciente }) => {
  const [eliminar, setEliminar] = useState(false);

  const handleEliminar = () => {
    const respuesta = window.confirm("¿Deseas eliminar este paciente?");

    if (respuesta) {
      setEliminar(true);
      setTimeout(() => {
        eliminarPaciente(paciente.id);
      }, 1000);
    }
  };

  return (
    <section
      className={`bg-white p-2 px-4 mx-5 rounded-lg my-3 ${
        animacion ? "animate-jump-in" : ""
      } ${eliminar ? "animate-jump-out" : ""} `}
    >
      <div className="my-1">
        <p>
          Nombre: <span>{paciente.nombre}</span>{" "}
        </p>
      </div>
      <div className="my-1">
        <p>
          Email: <span>{paciente.email}</span>{" "}
        </p>
      </div>
      <div className="my-1">
        <p>
          Fecha: <span>{paciente.fecha}</span>{" "}
        </p>
      </div>
      <div className="my-1">
        <p>
          Sintomas: <span>{paciente.sintomas}</span>{" "}
        </p>
      </div>
      <div className="flex justify-between mt-3">
        <button
          onClick={() => setPaciente(paciente)}
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Editar
        </button>
        <button
          onClick={handleEliminar}
          type="button"
          className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        >
          Eliminar
        </button>
      </div>
    </section>
  );
};

export default Paciente;
