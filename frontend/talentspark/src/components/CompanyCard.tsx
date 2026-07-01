import type {Company} from "../types/company";
import { getCompany } from "../services/CompanyServices";
import { useState} from "react";


type Props = {
    companies: Company[];
    onedit: (company: Company) => void;
    ondelete: (company: Company) => void;
    onadd: (company: Company) => void;
};


function CompanyCard({ 
    companies, onadd, onedit, ondelete }: Props) {
    const [editCompanyId, setEditCompanyId] = useState<number | null>(null);
    const [editcompany, setEditCompany] = useState<Company | null>(null);
    const [addform, setAddForm] = useState(false);
    const [aditform, setEditForm] = useState<Company>({
        id: 0,
        name: "",
        email: "",
        phone: "",
        location: "",
        jobs: [],
    }); 
    return(
        <div>
            {companies.map((company) => (
                <div key={company.id}>
                    <h1>{company.name}</h1>
                    <p>Email: {company.email}</p>
                    <p>Phone: {company.phone}</p>
                    <p>Location: {company.location}</p>
                    <button onClick={() => setEditCompanyId(company.id)}>Edit</button>
                    <button onClick={() => ondelete(company)}>Delete</button>
                    <hr></hr>
                </div>
            ))}
        </div>
    )
}

export default CompanyCard