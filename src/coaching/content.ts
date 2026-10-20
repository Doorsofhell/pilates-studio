export type Validation={reviewer:string;reviewedAt:string;version:string};
export type Media={id:string;exerciseId:string;url:string;sha256:string;bytes:number;license:string;source:string;validation?:Validation};
export type ReformerSetup={machineId:string;version:string;springs:string;footbar:string;headrest:string;straps:string;accessories:string[];entry:string;exit:string;validation:Validation};
export type CoachingContent={exerciseId:string;version:string;status:'draft'|'demo'|'published';validation?:Validation;demonstration?:Media;voice?:Media;setup?:ReformerSetup};
export function publishable(c:CoachingContent,reformer:boolean,machineId?:string){return c.status==='published'&&!!c.validation&&!!c.demonstration?.validation&&!!c.voice?.validation&&c.demonstration.exerciseId===c.exerciseId&&c.voice.exerciseId===c.exerciseId&&(!reformer||!!machineId&&c.setup?.machineId===machineId&&!!c.setup.validation)}
