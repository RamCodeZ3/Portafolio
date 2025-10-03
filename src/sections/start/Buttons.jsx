import { Github, Linkedin, FileText} from 'lucide-react';

const Openpage = (link) => {
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

function Buttons(){
    return(
        <>
        <div className='flex gap-5'>
            <button className='buttonIcon' onClick={() => Openpage('https://github.com/RamCodeZ3')}>
                <Github size={22}/>
            </button>
            <button className='buttonIcon' onClick={() => Openpage('https://www.linkedin.com/in/aram-musset-z3/')}>
                <Linkedin size={22}/>
            </button>
            <button className='buttonIcon ' title='cv'>
                <FileText size={22}/>
            </button>
        </div>
        </>
    )
}

export default Buttons;