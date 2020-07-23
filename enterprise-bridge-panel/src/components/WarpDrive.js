import React, { useContext } from 'react';
import { EnterpriseContext } from './EnterpriseContext';
import './Panel.css';
// Motor de dobra

// - O motor de dobra, ao ser ativado, ocupa duas unidades de energia.
// - O motor de dobra só pode ser ativado 
// se as armas e escudos estiverem totalmente desabilitados.

export default function WarpDrive() {
  const { warpSpeed, engageWarpSpeed, disengageWarpSpeed } = useContext(EnterpriseContext);

  return (
    <div className="panel">
      <span>Motor de Dobra</span>
      <div className={`alert-light ${warpSpeed ? 'green-light' : 'red-light'}`} />
      <button onClick={warpSpeed ? disengageWarpSpeed : engageWarpSpeed}>
        {`${warpSpeed ? 'Desligar' : 'Ligar'}`} o Turbo
      </button>
      <span>Armas e escudos devem estar desligados</span>
    </div>
  );
}
