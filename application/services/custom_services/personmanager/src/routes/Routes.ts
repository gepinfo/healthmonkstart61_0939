import { Request, Response, NextFunction } from "express";
import { PersonController } from '../controller/PersonController';


export class Routes {
    private Person: PersonController = new PersonController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/Person/:id').delete(this.Person.GpDelete);
app.route('/Person/get/search').get(this.Person.GpSearch);
app.route('/Person/get/update').put(this.Person.GpSearchForUpdate);
app.route('/Person').put(this.Person.GpUpdate);
app.route('/Person').get(this.Person.GpGetAllValues);
app.route('/Person').post(this.Person.GpCreate);
     }

}