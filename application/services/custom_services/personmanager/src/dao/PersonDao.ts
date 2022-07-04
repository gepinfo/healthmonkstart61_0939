import * as mongoose from 'mongoose';
import PersonModel from '../models/Person';
import { CustomLogger } from '../config/Logger'


export class PersonDao {
    private Person = PersonModel;
    constructor() { }
    
    public async GpDelete(PersonId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into PersonDao.ts: GpDelete');

    

    
    
    
    this.Person.findByIdAndRemove(PersonId).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from PersonDao.ts: GpDelete');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearch(PersonData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into PersonDao.ts: GpSearch');

    let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;

    
    
    Object.entries(PersonData).forEach(
                            ([key,value]) => {
                                if(value !== ''){
                                    andkey = key;
                                    and_obj[andkey] = value;
                                }
                                else{
                                    orkey = key;
                                    or_obj[orkey] = { $ne: '' }
                                }
                            }
                        );;
    this.Person.find({$and: [
                            {
                                $or: [
                                   or_obj
                                ]
                            },
                            and_obj
                        ]}).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from PersonDao.ts: GpSearch');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearchForUpdate(PersonData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into PersonDao.ts: GpSearchForUpdate');

    

    
    
    
    this.Person.findOneAndUpdate({ _id: PersonData._id }, PersonData, { new: true }).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from PersonDao.ts: GpSearchForUpdate');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpUpdate(PersonData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into PersonDao.ts: GpUpdate');

    

    
    
    
    this.Person.findOneAndUpdate({ _id: PersonData._id }, PersonData, { new: true }).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from PersonDao.ts: GpUpdate');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into PersonDao.ts: GpGetAllValues');

    

    
    
    
    this.Person.find().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from PersonDao.ts: GpGetAllValues');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpCreate(PersonData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into PersonDao.ts: GpCreate');

    let temp = new PersonModel(PersonData);

    
    
    
    temp.save().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from PersonDao.ts: GpCreate');

        callback(result);
}).catch((error)=>{
callback(error);
});}


}