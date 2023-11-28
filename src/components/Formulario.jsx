import { useEffect, useState } from "react";
import uuid from "react-uuid";

const Formulario = ({
  setAnimacion,
  paciente,
  pacientes,
  setPacientes,
  setPaciente,
  setMostrar,
}) => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");
  const [error, setError] = useState(false);

  console.log(pacientes)

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setSintomas(paciente.sintomas);
    }
  }, [paciente]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const objetoPaciente = {
      nombre,
      email,
      fecha,
      sintomas,
      id: uuid(),
    };
    if ([nombre, email, fecha, sintomas].includes("")) {
      setError(true);
      return;
    }
    
    setError(false);

    if (paciente.id) {
      const pacientesEditados = pacientes.map((pacienteEditado) =>
        pacienteEditado.id === paciente.id ? objetoPaciente : pacienteEditado
      );
      setPacientes(pacientesEditados);
      setPaciente({});
    } else {
      setPacientes([...pacientes, objetoPaciente]);
      setAnimacion(true);
      
    }

    setNombre("");
    setEmail("");
    setFecha("");
    setSintomas("");
  };

  return (
    <div className="md:w-2/5">
      <h2 className="text-center font-semibold text-xl">Formulario</h2>
      <form onSubmit={handleSubmit} className="my-2">
        {error && (
          <div className="p-3  text-center mb-2 mx-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400">
            <span className="font-medium ">
              Todos los campos son obligatorios
            </span>
          </div>
        )}
        <div className="mx-4">
          <div className="mb-3">
            <label
              htmlFor="first_name"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Nombre
            </label>
            <input
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Escriba su nombre..."
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="last_name"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Correo
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="last_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="correo@correo.com"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="company"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Fecha
            </label>
            <input
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
              type="date"
              id="company"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="phone"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Sintomas
            </label>
            <textarea
              value={sintomas}
              onChange={(e) => setSintomas(e.target.value)}
              id="phone"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {paciente.id ? "Editar Paciente" : "Agregar Paciente"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Formulario;
