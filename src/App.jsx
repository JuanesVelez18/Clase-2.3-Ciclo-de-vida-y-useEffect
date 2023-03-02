import React, { useEffect, useState } from 'react';

const App = () => {
  const colors = ['#845EC2', '#D65DB1', '#FF6F91', '#FF9671', '#FFC75F', '#F9F871'];

  const [counter, setCounter] = useState(5);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [color, setColor] = useState(undefined);

  // CALLBACK DE USEEFFECT SIEMPRE DEBER SER SINCRONO

  // Array vacio = Fase de montado, es decir, cuando el componente se renderiza por primera vez
  // Empty array = Mount
  useEffect(() => {
    const newColor = colors[Math.floor(Math.random() * colors.length)];
    setColor(newColor);
    console.log('Hola, me monté');
  }, []);

  // Cuando cambie el contador y la visibilidad del input
  // Las dependencias que escribimos en el array deben ser variables de estado
  useEffect(() => {
    const newColor = colors[Math.floor(Math.random() * colors.length)];
    setColor(newColor);
    console.log('Hola, se actualizo counter');
  }, [counter]);

  // Sin dependencias = cada actualización del componente
  // useEffect(() => {
  //   const newColor = colors[Math.floor(Math.random() * colors.length)];
  //   setColor(newColor);
  //   console.log('Hola, me actualice');
  // });

  // TODO: Como funciona la fase de desmontado.

  // Casos de uso:
  // MONTADO (MOUNTED):
  //  - Peticiones HTTP (fetch, axios, http request, ...)
  //  - Asignaciones de escuchadores de eventos
  //  - Usar setTimeout y setInterval

  return (
    <div
      className="bg-gray-800 h-screen flex flex-col justify-around items-center p-10 gap-10"
      style={{ backgroundColor: color }}
    >
      <div className="flex flex-col gap-5">
        <h1 className="text-3xl text-white">
          Counter is: <span className="text-cyan-400">{counter}</span>
        </h1>
        <button
          onClick={() => setCounter(counter + 1)}
          className="px-3 py-2 bg-amber-200 hover:bg-amber-400 hover:text-white rounded"
        >
          Increase
        </button>
      </div>
      <div className="flex flex-row gap-3">
        <input className="text-2xl" type={isPasswordVisible ? 'text' : 'password'} />
        <button
          onClick={() => setIsPasswordVisible(!isPasswordVisible)}
          className="px-3 py-2 bg-gray-400 hover:bg-gray-600 hover:text-white rounded"
        >
          See password
        </button>
      </div>
    </div>
  );
};

export default App;
