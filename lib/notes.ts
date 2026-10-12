import {readTopicFiles} from './content.mjs';
import openaiMath from './data/openai-math.json';
export const OPENAI_MATH_COLLECTION='OpenAI mathematical manuscript collection';
export type Note={id:string;title:string;subject:string;topicSlug:string;directory:string;summary?:string;body:string;mathBody?:string;position:number;updatedAt:string;discipline?:string;builtin?:boolean};
export type Topic={slug:string;title:string;description:string;order:number};
const files=import.meta.glob<string>('../topics/**/*.md',{query:'?raw',import:'default',eager:true});
const content=readTopicFiles(files);
function stripTitle(markdown:string){return markdown.replace(/^# .+\n\s*/,'').trim()+'\n'}
function linkPapers(markdown:string){return markdown.replace(/\]\(\.\.\/\.\.\/papers\/(paper-[a-z0-9]+)\.md\)/g,'](#$1)')}
export const openaiMathMetadata=openaiMath.metadata;
export const manuscripts=openaiMath.manuscripts;
export const notes:Note[]=[...content.notes,...openaiMath.notes.map(note=>({
 id:note.id,title:note.title,subject:OPENAI_MATH_COLLECTION,topicSlug:'openai-math',
 directory:note.sourceFamilyId,summary:note.description,body:linkPapers(stripTitle(note.explanationMarkdown)),
 mathBody:stripTitle(note.mathematicsMarkdown),position:note.order,updatedAt:openaiMath.metadata.snapshot_date,
 discipline:note.subject,
}))];
export const topics:Topic[]=[...content.topics,{
 slug:'openai-math',title:OPENAI_MATH_COLLECTION,
 description:'372 mathematical result families and 722 manuscript records from the OpenAI maths catalogue, captured 12 October 2026.',
 order:Math.max(...content.topics.map(topic=>topic.order))+1,
}];
