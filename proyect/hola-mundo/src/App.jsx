import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App (){
    


    return (
    <section className='App'>
       <TwitterFollowCard isFollowing username="midudev"> 
        Miguel Angel Duran

               </TwitterFollowCard>

       <TwitterFollowCard isFollowing={false} username="pheralb"> 
        Pablo hernandez
       </TwitterFollowCard>
       

     
    </section>
    )
}