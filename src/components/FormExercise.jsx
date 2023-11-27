const FormExercise = () => {
  return (
    <div>
      <form className="flex flex-col">
        <h2 className="text-3xl">Ingrese los datos</h2>
        <label htmlFor="startTime">Hora inicial</label>
        <input id="startTime" type="text" />
        <label htmlFor="duration">Duración (min)</label>
        <input id="duration" type="text" />
        <label htmlFor="distance">Distancia (m)</label>
        <input id="distance" type="text" />
        <label htmlFor="steps">Pasos</label>
        <input id="steps" type="text" />
        <label htmlFor="speed">Promedio de velocidad (m/s)</label>
        <input id="speed" type="text" />
        <label htmlFor="pace">Ritmo (m/km)</label>
        <input id="pace" type="text" />
        <label htmlFor="elevation">Elevación (m)</label>
        <input id="elevation" type="text" />
        <label htmlFor="heart">Ritmo cardíaco (ppm)</label>
        <input id="heart" type="text" />
        <button className="mt-5">Verificar</button>
      </form>
    </div>
  )
}

export default FormExercise