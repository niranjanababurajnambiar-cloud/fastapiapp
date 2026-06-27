from pydantic import BaseModel
from typing import Optional
from .job import JobResponse
class CompanyCreate(BaseModel):
    name:str
    email:str
    phone:str 

class ComapnyCreate(ComapnyBase):
    pass

class CompanyUpdate(ComapnyBase):
    name:Optional[str]=None
    email:Optional[str]=None
    phone:Optional[str]=None

class CompanyResponse(CompanyBase):
    id:int
    jobs: list[JobResponse]

    class config:
        from_attributes = True


