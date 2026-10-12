import {useState} from 'react';
import {ArrowRight,Search,X} from 'lucide-react';
import {manuscripts,notes,openaiMathMetadata,OPENAI_MATH_COLLECTION} from '../lib/notes';
import {Markdown} from './note-content';

const families=notes.filter(note=>note.subject===OPENAI_MATH_COLLECTION);
const disciplines=[...new Set(families.map(note=>note.discipline||''))].sort();
const familyById=new Map(families.map(note=>[note.directory,note]));

export function OpenAIMathCatalogue(){
 const [view,setView]=useState<'families'|'manuscripts'>('families');
 const [query,setQuery]=useState('');
 const [discipline,setDiscipline]=useState('');
 const [status,setStatus]=useState<'current'|'withdrawn'>('current');
 const [visible,setVisible]=useState(60);
 const term=query.trim().toLocaleLowerCase();
 const matchingFamilies=families.filter(note=>(!discipline||note.discipline===discipline)&&(!term||`${note.title} ${note.summary} ${note.body} ${note.mathBody}`.toLocaleLowerCase().includes(term)));
 const matchingPapers=manuscripts.filter(paper=>(status==='withdrawn'?paper.publication_status!=='listed_in_current_catalogue':paper.publication_status==='listed_in_current_catalogue')&&(!discipline||paper.subject===discipline)&&(!term||`${paper.title} ${paper.subject} ${paper.intuitive_description} ${paper.source_abstract}`.toLocaleLowerCase().includes(term)));
 const matching=view==='families'?matchingFamilies:matchingPapers;
 const shownFamilies=matchingFamilies.slice(0,visible);
 const shownPapers=matchingPapers.slice(0,visible);
 function switchView(next:'families'|'manuscripts'){setView(next);setVisible(60);setQuery('')}
 function updateQuery(value:string){setQuery(value);setVisible(60)}
 return <>
  <div className="catalogue-intro"><p>Snapshot: {openaiMathMetadata.snapshot_date} · <a href={`https://github.com/openai/math/tree/${openaiMathMetadata.source_commit}`}>OpenAI source</a>. Family questions are editorial summaries; manuscript abstracts describe each paper’s scope. Claims have not been independently reviewed here.</p></div>
  <div className="catalogue-tabs" role="tablist" aria-label="Catalogue view"><button role="tab" aria-selected={view==='families'} onClick={()=>switchView('families')}>Families <span>372</span></button><button role="tab" aria-selected={view==='manuscripts'} onClick={()=>switchView('manuscripts')}>Manuscripts <span>722</span></button></div>
  <div className="catalogue-filters"><label className="search"><Search size={18}/><input aria-label={`Search ${view}`} placeholder={`Search ${view}…`} value={query} onChange={event=>updateQuery(event.target.value)}/>{query&&<button aria-label="Clear search" onClick={()=>updateQuery('')}><X size={16}/></button>}</label><label className="catalogue-select">Subject<select value={discipline} onChange={event=>{setDiscipline(event.target.value);setVisible(60)}}><option value="">All subjects</option>{disciplines.map(name=><option key={name}>{name}</option>)}</select></label></div>
  {view==='manuscripts'&&<div className="catalogue-status" role="group" aria-label="Publication status"><button aria-pressed={status==='current'} onClick={()=>{setStatus('current');setVisible(60)}}>Current catalogue · 719</button><button aria-pressed={status==='withdrawn'} onClick={()=>{setStatus('withdrawn');setVisible(60)}}>Withdrawn · 3</button></div>}
  <p className="result-count">{matching.length} {view}{status==='withdrawn'&&view==='manuscripts'?' · historical withdrawal records':''}</p>
  <section className="catalogue-list" aria-label={view==='families'?'Result families':'Manuscripts'}>
   {view==='families'?shownFamilies.map(note=><a className="catalogue-row" href={`#${note.id}`} key={note.id}><span className="catalogue-number">{note.directory}</span><span className="catalogue-copy"><strong>{note.title}</strong><small>{note.discipline}</small><span>{note.summary}</span></span><ArrowRight size={17}/></a>):shownPapers.map(paper=><a className="catalogue-row" href={`#${paper.manuscript_id}`} key={paper.manuscript_id}><span className="catalogue-number">{paper.family_id}</span><span className="catalogue-copy"><strong>{paper.title}</strong><small>{paper.subject} · family {paper.family_id}</small><span>{paper.intuitive_description} <em>Family question</em></span></span><ArrowRight size={17}/></a>)}
   {!matching.length&&<p className="empty">No matching {view}. Try another search or subject.</p>}
  </section>
  {visible<matching.length&&<button className="catalogue-more" onClick={()=>setVisible(visible+60)}>Show more ({matching.length-visible} remaining)</button>}
  <p className="catalogue-source">Source package: <a href={`${import.meta.env.BASE_URL}exports/openai-math-knowledge-base.zip`}>download ZIP with catalogue, attribution, and license</a>.</p>
 </>;
}

export function ManuscriptPage({id,onBack}:{id:string;onBack:()=>void}){
 const paper=manuscripts.find(item=>item.manuscript_id===id);
 if(!paper)return null;
 const family=familyById.get(paper.family_id);
 return <main className="reading manuscript-reading"><button className="back-link" onClick={onBack}>← {OPENAI_MATH_COLLECTION}</button><div className="article-heading"><span className="eyebrow">MANUSCRIPT · FAMILY {paper.family_id} · {paper.subject}</span><h1>{paper.title}</h1><p className="dek">{paper.intuitive_description}</p><p className="catalogue-scope">Shared family question. The source abstract below gives this manuscript’s scope.</p></div><div className="manuscript-meta"><span>Publication: {paper.publication_status==='listed_in_current_catalogue'?'Listed in current catalogue':'Withdrawn historical record'}</span><span>Review: not independently reviewed here</span></div><h2>Source abstract</h2><div className="manuscript-abstract"><Markdown body={paper.source_abstract}/></div><div className="manuscript-links"><a href={paper.source_pdf_url}>Manuscript PDF</a><a href={paper.source_directory_url}>Directory and citation instructions</a>{family&&<a href={`#${family.id}`}>Family note: {family.title}</a>}</div><p className="catalogue-source">OpenAI maths source snapshot: {openaiMathMetadata.snapshot_date} · <a href={`https://github.com/openai/math/tree/${openaiMathMetadata.source_commit}`}>source commit</a>.</p></main>;
}
