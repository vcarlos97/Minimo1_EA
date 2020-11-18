import mongoose, { Schema, Document} from 'mongoose';

//Modelo de objeto que se guarda en la BBDD de MongoDB
const broteSchema = new Schema({
    name: {
        type: String,
        unique: true,
        index: true
    },
    description: {
        type: String
    },
    start_date: {
        type: String
    },
    finish_date: {
        type: String
    },
});

//Interfaz para tratar respuesta como documento
export interface IBrote extends Document {
    name: string;
    description: string;
    start_date: string;
    finish_date: string;
}

//Exportamos modelo para poder usarlo
export default mongoose.model<IBrote>('Brote', broteSchema);