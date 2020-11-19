import {Request, Response} from 'express';
import Brote from '../models/brotes';

const getBrotes = async (req: Request, res: Response) => {
    try{
        const results = await Brote.find({});
        return res.status(200).json(results);
    } catch (err) {
        return res.status(404).json(err);
    }
}

const getBrote = async (req: Request, res: Response) => {
    try{
        const results = await Brote.find({"name": req.params.name});
        return res.status(200).json(results);
    } catch (err) {
        return res.status(404).json(err);
    }
}

const updateBrote = async (req: Request, res: Response) => {
    const name = req.params.name;
    Brote.update({"name": name}, {$set: {"name": req.body.name, "description": req.body.description, "inicio": req.body.start_date, "final": req.body.finish_date}}).then((data) =>{
        res.status(201).json(data);
    }).catch((err) =>{
        res.status(500).json(err);
    });
}

export default {getBrotes, getBrote, updateBrote};