import {Request, Response} from 'express';
import Brote from '../models/brotes';

const getBrotes = async (req: Request, res: Response) => {
    try{
        const results = await Brote.find({}).populate('students');
        return res.status(200).json(results);
    } catch (err) {
        return res.status(404).json(err);
    }
}

const getBrote = async (req: Request, res: Response) => {
    try{
        const results = await Brote.find({"_id": req.params.id}).populate('students');
        return res.status(200).json(results);
    } catch (err) {
        return res.status(404).json(err);
    }
}

const updateBrote = async (req: Request, res: Response) => {

}

export default {getBrotes, getBrote, updateBrote};