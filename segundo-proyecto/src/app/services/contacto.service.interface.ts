import { ContactoModel } from '../models/contacto.model';
import { Observable, of } from 'rxjs'; 

export abstract class ContactoServiceInterface {

    abstract getContactos() : Observable<ContactoModel[]>;

    abstract agregar(nuevo : ContactoModel) : Observable<any>;

    abstract eliminar(id : number) : Observable<any>;

    abstract modificar(id: number, modificado: ContactoModel): Observable<any>;
}