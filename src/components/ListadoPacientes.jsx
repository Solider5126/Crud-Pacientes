import Paciente from "./Paciente";

const ListadoPacientes = ({
  pacientes,
  animacion,
  setPaciente,
  eliminarPaciente,
  mostrar,
}) => {
  return (
    <div className="md:w-3/5 md:mt-0 mt-5 ">
      <p className="text-center font-semibold text-xl">ListadoPacientes</p>
      <div className="md:h-[45rem] overflow-y-scroll">
        {mostrar ? (
          pacientes.map((paciente) => (
            <Paciente
              key={paciente.id}
              paciente={paciente}
              eliminarPaciente={eliminarPaciente}
              animacion={animacion}
              setPaciente={setPaciente}
              mostrar={mostrar}
            />
          ))
        ) : (
          <p className="text-center font-semibold text-lg my-3">
            No hay Pacientes
          </p>
        )}
      </div>
    </div>
  );
};

export default ListadoPacientes;
