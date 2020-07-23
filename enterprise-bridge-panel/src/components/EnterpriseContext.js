import React, { createContext, useState } from 'react';

const EnterpriseContext = createContext(); // Nao existe nenhum estado ou varivel definido retorna undefined

const EnterpriseProvider = ({ children }) => {
  // Children = nossos componentes que vao ter acesso ao Context

  const [energyGauge, setEnergyGauge] = useState(0); // Nossa energia usada
  const [warpSpeed, setWarpSpeed] = useState(false); // Moto de dobra ligado/desligado
  const [shieldsOnline, setShieldsOnline] = useState(false); // Escudos ligado/desligado
  const [weaponsLevels, setWeaponsLevel] = useState(0);
  const [weaponsEnabled, setWeaponsEnabled] = useState(false);

  // Logica Motores
  const engageWarpSpeed = () => {
    if (warpSpeed || weaponsEnabled || shieldsOnline || energyGauge > 2) return null;

    setWarpSpeed(true);
    setEnergyGauge((currentEnergyGauge) => currentEnergyGauge + 2);
  }

  const disengageWarpSpeed = () => {
    if (!warpSpeed || energyGauge < 2) return null;

    setWarpSpeed(false);
    setEnergyGauge((currentEnergyGauge) => currentEnergyGauge - 2);
  }

  // Logica Escudos
  const raiseShields = () => {
    if (warpSpeed || shieldsOnline || energyGauge > 2) return null;

    setEnergyGauge((currentEnergyGauge) => currentEnergyGauge + 2);
    setShieldsOnline(true);
  }

  const lowerShields = () => {
    if (!shieldsOnline || energyGauge === 0) return null

    setEnergyGauge((currentEnergyGauge) => currentEnergyGauge - 2);
    setShieldsOnline(false);
  }

  const weaponsOffline = () => {
    if (warpSpeed || !weaponsEnabled) return null;

    setWeaponsEnabled(false);
    setEnergyGauge((currentEnergyGauge) => currentEnergyGauge - weaponsLevels);
    setWeaponsLevel(0);
  }

  const weaponsOnline = () => {
    if (warpSpeed || weaponsEnabled) return null;

    setWeaponsEnabled(true);
  }

  const increaseFirePower = () => {
    if (warpSpeed || weaponsLevels === 3 || energyGauge === 4 || !weaponsEnabled)
      return null;

    setEnergyGauge((currentEnergyGauge) => currentEnergyGauge + 1);
    setWeaponsLevel((currentWeaponsLevel) => currentWeaponsLevel + 1);
  }

  const decreaseFirePower = () => {
    if (warpSpeed || weaponsLevels === 0 || energyGauge === 0 || !weaponsEnabled)
      return null;

    setEnergyGauge((currentEnergyGauge) => currentEnergyGauge - 1);
    setWeaponsLevel((currentWeaponsLevel) => currentWeaponsLevel - 1);
  }

  const context = {
    energyGauge,
    // Dados Motor
    warpSpeed,
    engageWarpSpeed,
    disengageWarpSpeed,
    // Dados Escudo
    shieldsOnline,
    lowerShields,
    raiseShields,
    // Dados Arma,
    weaponsEnabled,
    weaponsOnline,
    weaponsOffline,
    weaponsLevels,
    increaseFirePower,
    decreaseFirePower
  }

  return (
    <EnterpriseContext.Provider value={context}>
      {children}
    </EnterpriseContext.Provider>
  )

}

export { EnterpriseContext, EnterpriseProvider };