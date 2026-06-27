from sqlalchemy import Column,Interger,String,Enum,ForeignKey
from models.company import Company
from sqlalchemy.orm import declarative_base
from database import Base,engine,SessionLocal
Base=declarative_base()


class Job(Base):
    __tablename__ = "jobs"

    id = Column(Integer, primary_key=True, index=True)
    title=Column(String,nullable=False)
    description=Column(Integer)
    salary=Column(Integer)
    company_id= Column(Integer,ForeignKey("companies.id"))
   
   
