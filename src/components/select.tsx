export default function SelectRegion({
  region,
  handleSelectChange,
}: {
  region: string;
  handleSelectChange: any;
}) {
  return (
    <select
      className={`bg-transparent font-normal outline-none border-0 appearance-none text-white/40 py-2 px-2.5 ring-1 focus-within:ring-[#D16014]/50 focus-within:ring-2 rounded-md ring-white/20`}
      name="region"
      value={region}
      onChange={handleSelectChange}
    >
      <option className="bg-black" value="ar-SA">
        Region (Default: ar-SA)
      </option>
      <option value="ar-AE">ar-AE</option>
      <option value="ar-KW">ar-KW</option>
      <option value="ar-QA">ar-QA</option>
      <option value="ar-OM">ar-OM</option>
      <option value="ar-BH">ar-BH</option>
      <option value="ar-LB">ar-LB</option>
      <option value="ch-HK">h-HK</option>
      <option value="ch-TW">ch-TW</option>
      <option value="cs-CZ">cs-CZ</option>
      <option value="da-DK">da-DK</option>
      <option value="de-AT">de-AT</option>
      <option value="de-CH">de-CH</option>
      <option value="de-DE">de-DE</option>
      <option value="de-LU">de-LU</option>
      <option value="el-GR">el-GR</option>
      <option value="en-AE">en-AE</option>
      <option value="en-AU">en-AU</option>
      <option value="en-AR">en-AR</option>
      <option value="en-BG">en-BG</option>
      <option value="en-BH">en-BH</option>
      <option value="en-BR">en-BR</option>
      <option value="en-CA">en-CA</option>
      <option value="en-CL">en-CL</option>
      <option value="en-CO">en-CO</option>
      <option value="en-US">en-US</option>
      <option value="en-CY">en-CY</option>
      <option value="en-CZ">en-CZ</option>
      <option value="en-DK">en-DK</option>
      <option value="en-EC">en-EC</option>
      <option value="en-FI">en-FI</option>
      <option value="en-GR">en-GR</option>
      <option value="en-HU">en-HU</option>
      <option value="en-ID">en-ID</option>
      <option value="en-IE">en-IE</option>
      <option value="en-IL">en-IL</option>
      <option value="en-IN">en-IN</option>
      <option value="en-IS">en-IS</option>
      <option value="en-KW">en-KW</option>
      <option value="en-LB">en-LB</option>
      <option value="en-MT">en-MT</option>
      <option value="en-MT">en-MT</option>
      <option value="en-MY">en-MY</option>
      <option value="en-MX">en-MX</option>
      <option value="en-NO">en-NO</option>
      <option value="en-OM">en-OM</option>
      <option value="en-PA">en-PA</option>
      <option value="en-PE">en-PE</option>
      <option value="en-PL">en-PL</option>
      <option value="en-QA">en-QA</option>
      <option value="en-RO">en-RO</option>
      <option value="en-SA">en-SA</option>
      <option value="en-SE">en-SE</option>
      <option value="en-SG">en-SG</option>
      <option value="en-SI">en-SI</option>
      <option value="en-SK">en-SK</option>
      <option value="en-TH">en-TH</option>
      <option value="en-TR">en-TR</option>
      <option value="en-TW">en-TW</option>
      <option value="en-UK">en-UK</option>
      <option value="en-US">en-US</option>
      <option value="en-ZA">en-ZA</option>
      <option value="en-GB">en-GB</option>
      <option value="es-AR">es-AR</option>
      <option value="es-BR">es-BR</option>
      <option value="es-CL">es-CL</option>
      <option value="es-CO">es-CO</option>
      <option value="es-CR">es-CR</option>
      <option value="es-EC">es-EC</option>
      <option value="es-ES">es-ES</option>
      <option value="es-GT">es-GT</option>
      <option value="es-HN">es-HN</option>
      <option value="es-PA">es-PA</option>
      <option value="es-PE">es-PE</option>
      <option value="en-US">es-PY</option>
      <option value="es-SV">es-SV</option>
      <option value="es-MX">es-MX</option>
      <option value="fi-FI">fi-FI</option>
      <option value="fr-BE">fr-BE</option>
      <option value="fr-CA">fr-CA</option>
      <option value="fr-CH">fr-CH</option>
      <option value="fr-LU">fr-LU</option>
      <option value="fr-FR">fr-FR</option>
      <option value="hu-HU">hu-HU</option>
      <option value="id-ID">id-ID</option>
      <option value="it-CH">it-CH</option>
      <option value="it-IT">it-IT</option>
      <option value="ja-JP">ja-JP</option>
      <option value="ko-KR">ko-KR</option>
      <option value="nl-BE">nl-BE</option>
      <option value="nl-NL">nl-NL</option>
      <option value="no-NO">no-NO</option>
      <option value="pl-PL">pl-PL</option>
      <option value="pt-PT">pt-PT</option>
      <option value="pt-BR">pt-BR</option>
      <option value="ro-RO">ro-RO</option>
      <option value="ru-RU">ru-RU</option>
      <option value="ru-UA">ru-UA</option>
      <option value="sv-SE">sv-SE</option>
      <option value="th-TH">th-TH</option>
      <option value="tr-TR">tr-TR</option>
      <option value="vi-VN">vi-VN</option>
      <option value="zh-CN">zh-CN</option>
      <option value="zh-HK">zh-HK</option>
      <option value="zh-TW">zh-TW</option>
    </select>
  );
}
