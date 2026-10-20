export type Profile={name:string;goal:string;level:string;equipment:string;practice:string;matLevel:string;reformerLevel:string;duration:number;frequency:number;accessories:string[];machine:string;onboarded:boolean};
export const defaults:Profile={name:'',goal:'Bien-être & mobilité',level:'Débutant',equipment:'Les deux',practice:'Mixte',matLevel:'Débutant',reformerLevel:'Débutant',duration:20,frequency:3,accessories:[],machine:'',onboarded:false};

export {levels} from '../editorial/model';
