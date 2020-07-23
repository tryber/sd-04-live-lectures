import React, { useContext } from 'react';
import { EnterpriseContext } from '../components/EnterpriseContext';

import './Panel.css';
// Central de Armas
// - As armas podem ser totalmente habilitadas ou desabilitadas 
// com o apertar de um botão;

// - A ativação das armas não ocupa unidades de energia, 
// mas as armas tem três níveis de potência que o operador 
// pode incrementar ou decrementar como quiser. 
// Cada nível de potência ocupa uma unidade de energia. 
// Por exemplo: 
// - (i) armas habilitadas em nível 0 não gastam energia; 
// - (ii) armas habilitadas em nível 3 ocupam 3 unidades de energia;

// Se o motor de dobra está habilitado, as armas não podem ser habilitadas;
// Enquanto as armas estiverem desabilitadas, 
// os níveis de potência não podem ser incrementados.


export default function WeaponsBay() {
  const { weaponsEnabled,
    weaponsOnline,
    weaponsOffline,
    weaponsLevels,
    increaseFirePower,
    decreaseFirePower } = useContext(EnterpriseContext)

  return (
    <div className="panel">
      <span>Armas</span>
      <div className={`alert-light ${weaponsEnabled ? 'green-light' : 'red-light'}`} />
      <button onClick={weaponsEnabled ? weaponsOffline : weaponsOnline}>
        {`${weaponsEnabled ? 'Desabilitar' : 'Habilitar'}`} armas
      </button>
      <span>Nível das armas: {weaponsLevels}</span>
      <button onClick={increaseFirePower}>Aumentar poder de fogo</button>
      <button onClick={decreaseFirePower}>Diminuir poder de fogo</button>
      <span>Nível máximo: 3</span>
    </div>
  );
}
