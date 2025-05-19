import type { workexp } from "../types/work";
import workdb from '../data/workexp.json';


const API_DELAY=500;
export const getAllwork =():Promise<workexp[]>=>{
return new Promise((resolve)=> {
setTimeout(() => {
    resolve(workdb as unknown as workexp[]);

}, API_DELAY);

});
};

export const getworkid =(id:number):Promise<workexp | undefined> =>{
    return new Promise ((resolve)=>{
        setTimeout(() => {
            const work = (workdb as unknown as workexp[]).find((p)=> p.id === id);
            resolve(work);
        }, API_DELAY);
    })
    
}