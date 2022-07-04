import { Request, Response } from 'express';
import { PersonService } from '../service/PersonService';
import { CustomLogger } from '../config/Logger'
let Person = new PersonService();

export class PersonController {
    
    constructor() { }
    
    public GpDelete(req: Request, res: Response) {
Person.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into PersonController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from PersonController.ts: GpDelete');
    })}
public GpSearch(req: Request, res: Response) {
Person.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into PersonController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from PersonController.ts: GpSearch');
    })}
public GpSearchForUpdate(req: Request, res: Response) {
Person.GpSearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into PersonController.ts: GpSearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from PersonController.ts: GpSearchForUpdate');
    })}
public GpUpdate(req: Request, res: Response) {
Person.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into PersonController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from PersonController.ts: GpUpdate');
    })}
public GpGetAllValues(req: Request, res: Response) {
Person.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into PersonController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from PersonController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
Person.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into PersonController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from PersonController.ts: GpCreate');
    })}


}