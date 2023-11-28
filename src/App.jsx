import { useEffect, useState } from "react";

import "./App.css";
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
  const INITIAL = JSON.parse(localStorage.getItem("pacientes")) ?? [];
  const [pacientes, setPacientes] = useState(INITIAL);
  const [paciente, setPaciente] = useState({});
  const [animacion, setAnimacion] = useState(false);
  const [mostrar, setMostrar] = useState(false);

  useEffect(() => {
    localStorage.setItem("pacientes", JSON.stringify(pacientes));
    if (pacientes.length > 0) {
      setMostrar(true);
    } else {
      setMostrar(false);
    }
  }, [pacientes]);

  const eliminarPaciente = (id) => {
    const eliminar = pacientes.filter((paciente) => paciente.id !== id);

    setPacientes(eliminar);
  };

  return (
    <>
      <h1 className="text-center text-3xl uppercase font-extrabold my-3">
        Crud <span className="text-sky-500">Pacientes</span>{" "}
      </h1>
      <section className="md:flex my-5">
        <Formulario
          setAnimacion={setAnimacion}
          paciente={paciente}
          pacientes={pacientes}
          setPacientes={setPacientes}
          setPaciente={setPaciente}
          setMostrar={setMostrar}
        />
        <ListadoPacientes
          pacientes={pacientes}
          animacion={animacion}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
          setAnimacion={setAnimacion}
          mostrar={mostrar}
        />
      </section>
    </>
  );
}

export default App;
