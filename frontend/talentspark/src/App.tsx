import { useEffect, useState } from "react";
import type { Company } from "./types/company";
import { getCompanies } from "./Services/CompanyServices";

function App() {
  const [companies, setCompanies] = useState<Company[]>([]);

  useEffect(() => {
    getCompanies().then(setCompanies);
  }, []);

  return (
    <div>
      <h1>Companies</h1>

      {companies.map((company) => (
        <div key={company.id}>
          <h2>{company.name}</h2>
          <p>{company.address}</p>
          <p>{company.phone}</p>
          <p>{company.location}</p>
        </div>
      ))}
    </div>
  );
}

export default App;