import { Request, Response } from 'express';
import {PersonDao} from '../dao/PersonDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let Person = new PersonDao();

export class PersonService {
    
    constructor() { }
    
    public  GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into PersonService.ts: GpDelete')
     let  PersonId = req.params.id;
     Person.GpDelete(PersonId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from PersonService.ts: GpDelete')
         callback(response);
         });
    }
    
public  GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into PersonService.ts: GpSearch')
     let  PersonData = req.query;
     Person.GpSearch(PersonData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from PersonService.ts: GpSearch')
         callback(response);
         });
    }
    
public  GpSearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into PersonService.ts: GpSearchForUpdate')
     let  PersonData = req.body;
     Person.GpSearchForUpdate(PersonData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from PersonService.ts: GpSearchForUpdate')
         callback(response);
         });
    }
    
public  GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into PersonService.ts: GpUpdate')
     let  PersonData = req.body;
     Person.GpUpdate(PersonData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from PersonService.ts: GpUpdate')
         callback(response);
         });
    }
    
public  GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into PersonService.ts: GpGetAllValues')
     
     Person.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from PersonService.ts: GpGetAllValues')
         callback(response);
         });
    }
    
public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into PersonService.ts: GpCreate')
     let  PersonData = req.body;
     Person.GpCreate(PersonData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from PersonService.ts: GpCreate')
         callback(response);
         });
    }
    
    
    
    
}