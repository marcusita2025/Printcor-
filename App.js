
import React, { useState } from "react";

export default function FlexoCalculator() {
  const [largura, setLargura] = useState(1000); // mm
  const [espessura, setEspessura] = useState(50); // micra
  const [diametroInterno, setDiametroInterno] = useState(76); // mm
  const [diametroExterno, setDiametroExterno] = useState(400); // mm
  const [gramatura, setGramatura] = useState(0); // g/m²
  const [densidade, setDensidade] = useState(0.92); // g/cm³
  const [resultado, setResultado] = useState(null);

  const calcular = () => {
    const dExt = diametroExterno / 10; // cm
    const dInt = diametroInterno / 10; // cm
    const t = espessura / 10000; // cm
    const larguraM = largura / 1000; // m

    const comprimento = Math.PI * (Math.pow(dExt, 2) - Math.pow(dInt, 2)) / (4 * t);
    const area = comprimento * larguraM;

    let peso = 0;
    if (gramatura > 0) {
      peso = area * gramatura / 1000;
    } else {
      peso = area * espessura / 1000 * densidade;
    }

    setResultado({ comprimento: comprimento.toFixed(0), area: area.toFixed(1), peso: peso.toFixed(2) });
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-xl font-bold mb-4">PrintcorCalculator</h1>
      <div className="grid grid-cols-2 gap-2">
        <label>Largura (mm)<input type="number" value={largura} onChange={e => setLargura(+e.target.value)} className="w-full border p-1" /></label>
        <label>Espessura (micras)<input type="number" value={espessura} onChange={e => setEspessura(+e.target.value)} className="w-full border p-1" /></label>
        <label>Diâmetro interno (mm)<input type="number" value={diametroInterno} onChange={e => setDiametroInterno(+e.target.value)} className="w-full border p-1" /></label>
        <label>Diâmetro externo (mm)<input type="number" value={diametroExterno} onChange={e => setDiametroExterno(+e.target.value)} className="w-full border p-1" /></label>
        <label>Gramatura (g/m²)<input type="number" value={gramatura} onChange={e => setGramatura(+e.target.value)} className="w-full border p-1" /></label>
        <label>Densidade (g/cm³)<input type="number" step="0.01" value={densidade} onChange={e => setDensidade(+e.target.value)} className="w-full border p-1" /></label>
      </div>
      <button onClick={calcular} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">Calcular</button>
      {resultado && (
        <div className="mt-4 border-t pt-4">
          <p><strong>Comprimento:</strong> {resultado.comprimento} m</p>
          <p><strong>Área:</strong> {resultado.area} m²</p>
          <p><strong>Peso estimado:</strong> {resultado.peso} kg</p>
        </div>
      )}
    </div>
  );
}
